import React from 'react';
import TransactionList from './TransactionList';
import CarbonChart from './CarbonChart';

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>GreenTrack: Carbon Footprint from Your Purchases</h1>
      <TransactionList />
      <CarbonChart />
    </div>
  );
}
export default App;