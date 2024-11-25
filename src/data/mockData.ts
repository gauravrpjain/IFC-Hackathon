import { type ClassValue } from "clsx";

// Lessons Explorer Data
export const lessonsData = {
  categories: [
    { id: 'risk', name: 'Risk Management', count: 234 },
    { id: 'implementation', name: 'Implementation', count: 156 },
    { id: 'stakeholder', name: 'Stakeholder Engagement', count: 189 },
    { id: 'financial', name: 'Financial Structure', count: 145 },
    { id: 'environmental', name: 'Environmental Impact', count: 167 }
  ],

  lessons: [
    {
      id: 1,
      title: "Early Stakeholder Engagement Critical for Infrastructure Projects",
      description: "Analysis of 50+ infrastructure projects reveals that those with comprehensive stakeholder engagement in first 3 months showed 40% fewer delays.",
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
  ]
};

// Regional Insights Data
export const regionalData = {
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
  ],

  keyLessons: [
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
  ],

  quickStats: [
    { label: "Total Projects", value: "238", icon: "MapPin", color: "blue" },
    { label: "Success Rate", value: "78%", icon: "Check", color: "green" },
    { label: "Risk Incidents", value: "45", icon: "AlertTriangle", color: "yellow" },
    { label: "Lessons Captured", value: "211", icon: "TrendingUp", color: "purple" }
  ]
};

// Project Insights Data
export const projectData = {
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

// Risk & Recovery Analysis Data
export const riskRecoveryData = {
  data: {
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
  },

  summaryData: {
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
  }
};

// Chat Messages Data
export const initialChatMessages = [
  { 
    type: 'bot' as const, 
    content: 'Hello! I am ATHENA, your AI assistant for project insights and risk analysis. How can I help you today?' 
  }
];

// Features Data
export const features = [
  {
    icon: 'Sparkles',
    title: 'AI-Powered Analysis',
    description: 'Advanced insights from project data',
    color: 'blue'
  },
  {
    icon: 'Bot',
    title: '24/7 Assistance',
    description: 'Always ready to help',
    color: 'purple'
  },
  {
    icon: 'Bot',
    title: 'Smart Recommendations',
    description: 'Personalized project insights',
    color: 'green'
  }
];