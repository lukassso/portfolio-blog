import type { Handler } from '@netlify/functions';
import { getAuth } from 'firebase-admin/auth';
import { app } from '../../src/firebase/server';

const handler: Handler = async (event) => {
  const auth = getAuth(app);

  try {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Successfully signed out' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};

export { handler };
