import { useState } from "react";
import { useOpenAi } from "@/features/dashboards/playground-ai/hooks";
import type { Message } from "@/features/dashboards/playground-ai/types";
import {
	HeaderComponent,
	MessageListComponent,
	MessageInputComponent,
	SettingsFormComponent,
} from "./components";

export function PlaygroundAiComponent() {
	const [message, setMessage] = useState<string>("");
	const [displayedMessages, setDisplayedMessages] = useState<Message[]>([]);
	const mutation = useOpenAi();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const newMessage: Message = { userMessage: message, pending: true };
		setDisplayedMessages((prevMessages) => [...prevMessages, newMessage]);
		setMessage("");

		mutation.mutate(message, {
			onSuccess: (data) => {
				setDisplayedMessages((prevMessages) =>
					prevMessages.map((msg) =>
						msg === newMessage
							? { ...msg, answerAi: data.choices[0].message.content, pending: false }
							: msg,
					),
				);
			},
			onError: () => {
				setDisplayedMessages((prevMessages) =>
					prevMessages.map((msg) =>
						msg === newMessage
							? { ...msg, answerAi: "Error fetching the answer", pending: false }
							: msg,
					),
				);
			},
		});
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
		if (e.key === "Enter") {
			e.preventDefault();
			if (e.ctrlKey) {
				setMessage((prevMessage) => prevMessage + "\n");
			} else return handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>);
		}
	};

	const formatText = (text: string | undefined) => {
		return text?.split("\n\n").map((paragraph, index) => <p key={index}>{paragraph}</p>);
	};

	return (
		<div className="grid w-full">
			<div className="flex flex-col">
				<HeaderComponent />
				<main className="grid flex-1 gap-4 overflow-auto py-4 md:grid-cols-2 lg:grid-cols-3">
					<div className="relative hidden flex-col items-start gap-8 md:flex">
						<SettingsFormComponent />
					</div>
					<div className="relative mt-2 flex min-h-[40vh] flex-col rounded-xl bg-slate-100 p-4 dark:bg-slate-800 lg:col-span-2">
						<div className="flex-1" />
						<MessageListComponent messages={displayedMessages} formatText={formatText} />
						<MessageInputComponent
							message={message}
							setMessage={setMessage}
							handleSubmit={handleSubmit}
							handleKeyDown={handleKeyDown}
						/>
					</div>
				</main>
			</div>
		</div>
	);
}
