import { FC, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { MapPin, TrendingUp, AlertTriangle, Check, Filter } from 'lucide-react';

const RegionalInsights: FC = () => {
  const [selectedRegion, setSelectedRegion] = useState('All Regions');

  // Rest of the component remains the same
  const regionalData = {
    projectOutcomes: [
      { region: 'East Asia', successful: 75, challenged: 15, lessons: 45 },
      { region: 'South Asia', successful: 65, challenged: 25, lessons: 38 },
      { region: 'Africa', successful: 55, challenged: 30, lessons: 52 },
      { region: 'Latin America', successful: 70, challenged: 20, lessons: 41 },
      { region: 'Europe', successful: 80, challenged: 10, lessons: 35 }
    ],
    
    riskDistribution: [
      { name: 'Market Risk', value: 30, color: '#FF6B6B' },
      { name: 'Credit Risk', value: 25, color: '#4ECDC4' },
      { name: 'Operational Risk', value: 20, color: '#45B7D1' },
      { name: 'Political Risk', value: 15, color: '#96CEB4' },
      { name: 'Environmental Risk', value: 10, color: '#FFEEAD' }
    ]
  };

  const keyLessons = [
    {
      region: "East Asia",
      title: "Supply Chain Resilience",
      description: "Diversified supplier base critical in manufacturing projects",
      impact: "High",
      projects: 12
    },
    {
      region: "Africa",
      title: "Local Community Engagement",
      description: "Early stakeholder involvement reduced delays by 40%",
      impact: "High",
      projects: 8
    },
    {
      region: "Latin America",
      title: "Currency Risk Management",
      description: "Hedging strategies improved project stability",
      impact: "Medium",
      projects: 15
    }
  ];

  return (
    <div className="space-y-6">
      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Projects</p>
                <p className="text-2xl font-bold">238</p>
              </div>
              <MapPin className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Success Rate</p>
                <p className="text-2xl font-bold">78%</p>
              </div>
              <Check className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Risk Incidents</p>
                <p className="text-2xl font-bold">45</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-yellow-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Lessons Captured</p>
                <p className="text-2xl font-bold">211</p>
              </div>
              <TrendingUp className="h-8 w-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Project Outcomes by Region</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={regionalData.projectOutcomes}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="region" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="successful" fill="#10B981" />
                  <Bar dataKey="challenged" fill="#EF4444" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Risk Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={regionalData.riskDistribution}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {regionalData.riskDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Key Lessons */}
      <Card>
        <CardHeader>
          <CardTitle>Key Regional Lessons</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {keyLessons.map((lesson, index) => (
              <div key={index} className="bg-white p-4 rounded-lg border">
                <div className="flex items-start justify-between mb-2">
                  <span className="text-sm font-medium text-blue-600">{lesson.region}</span>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    lesson.impact === 'High' ? 'bg-red-100 text-red-600' : 'bg-yellow-100 text-yellow-600'
                  }`}>
                    {lesson.impact} Impact
                  </span>
                </div>
                <h3 className="font-semibold mb-2">{lesson.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{lesson.description}</p>
                <div className="text-sm text-gray-500">
                  Applied in {lesson.projects} projects
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegionalInsights;