import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const ChatInterface: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [summary, setSummary] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    setResults([]);
    setSummary(null);

    try {
      const response = await fetch(
        'https://api.vectara.io/v2/corpora/employee-handbook/query',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'x-api-key': 'abc_12345defg67890hij09876', // Replace with your API key
          },
          body: JSON.stringify({
            query,
            stream_response: false,
            search: {
              offset: 0,
              limit: 20,
              context_configuration: {
                sentences_before: 3,
                sentences_after: 3,
                start_tag: '<b>',
                end_tag: '</b>',
              },
              metadata_filter: "part.lang = 'eng'",
              lexical_interpolation: 0.1, // Adjust balance between neural and keyword search
              semantics: 'default',
            },
            generation: [
              {
                max_used_search_results: 5, // Number of results for summarization
              },
            ],
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch search results.');
      }

      const data = await response.json();
      setSummary(data.summary || null);
      setResults(data.search_results || []);
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="h-[600px] flex flex-col">
      <CardHeader>
        <CardTitle>Knowledge Base Search</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 overflow-y-auto">
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for employee policies..."
            className="border rounded p-2 w-full"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-500 text-white py-2 px-4 rounded"
            disabled={loading}
          >
            {loading ? 'Searching...' : 'Search'}
          </button>
          {error && <p className="text-red-500">{error}</p>}
          {summary && (
            <div className="bg-gray-100 p-4 rounded shadow">
              <h3 className="font-bold text-lg">Summary</h3>
              <p dangerouslySetInnerHTML={{ __html: summary }} />
            </div>
          )}
          {results.length > 0 && (
            <ul className="space-y-2">
              {results.map((result, index) => (
                <li key={index} className="border-b pb-2">
                  <p className="font-bold">
                    Score: {result.score.toFixed(2)}
                  </p>
                  <p dangerouslySetInnerHTML={{ __html: result.text }} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ChatInterface;
