import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import mlData from '../data/mlData.json';
import JobTitleTable from './JobTitleTable';
import MainTable from './MainTable';

const Analytics: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  return (
    <div className="p-4">
     
      <LineChart width={600} height={300} data={mlData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="total_jobs" stroke="#8884d8" />
      </LineChart>

      
      <MainTable onRowClick={(year) => setSelectedYear(year)} />

      {selectedYear && <JobTitleTable year={selectedYear} />}
    </div>
  );
};

export default Analytics;
