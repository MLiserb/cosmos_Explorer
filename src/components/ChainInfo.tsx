import React from 'react'

const ChainInfo: React.FC = () => {
  // TODO: Fetch real data from a Cosmos API
  const chainInfo = {
    name: 'Cosmos Hub',
    latestBlock: 12345678,
    activeValidators: 150,
    totalStake: '250,000,000 ATOM',
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Chain Information</h2>
      <ul className="space-y-2">
        <li><strong>Name:</strong> {chainInfo.name}</li>
        <li><strong>Latest Block:</strong> {chainInfo.latestBlock}</li>
        <li><strong>Active Validators:</strong> {chainInfo.activeValidators}</li>
        <li><strong>Total Stake:</strong> {chainInfo.totalStake}</li>
      </ul>
    </div>
  )
}

export default ChainInfo