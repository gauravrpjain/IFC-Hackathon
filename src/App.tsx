import { useState } from 'react';
import LessonsExplorer from './components/LessonsExplorer';
import ProjectInsights from './components/ProjectInsights';
import RegionalInsights from './components/RegionalInsights';
import RiskRecoveryAnalysis from './components/RiskRecoveryAnalysis';
import DataExport from './components/DataExport';
import ChatInterface from "./components/ChatInterface"
function App() {
  const [activeTab, setActiveTab] = useState('LessonsExplorer');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'LessonsExplorer':
        return <LessonsExplorer />;
      case 'ProjectInsights':
        return <ProjectInsights />;
      case 'RegionalInsights':
        return <RegionalInsights />;
      case 'RiskRecoveryAnalysis':
        return <RiskRecoveryAnalysis />;
      case 'DataExport':
        return <DataExport />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">ATHENA - AI-Powered Project Insights</h1>
        
        {/* Tabs Navigation */}
        <div className="flex space-x-4 border-b pb-2 mb-6">
         <button
            onClick={() => setActiveTab('LessonsExplorer')}
            className={`px-4 py-2 rounded-t ${
              activeTab === 'LessonsExplorer' ? 'bg-white border-t border-l border-r font-bold' : 'text-gray-600'
            }`}
          >
            Lessons Explorer
          </button>
          <button
            onClick={() => setActiveTab('ProjectInsights')}
            className={`px-4 py-2 rounded-t ${
              activeTab === 'ProjectInsights' ? 'bg-white border-t border-l border-r font-bold' : 'text-gray-600'
            }`}
          >
            Project Insights
          </button>
          <button
            onClick={() => setActiveTab('RegionalInsights')}
            className={`px-4 py-2 rounded-t ${
              activeTab === 'RegionalInsights' ? 'bg-white border-t border-l border-r font-bold' : 'text-gray-600'
            }`}
          >
            Regional Insights
          </button>
          <button
            onClick={() => setActiveTab('RiskRecoveryAnalysis')}
            className={`px-4 py-2 rounded-t ${
              activeTab === 'RiskRecoveryAnalysis' ? 'bg-white border-t border-l border-r font-bold' : 'text-gray-600'
            }`}
          >
            Risk Recovery Analysis
          </button>
          <button
            onClick={() => setActiveTab('DataExport')}
            className={`px-4 py-2 rounded-t ${
              activeTab === 'DataExport' ? 'bg-white border-t border-l border-r font-bold' : 'text-gray-600'
            }`}
          >
            Data Export
          </button>
        </div>

        {/* Tab Content */}
        <div className="bg-white p-6 rounded shadow">{renderTabContent()}</div>
      </div>
    </div>
  );
}

export default App;
