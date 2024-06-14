export const fetchOpenAi = async (message: string) => {
	const setPath = import.meta.env.DEV ? "/api/openai" : "/.netlify/functions/openai";
	const response = await fetch(setPath, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ message }),
	});
	if (!response.ok) {
		throw new Error("Network response was not ok");
	}
	return response.json();
};
