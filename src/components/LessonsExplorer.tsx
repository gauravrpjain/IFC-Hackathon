import { FC, useState } from 'react';
import { Search, Filter, Tag, ThumbsUp, MessageSquare, BookOpen, ArrowRight, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const LessonsExplorer: FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = [
    { id: 'risk', name: 'Risk Management', count: 234 },
    { id: 'implementation', name: 'Implementation', count: 156 },
    { id: 'stakeholder', name: 'Stakeholder Engagement', count: 189 },
    { id: 'financial', name: 'Financial Structure', count: 145 },
    { id: 'environmental', name: 'Environmental Impact', count: 167 }
  ];

  const lessons = [
    {
      id: 1,
      title: "Early Stakeholder Engagement Critical for Infrastructure Projects",
      description: "Analysis of 55+ infrastructure projects reveals that those with comprehensive stakeholder engagement in first 3 months showed 40% fewer delays.",
      category: "stakeholder",
      impact: "High",
      region: "Global",
      applicability: ["Infrastructure", "Energy", "Transport"],
      endorsements: 45,
      discussions: 12,
      timestamp: "2 days ago"
    },
    {
      id: 2,
      title: "Supply Chain Risk Mitigation in Agriculture",
      description: "Multiple backup suppliers and local sourcing reduced project delays by 60% in agricultural projects across drought-prone regions.",
      category: "risk",
      impact: "Medium",
      region: "Africa",
      applicability: ["Agriculture", "Supply Chain"],
      endorsements: 38,
      discussions: 8,
      timestamp: "1 week ago"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gray-900 text-white p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold">ATHENA</h1>
            <span className="bg-purple-600 px-3 py-1 rounded-full text-sm">Lessons Explorer</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search lessons..."
                className="bg-gray-800 text-white rounded-lg px-4 py-2 pl-10 w-80"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-4 py-2 rounded-lg flex items-center justify-between ${
                        selectedCategory === category.id ? 'bg-purple-100 text-purple-700' : 'hover:bg-gray-100'
                      }`}
                    >
                      <span>{category.name}</span>
                      <span className="text-sm text-gray-500">{category.count}</span>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-3">
            <div className="flex gap-4 mb-6">
              <button className="px-4 py-2 bg-white rounded-lg shadow-sm border hover:bg-gray-50 flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Impact Level
              </button>
              <button className="px-4 py-2 bg-white rounded-lg shadow-sm border hover:bg-gray-50 flex items-center gap-2">
                <Tag className="h-4 w-4" />
                Region
              </button>
              <button className="px-4 py-2 bg-white rounded-lg shadow-sm border hover:bg-gray-50 flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                Project Type
              </button>
            </div>

            <div className="space-y-4">
              {lessons.map(lesson => (
                <Card key={lesson.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2">{lesson.title}</h3>
                        <p className="text-gray-600 mb-4">{lesson.description}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {lesson.applicability.map(tag => (
                            <span key={tag} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <ThumbsUp className="h-4 w-4" />
                            {lesson.endorsements} endorsements
                          </span>
                          <span className="flex items-center gap-1">
                            <MessageSquare className="h-4 w-4" />
                            {lesson.discussions} discussions
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {lesson.timestamp}
                          </span>
                        </div>
                      </div>
                      <button className="ml-4 p-2 hover:bg-gray-100 rounded-full">
                        <ArrowRight className="h-5 w-5 text-gray-400" />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LessonsExplorer;