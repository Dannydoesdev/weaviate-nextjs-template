'use server'

import { getWeaviateClient } from '@/lib/weaviate-client';

export async function RAGSearch() {
  try {
    const client = await getWeaviateClient();
    const collection = client.collections.get('Documents');

    const result = await collection.generate.nearText('Document',
      { groupedTask: 'Which of the documents stand out?' },
      { limit: 3 }
    );

    console.log('RAG search result:', result.generated);
    return { success: true, data: result.generated };
  } catch (error: any) {
    console.error('Error performing RAG search:', error);
    return { success: false, message: `Error performing RAG search: ${error.message}` };
  }
}