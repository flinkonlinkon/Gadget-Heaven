import React, { PureComponent } from 'react';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

export default function Statistics() {
  const data = [
    {
        name: 'iPhone 13 Pro',
        price: 999.99,
        rating: 4.8
    },
    {
        name: 'Samsung Galaxy S22 Ultra',
        price: 1199.99,
        rating: 4.7
    },
    {
        name: 'MacBook Air M2',
        price: 1299.99,
        rating: 4.9
    },
    {
        name: 'Dell XPS 13',
        price: 1099.99,
        rating: 4.6
    },
    {
        name: 'HP Spectre x360',
        price: 1399.99,
        rating: 4.7
    },
    {
        name: 'Lenovo ThinkPad X1 Carbon',
        price: 1449.99,
        rating: 4.8
    },
    
];


  return (
    <div style={{ width: '100%', height: 400 }}>
      <ResponsiveContainer>
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="price" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="rating" barSize={20} fill="#413ea0" />
          {/* <Line type="monotone" dataKey="uv" stroke="#ff7300" /> */}
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
