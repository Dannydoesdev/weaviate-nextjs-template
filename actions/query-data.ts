'use server';

import { getWeaviateClient } from '@/lib/weaviate-client';

export async function queryDocuments() {
  try {
    const client = await getWeaviateClient();
    const collection = client.collections.get('Documents');

    const response = await collection.query.fetchObjects();
    console.log('Query results:', response.objects);
    return { success: true, data: response.objects };
  } catch (error: any) {
    console.error('Error querying documents:', error);
    return {
      success: false,
      message: `Error querying documents: ${error.message}`,
    };
  }
}
