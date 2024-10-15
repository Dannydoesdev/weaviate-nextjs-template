import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ActionResult {
  action: string;
  success: boolean;
  message?: string;
  data?: any;
}

interface ResultDisplayProps {
  result: ActionResult | null;
}

export const ResultDisplay: React.FC<ResultDisplayProps> = ({ result }) => {
  if (!result) return null;

  return (
    <Card className='mt-4'>
      <CardHeader>
        <CardTitle>Result: {result.action}</CardTitle>
      </CardHeader>
      <CardContent>
        <div
          className={`text-sm ${
            result.success ? 'text-green-600' : 'text-red-600'
          }`}
        >
          {result.success ? 'Success' : 'Error'}
        </div>
        {result.message && (
          <p className='mt-2 text-sm text-gray-600'>{result.message}</p>
        )}
        {result.data && (
          <pre className='mt-4 p-4 bg-gray-100 rounded-md overflow-auto text-sm'>
            {JSON.stringify(result.data, null, 2)}
          </pre>
        )}
      </CardContent>
    </Card>
  );
};
