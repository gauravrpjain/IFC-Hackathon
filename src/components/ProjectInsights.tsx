import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

interface ProjectData {
  industry: Array<{ name: string; value: number; color: string }>;
  region: Array<{ name: string; value: number; color: string }>;
  risk: Array<{ name: string; value: number; color: string }>;
}

const ProjectInsights = () => {
  const [activeTab, setActiveTab] = useState<keyof ProjectData>('industry');

  const projectData: ProjectData = {
    industry: [
      { name: 'Financial Services', value: 30, color: '#FF6B6B' },
      { name: 'Infrastructure', value: 25, color: '#4ECDC4' },
      { name: 'Manufacturing', value: 20, color: '#45B7D1' },
      { name: 'Agriculture', value: 15, color: '#96CEB4' },
      { name: 'Technology', value: 10, color: '#FFEEAD' }
    ],
    region: [
      { name: 'East Asia', value: 35, color: '#FF6B6B' },
      { name: 'South Asia', value: 25, color: '#4ECDC4' },
      { name: 'Africa', value: 20, color: '#45B7D1' },
      { name: 'Latin America', value: 20, color: '#96CEB4' }
    ],
    risk: [
      { name: 'Market Risk', value: 40, color: '#FF6B6B' },
      { name: 'Credit Risk', value: 30, color: '#4ECDC4' },
      { name: 'Operational', value: 30, color: '#45B7D1' }
    ]
  };

  const tabs = [
    { id: 'industry' as const, name: 'Industry' },
    { id: 'region' as const, name: 'Region' },
    { id: 'risk' as const, name: 'Risk' }
  ];

  return (
    <div className="p-4">
      <div className="flex gap-2 mb-6">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded ${
              activeTab === tab.id 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Distribution by {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={projectData[activeTab]}
                    cx="50%"
                    cy="50%"
                    labelLine={true}
                    label={({ name, value }) => `${name}: ${value}%`}
                    outerRadius={150}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {projectData[activeTab].map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Key Insights</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {projectData[activeTab].map((item, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold">{item.name}</h3>
                    <span className="text-lg font-bold">{item.value}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="h-2 rounded-full" 
                      style={{ 
                        width: `${item.value}%`,
                        backgroundColor: item.color 
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProjectInsights;