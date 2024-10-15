'use server';

import { getWeaviateClient } from '@/lib/weaviate-client';

export async function keywordSearch(query: string = 'non-standard') {
  console.log('Performing keyword search with query:', query);
  try {
    const client = await getWeaviateClient();
    const collection = client.collections.get('Documents');

    const result = await collection.query.hybrid(query, {
      limit: 1,
    });
    console.log('Keyword search result:', result.objects);
    return { success: true, data: result.objects };
  } catch (error: any) {
    console.error('Error performing keyword search:', error);
    return {
      success: false,
      message: `Error performing keyword search: ${error.message}`,
    };
  }
}
