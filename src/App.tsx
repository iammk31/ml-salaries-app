import React from 'react';
import Analytics from './components/Analytics';
import LLMChat from './components/LLMChat';

const App: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">ML Engineer Salary Insights (2020-2024)</h1>
      <Analytics />
      <LLMChat />
    </div>
  );
};

export default App;
