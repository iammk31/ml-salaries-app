import React from 'react';
import { Table } from 'antd';
import mlData from '../data/mlData.json';

interface DataType {
  year: number;
  total_jobs: number;
  avg_salary: number;
}

const MainTable: React.FC<{ onRowClick: (year: number) => void }> = ({ onRowClick }) => {
  const data: DataType[] = mlData;

  const columns = [
    { 
      title: 'Year', 
      dataIndex: 'year', 
      key: 'year', 
      sorter: (a: DataType, b: DataType) => a.year - b.year 
    },
    { 
      title: 'Total Jobs', 
      dataIndex: 'total_jobs', 
      key: 'total_jobs', 
      sorter: (a: DataType, b: DataType) => a.total_jobs - b.total_jobs 
    },
    { 
      title: 'Average Salary (USD)', 
      dataIndex: 'avg_salary', 
      key: 'avg_salary', 
      sorter: (a: DataType, b: DataType) => a.avg_salary - b.avg_salary 
    }
  ];

  return (
    <Table
      columns={columns}
      dataSource={data}
      rowKey="year"
      onRow={(record) => ({
        onClick: () => onRowClick(record.year)
      })}
    />
  );
};

export default MainTable;
