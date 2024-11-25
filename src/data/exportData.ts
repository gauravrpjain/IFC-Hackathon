import { lessonsData, regionalData, projectData, riskRecoveryData, features } from './mockData';

// Function to export data as JSON
export const exportToJson = () => {
  const allData = {
    lessons: lessonsData,
    regional: regionalData,
    project: projectData,
    riskRecovery: riskRecoveryData,
    features: features,
  };

  const dataStr = JSON.stringify(allData, null, 2);
  const dataUri = `data:application/json;charset=utf-8,${encodeURIComponent(dataStr)}`;
  
  const exportFileDefaultName = 'athena-project-data.json';
  const linkElement = document.createElement('a');
  linkElement.setAttribute('href', dataUri);
  linkElement.setAttribute('download', exportFileDefaultName);
  linkElement.click();
};

// Function to export data as CSV (for tabular data)
export const exportToCsv = (dataKey: 'lessons' | 'regional' | 'project') => {
  let csvContent = '';
  let data: any[] = [];
  let headers: string[] = [];

  switch (dataKey) {
    case 'lessons':
      data = lessonsData.lessons;
      headers = ['id', 'title', 'description', 'category', 'impact', 'region', 'endorsements', 'discussions', 'timestamp'];
      break;
    case 'regional':
      data = regionalData.projectOutcomes;
      headers = ['region', 'successful', 'challenged', 'lessons'];
      break;
    case 'project':
      data = projectData.industry;
      headers = ['name', 'value', 'color'];
      break;
  }

  // Add headers
  csvContent += headers.join(',') + '\n';

  // Add data rows
  data.forEach(item => {
    const row = headers.map(header => {
      const value = item[header as keyof typeof item];
      return typeof value === 'string' ? `"${value}"` : value;
    });
    csvContent += row.join(',') + '\n';
  });

  const dataUri = `data:text/csv;charset=utf-8,${encodeURIComponent(csvContent)}`;
  const exportFileDefaultName = `athena-${dataKey}-data.csv`;
  const linkElement = document.createElement('a');
  linkElement.setAttribute('href', dataUri);
  linkElement.setAttribute('download', exportFileDefaultName);
  linkElement.click();
};