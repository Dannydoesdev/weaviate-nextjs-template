'use server';

import { getWeaviateClient } from '@/lib/weaviate-client';

export async function deleteCollection() {
  try {
    const client = await getWeaviateClient();
    await client.collections.delete('Documents');
    console.log('Collection deleted successfully');
    return { success: true, message: 'Collection deleted successfully' };
  } catch (error: any) {
    console.error('Error deleting collection:', error);
    return {
      success: false,
      message: `Error deleting collection: ${error.message}`,
    };
  }
}
