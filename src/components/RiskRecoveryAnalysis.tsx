import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

interface DataItem {
  name: string;
  value: number;
  color: string;
  details: string;
}

interface Data {
  risk: DataItem[];
  recovery: DataItem[];
  credit: DataItem[];
}

interface SummaryItem {
  label: string;
  value: string;
}

interface SummaryData {
  risk: {
    title: string;
    items: SummaryItem[];
  };
  recovery: {
    title: string;
    items: SummaryItem[];
  };
  credit: {
    title: string;
    items: SummaryItem[];
  };
}

const RiskRecoveryAnalysis = () => {
  const [activeTab, setActiveTab] = useState<keyof Data>('risk');

  const data: Data = {
    risk: [
      { name: 'Credit Risk', value: 35, color: '#FF6B6B', details: 'Borrower default probability high' },
      { name: 'Market Risk', value: 25, color: '#4ECDC4', details: 'Price volatility impact' },
      { name: 'Political Risk', value: 20, color: '#45B7D1', details: 'Regulatory changes' },
      { name: 'Operational Risk', value: 20, color: '#96CEB4', details: 'Process failures' }
    ],
    recovery: [
      { name: 'Debt Restructuring', value: 40, color: '#FF6B6B', details: 'Term modification' },
      { name: 'Asset Sale', value: 30, color: '#4ECDC4', details: 'Partial divestment' },
      { name: 'Equity Conversion', value: 20, color: '#45B7D1', details: 'Debt-to-equity swap' },
      { name: 'Management Change', value: 10, color: '#96CEB4', details: 'New leadership' }
    ],
    credit: [
      { name: 'Guarantees', value: 45, color: '#FF6B6B', details: 'Third-party backing' },
      { name: 'Collateral', value: 30, color: '#4ECDC4', details: 'Asset security' },
      { name: 'Insurance', value: 25, color: '#45B7D1', details: 'Risk transfer' }
    ]
  };

  const summaryData: SummaryData = {
    risk: {
      title: "Risk Profile Summary",
      items: [
        { label: "High Risk Projects", value: "23%" },
        { label: "Medium Risk Projects", value: "45%" },
        { label: "Low Risk Projects", value: "32%" }
      ]
    },
    recovery: {
      title: "Recovery Performance",
      items: [
        { label: "Successful Recoveries", value: "68%" },
        { label: "In Progress", value: "22%" },
        { label: "Challenging Cases", value: "10%" }
      ]
    },
    credit: {
      title: "Credit Support Overview",
      items: [
        { label: "Secured Facilities", value: "75%" },
        { label: "Unsecured Facilities", value: "25%" },
        { label: "Average Coverage", value: "120%" }
      ]
    }
  };

  return (
    <div className="p-4">
      <div className="flex gap-2 mb-6">
        {Object.keys(data).map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as keyof Data)}
            className={`px-4 py-2 rounded-lg ${
              activeTab === tab 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)} Analysis
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data[activeTab]}
                    cx="50%"
                    cy="50%"
                    labelLine={true}
                    label={({ name, value }) => `${name}: ${value}%`}
                    outerRadius={150}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {data[activeTab].map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>{summaryData[activeTab].title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4">
                {summaryData[activeTab].items.map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold">{item.value}</div>
                    <div className="text-sm text-gray-500">{item.label}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Detailed Breakdown</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {data[activeTab].map((item, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">{item.name}</span>
                      <span className="font-bold">{item.value}%</span>
                    </div>
                    <div className="text-sm text-gray-600 mb-2">{item.details}</div>
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
    </div>
  );
};

export default RiskRecoveryAnalysis;