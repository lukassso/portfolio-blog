import {
	Bird,
	CornerDownLeft,
	Mic,
	Paperclip,
	Rabbit,
	Turtle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
	TooltipProvider,
} from "@/components/ui/tooltip";

export function Dashboard2() {
	return (
		<div className="grid w-full ">
			<div className="flex flex-col">
				<main className="grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3">
					<div className="relative hidden flex-col items-start gap-8 md:flex">
						<form className="grid w-full items-start gap-6">
							<fieldset className="grid gap-6 rounded-lg border p-4">
								<legend className="-ml-1 px-1 text-sm font-medium">Settings</legend>
								<div className="grid gap-3">
									<Label htmlFor="model">Model</Label>
									<Select>
										<SelectTrigger id="model" className="items-start [&_[data-description]]:hidden">
											<SelectValue placeholder="Select a model" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="genesis">
												<div className="text-muted-foreground flex items-start gap-3">
													<Rabbit className="size-5" />
													<div className="grid gap-0.5">
														<p>
															Neural <span className="text-foreground font-medium">Genesis</span>
														</p>
														<p className="text-xs" data-description>
															Our fastest model for general use cases.
														</p>
													</div>
												</div>
											</SelectItem>
											<SelectItem value="explorer">
												<div className="text-muted-foreground flex items-start gap-3">
													<Bird className="size-5" />
													<div className="grid gap-0.5">
														<p>
															Neural <span className="text-foreground font-medium">Explorer</span>
														</p>
														<p className="text-xs" data-description>
															Performance and speed for efficiency.
														</p>
													</div>
												</div>
											</SelectItem>
											<SelectItem value="quantum">
												<div className="text-muted-foreground flex items-start gap-3">
													<Turtle className="size-5" />
													<div className="grid gap-0.5">
														<p>
															Neural <span className="text-foreground font-medium">Quantum</span>
														</p>
														<p className="text-xs" data-description>
															The most powerful model for complex computations.
														</p>
													</div>
												</div>
											</SelectItem>
										</SelectContent>
									</Select>
								</div>
								<div className="grid gap-3">
									<Label htmlFor="temperature">Temperature</Label>
									<Input id="temperature" type="number" placeholder="0.4" />
								</div>
								<div className="grid grid-cols-2 gap-4">
									<div className="grid gap-3">
										<Label htmlFor="top-p">Top P</Label>
										<Input id="top-p" type="number" placeholder="0.7" />
									</div>
									<div className="grid gap-3">
										<Label htmlFor="top-k">Top K</Label>
										<Input id="top-k" type="number" placeholder="0.0" />
									</div>
								</div>
							</fieldset>
							<fieldset className="grid gap-6 rounded-lg border p-4">
								<legend className="-ml-1 px-1 text-sm font-medium">Messages</legend>
								<div className="grid gap-3">
									<Label htmlFor="role">Role</Label>
									<Select defaultValue="system">
										<SelectTrigger>
											<SelectValue placeholder="Select a role" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="system">System</SelectItem>
											<SelectItem value="user">User</SelectItem>
											<SelectItem value="assistant">Assistant</SelectItem>
										</SelectContent>
									</Select>
								</div>
								<div className="grid gap-3">
									<Label htmlFor="content">Content</Label>
									<Textarea id="content" placeholder="You are a..." className="min-h-[9.5rem]" />
								</div>
							</fieldset>
						</form>
					</div>
					<div className="relative flex h-full min-h-[50vh] flex-col rounded-xl bg-slate-100 p-4 dark:bg-slate-800 lg:col-span-2">
						<Badge variant="outline" className="absolute right-3 top-3">
							Output
						</Badge>
						<div className="flex-1" />
						<form className="bg-background focus-within:ring-ring relative overflow-hidden rounded-lg border focus-within:ring-1">
							<Label htmlFor="message" className="sr-only">
								Message
							</Label>
							<Textarea
								id="message"
								placeholder="Type your message here..."
								className="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0 dark:bg-slate-800"
							/>
							<div className="flex items-center bg-white p-3 pt-0 dark:bg-slate-800">
								<TooltipProvider>
									<Tooltip>
										<TooltipTrigger asChild>
											<Button variant="ghost" size="icon">
												<Paperclip className="size-4" />
												<span className="sr-only">Attach file</span>
											</Button>
										</TooltipTrigger>
										<TooltipContent side="top">Attach File</TooltipContent>
									</Tooltip>
								</TooltipProvider>
								<TooltipProvider>
									<Tooltip>
										<TooltipTrigger asChild>
											<Button variant="ghost" size="icon">
												<Mic className="size-4" />
												<span className="sr-only">Use Microphone</span>
											</Button>
										</TooltipTrigger>
										<TooltipContent side="top">Use Microphone</TooltipContent>
									</Tooltip>
								</TooltipProvider>
								<Button type="submit" size="sm" className="ml-auto gap-1.5">
									Send Message
									<CornerDownLeft className="size-3.5" />
								</Button>
							</div>
						</form>
					</div>
				</main>
			</div>
		</div>
	);
}
