

const fetchApi = async (message: string): Promise<ApiResponse> => {
  const response = await fetch('/api/openai', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message }),
  });

  if (!response.ok) {
    throw new Error('Failed to fetch response from OpenAI');
  }

  return response.json();
};

export default fetchApi;
