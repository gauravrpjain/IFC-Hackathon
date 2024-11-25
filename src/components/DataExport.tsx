import { FC } from 'react';
import { FileJson, FileSpreadsheet, Share2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { exportToJson, exportToCsv } from '@/data/exportData';

const DataExport: FC = () => {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Share2 className="h-5 w-5" />
          Export Data
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex gap-4">
          <button
            onClick={() => exportToJson()}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <FileJson className="h-4 w-4" />
            Export All (JSON)
          </button>
          <button
            onClick={() => exportToCsv('lessons')}
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            <FileSpreadsheet className="h-4 w-4" />
            Export Lessons (CSV)
          </button>
          <button
            onClick={() => exportToCsv('regional')}
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            <FileSpreadsheet className="h-4 w-4" />
            Export Regional Data (CSV)
          </button>
          <button
            onClick={() => exportToCsv('project')}
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            <FileSpreadsheet className="h-4 w-4" />
            Export Project Data (CSV)
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default DataExport;