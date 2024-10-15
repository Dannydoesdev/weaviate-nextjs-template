'use server';

import { getWeaviateClient } from '@/lib/weaviate-client';

type Document = {
  title: string;
  content: string;
};

export async function importDocuments() {
  try {
    const client = await getWeaviateClient();
    const collection = client.collections.get('Documents');

    const documents: Document[] = [
      {
        title: 'Document 1',
        content: 'This is the content of document one',
      },
      {
        title: 'Document 2',
        content: 'This is the content of document two',
      },
      {
        title: 'Document 3',
        content: 'This is a special document',
      },
    ];

    const response = await collection.data.insertMany(documents);
    console.log('Documents imported successfully:', response);
    return { success: true, message: 'Documents imported successfully' };
  } catch (error: any) {
    console.error('Error importing documents:', error);
    return {
      success: false,
      message: `Error importing documents: ${error.message}`,
    };
  }
}
