'use client';

import React, { useState } from 'react';
import { ActionButton } from './ActionButton';
import { SearchInput } from './SearchInput';
import { ResultDisplay } from './ResultsDisplay';
import { createCollection } from '@/actions/create-collection';
import { importDocuments } from '@/actions/import-data';
import { queryDocuments } from '@/actions/query-data';
import { keywordSearch } from '@/actions/keyword-search';
import { RAGSearch } from '@/actions/rag-search';
import { deleteCollection } from '@/actions/delete-collection';
import { Database, Upload, Search, Brain, Trash2, Loader2 } from 'lucide-react';

interface ActionResult {
  action: string;
  success: boolean;
  message?: string;
  data?: any;
}

export default function WeaviateMain() {
  const [result, setResult] = useState<ActionResult | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAction = async (
    action: () => Promise<any>,
    actionName: string
  ) => {
    setLoading(true);
    try {
      const res = await action();
      setResult({ action: actionName, ...res });
    } catch (error) {
      setResult({
        action: actionName,
        success: false,
        message:
          error instanceof Error ? error.message : 'An unknown error occurred',
      });
    }
    setLoading(false);
  };

  const handleKeywordSearch = (query: string) => {
    return handleAction(() => keywordSearch(query), 'Keyword Search');
  };

  return (
    <div className='flex items-center justify-center h-screen mb-12'>
      <div className='max-w-[1000px] space-y-6 p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-lg'>
        <h1 className='text-3xl font-bold text-gray-800'>Weaviate Demo</h1>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          <ActionButton
            action={() => handleAction(createCollection, 'Create Collection')}
            label='Create Collection'
            icon={Database}
            color='bg-green-500 hover:bg-green-600'
          />
          <ActionButton
            action={() => handleAction(importDocuments, 'Import Documents')}
            label='Import Documents'
            icon={Upload}
            color='bg-blue-500 hover:bg-blue-600'
          />
          <ActionButton
            action={() => handleAction(queryDocuments, 'Query Documents')}
            label='Query Documents'
            icon={Search}
            color='bg-purple-500 hover:bg-purple-600'
          />
          <ActionButton
            action={() => handleAction(RAGSearch, 'RAG Search')}
            label='RAG Search'
            icon={Brain}
            color='bg-indigo-500 hover:bg-indigo-600'
          />
          <ActionButton
            action={() => handleAction(deleteCollection, 'Delete Collection')}
            label='Delete Collection'
            icon={Trash2}
            color='bg-red-500 hover:bg-red-600'
          />
        </div>

        <SearchInput
          onSearch={handleKeywordSearch}
          placeholder='Enter keyword to search'
        />

        {loading && (
          <div className='flex items-center justify-center space-x-2 text-blue-500'>
            <Loader2 className='w-6 h-6 animate-spin' />
            <span>Loading...</span>
          </div>
        )}

        <ResultDisplay result={result} />
      </div>
    </div>
  );
}
