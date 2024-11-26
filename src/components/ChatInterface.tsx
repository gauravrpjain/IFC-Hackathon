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
        'https://api.vectara.io:443/v2/query',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImQ0NGE4NTA5LTM3MTUtNGUyYy1hNjZmLWYyMGZmZTc4NmE1MyIsInR5cCI6IkpXVCJ9.eyJjdXN0b21lcl9pZCI6MzQxMzUzOTg3MCwiZXhwIjoxNzMyNjUxMTQ5LCJpYXQiOjE3MzI2NDc1NDksImlzcyI6Imh0dHBzOi8vY29vbC12aXN2ZXN2YXJheWEtaWdkaG82N3UwMy5wcm9qZWN0cy5vcnlhcGlzLmNvbSIsImp0aSI6IjAxOGY2M2ZmLTY3ZDktNGRkZi1iNTBjLTczMGQ0NDI2MjczNCIsIm5iZiI6MTczMjY0NzU0OSwic2NoZW1hX2lkIjoiMTRlNjE0ZTA3ZjExMzU5MzZhMmZmNjk0ZDljZDFlMGU1OGQ4ZmY0ZGM0Y2UyMWI5ZWJiMDJlNWU0MmRkMDcyYzdlYzVhYTE4NDVmYmYzOWVhOWQ4YTVjZjRkNmU4ODE3MzM2OGM2MzU1YjhhZGFhMTg5OTM1OTI2MWY0MDAyOTciLCJzZXNzaW9uIjp7ImFjdGl2ZSI6dHJ1ZSwiYXV0aGVudGljYXRlZF9hdCI6IjIwMjQtMTEtMjVUMTM6MDg6MjQuMDk5MDk3WiIsImF1dGhlbnRpY2F0aW9uX21ldGhvZHMiOlt7ImFhbCI6ImFhbDEiLCJjb21wbGV0ZWRfYXQiOiIyMDI0LTExLTI1VDEzOjA4OjI0LjA5OTAxNzc5OFoiLCJtZXRob2QiOiJvaWRjIiwicHJvdmlkZXIiOiJnb29nbGUifV0sImF1dGhlbnRpY2F0b3JfYXNzdXJhbmNlX2xldmVsIjoiYWFsMSIsImRldmljZXMiOlt7ImlkIjoiMjg2OWI5OWYtZTA4OC00Njc0LTg3NGQtMjk0YjJkMzA1NTNkIiwiaXBfYWRkcmVzcyI6IjEzOC4xOTkuMjEuNzgiLCJsb2NhdGlvbiI6IlRva3lvLCBKUCIsInVzZXJfYWdlbnQiOiJNb3ppbGxhLzUuMCAoV2luZG93cyBOVCAxMC4wOyBXaW42NDsgeDY0KSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvMTMxLjAuMC4wIFNhZmFyaS81MzcuMzYifV0sImV4cGlyZXNfYXQiOiIyMDI0LTExLTI4VDEzOjA4OjI0LjA5OTA5N1oiLCJpZCI6ImY5NjljNjRlLWU4YTctNDljZC1iODYyLTI0YjYxZjg0M2QzNCIsImlkZW50aXR5Ijp7ImNyZWF0ZWRfYXQiOiIyMDI0LTEwLTE5VDEwOjI4OjM0LjY3MzAyOFoiLCJpZCI6IjA0ODk3NTk0LTNjZTctNGU0MS05OTA3LTFiM2ZkOThiZTM5YSIsIm1ldGFkYXRhX3B1YmxpYyI6bnVsbCwib3JnYW5pemF0aW9uX2lkIjpudWxsLCJzY2hlbWFfaWQiOiIxNGU2MTRlMDdmMTEzNTkzNmEyZmY2OTRkOWNkMWUwZTU4ZDhmZjRkYzRjZTIxYjllYmIwMmU1ZTQyZGQwNzJjN2VjNWFhMTg0NWZiZjM5ZWE5ZDhhNWNmNGQ2ZTg4MTczMzY4YzYzNTViOGFkYWExODk5MzU5MjYxZjQwMDI5NyIsInNjaGVtYV91cmwiOiJodHRwczovL2Nvb2wtdmlzdmVzdmFyYXlhLWlnZGhvNjd1MDMucHJvamVjdHMub3J5YXBpcy5jb20vc2NoZW1hcy9NVFJsTmpFMFpUQTNaakV4TXpVNU16WmhNbVptTmprMFpEbGpaREZsTUdVMU9HUTRabVkwWkdNMFkyVXlNV0k1WldKaU1ESmxOV1UwTW1Sa01EY3lZemRsWXpWaFlURTRORFZtWW1Zek9XVmhPV1E0WVRWalpqUmtObVU0T0RFM016TTJPR00yTXpVMVlqaGhaR0ZoTVRnNU9UTTFPVEkyTVdZME1EQXlPVGMiLCJzdGF0ZSI6ImFjdGl2ZSIsInN0YXRlX2NoYW5nZWRfYXQiOiIyMDI0LTEwLTE5VDEwOjI4OjM0LjY3MTAyM1oiLCJ0cmFpdHMiOnsiZW1haWwiOiJnYXVyYXYuamFpbi55bHRAZ21haWwuY29tIiwidXNlcl9pbmZvIjp7ImN1c3RvbWVyX2lkIjozNDEzNTM5ODcwLCJ1c2VybmFtZSI6ImdhdXJhdi5qYWluLnlsdEBnbWFpbC5jb20ifX0sInVwZGF0ZWRfYXQiOiIyMDI0LTEwLTE5VDExOjA4OjI5LjU4NDQxNloifSwiaXNzdWVkX2F0IjoiMjAyNC0xMS0yNVQxMzowODoyNC4wOTkwOTdaIn0sInNpZCI6ImY5NjljNjRlLWU4YTctNDljZC1iODYyLTI0YjYxZjg0M2QzNCIsInN1YiI6IjA0ODk3NTk0LTNjZTctNGU0MS05OTA3LTFiM2ZkOThiZTM5YSJ9.kpAVS3vOI7niIymNFseOjtDkSsxAG1wX8y9wWuwmFPk4NzAE2Sq_GsNumC_UFSav6WkDNAYmLeL9hl_IIxYf9ThBjWCC2diClrrt5ksZhgVagWlP-sczK3gSwHJM6OsmxA8yC5kYWOrhnp_KR1yYNIUvB6kRzAaTRpncZ9TE7GdBKzVsDqNHGs4QTHaqhCtYgmd4DDAL7TkPvpjhy0X5UDguSiYz258nweqKR8_xgyxJf42E_UgKVgQxq41yRLi8nkW6r--fCDBAbCuImJaC2IxI0xLIWLll_HiIbw3-93yRo-4qLKOqz9DzUi76Ugb8cKm97XmIEx9rPJQqp0-pLOM7ZxlVUYVec_0f9y_GJpbwpeEQu99J2l5MUXSlpAFe32vLzYFMsvWWUGcpzmBshFZSTH5ZkGUkd13d1ocYqfO_LciV3BrbfJlt3Ni1XisL01mvVxkoksT2Y00Qa6za6YEtmIZ5n7EkIMclIanfJgNTXFApcG1FMmFlrR5aFLBx440g1LEyUJOrgkSE1elgV67UIFY-a6v5SSeUhNCTe3x0WOUAbAT8zNJgoGaqv5gQX3HWKkoEAhQK8Uo1GmxCF8fqxffHauZrOHv5d-uu4pR7JKFm6loo07hjmS9EDVKsidDA5-ThYQ10wQco0Bl5rNRsA4Pi-9Ffzb-RvWBj-qc", // Replace with your API key
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
