import { useState } from 'react';
import ChatInterface from "./components/ChatInterface";
import DataExport from "./components/DataExport";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold mb-8">ATHENA - AI-Powered Project Insights</h1>
        <ChatInterface />
        <DataExport />
      </div>
    </div>
  );
}

export default App;