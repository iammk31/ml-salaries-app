import React from 'react';
import mlData from '../data/mlData.json';

const JobTitleTable: React.FC<{ year: number }> = ({ year }) => {
  const selectedData = mlData.find((data) => data.year === year);

  return (
    <div className="mt-4">
      <h3 className="text-xl">Job Titles for {year}</h3>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="text-left py-2">Job Title</th>
            <th className="text-left py-2">Count</th>
          </tr>
        </thead>
        <tbody>
          {selectedData?.job_titles.map((job, index) => (
            <tr key={index}>
              <td className="py-2">{job.title}</td>
              <td className="py-2">{job.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobTitleTable;
