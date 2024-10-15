'use server';

import { getWeaviateClient } from '@/lib/weaviate-client';
import { vectorizer, generative } from 'weaviate-client';

interface CreateCollectionResult {
  success: boolean;
  message: string;
}

export async function createCollection(): Promise<CreateCollectionResult> {
  try {
    const client = await getWeaviateClient();

    const existingCollections =
      (await client.collections.exists('Documents')) || false;
    if (existingCollections) {
      return {
        success: false,
        message: 'Collection "Documents" already exists',
      };
    }

    const collection = {
      name: 'Documents',
      description: 'A collection of documents',
      properties: [
        {
          name: 'title',
          dataType: 'text' as const,
          description: 'Title of the document',
        },
        {
          name: 'content',
          dataType: 'text' as const,
          description: 'Content of the document',
        },
      ],
      vectorizers: vectorizer.text2VecOpenAI(),
      generative: generative.openAI({
        model: 'gpt-4',
      }),
    };

    await client.collections.create(collection);
    console.log('Collection created successfully');
    return { success: true, message: 'Collection created successfully' };
  } catch (error: any) {
    console.error('Error creating collection:', error);
    return {
      success: false,
      message: `Error creating collection: ${error.message}`,
    };
  }
}
