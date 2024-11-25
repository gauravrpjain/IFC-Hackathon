import { FC } from 'react';
import { ReactSearch } from '@vectara/react-search';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const ChatInterface: FC = () => {
  return (
    <Card className="h-[600px] flex flex-col">
      <CardHeader>
        <CardTitle>Knowledge Base Search</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 overflow-y-auto">
        <ReactSearch
          customerId="3413539870"
          corpusId="IFC_Hackathon"
          apiKey="zqt_y3Z8Hn6D1yI_1jD3Tgck9lVx4v4KVg_dzch3sQ"
          placeholder="Search project insights and lessons learned..."
          isDeeplinkable={true}
          openResultsInNewTab={true}
          isSummaryToggleVisible={true}
          rerankingConfiguration={{
            rerankerId: 272725718
          }}
          className="w-full"
          style={{
            '--vectara-primary-color': '#2563eb',
            '--vectara-primary-color-dark': '#1d4ed8',
            '--vectara-surface-color': '#ffffff',
            '--vectara-border-color': '#e5e7eb',
            '--vectara-text-color': '#1f2937',
            '--vectara-secondary-text-color': '#6b7280'
          } as React.CSSProperties}
        />
      </CardContent>
    </Card>
  );
};

export default ChatInterface;