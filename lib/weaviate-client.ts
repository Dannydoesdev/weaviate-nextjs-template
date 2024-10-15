import weaviate, { WeaviateClient } from 'weaviate-client';

let client: WeaviateClient | null = null;

export async function getWeaviateClient(): Promise<WeaviateClient> {
  if (client) return client;

  try {
    client = await weaviate.connectToWeaviateCloud(
      process.env.WCD_URL ?? '',
      {
        authCredentials: new weaviate.ApiKey(process.env.WCD_API_KEY ?? ''),
        headers: {
          'X-OpenAI-Api-Key': process.env.OPENAI_APIKEY ?? '',
        }
      }
    );
    return client;
  } catch (error) {
    console.error('Failed to initialize Weaviate client:', error);
    throw error;
  }
}