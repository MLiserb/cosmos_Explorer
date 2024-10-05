import React from 'react'

const BlockList: React.FC = () => {
  // TODO: Fetch real data from a Cosmos API
  const blocks = [
    { height: 12345678, time: '2023-04-15 10:30:00', transactions: 150 },
    { height: 12345677, time: '2023-04-15 10:29:45', transactions: 120 },
    { height: 12345676, time: '2023-04-15 10:29:30', transactions: 180 },
  ]

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Latest Blocks</h2>
      <ul className="space-y-2">
        {blocks.map((block) => (
          <li key={block.height} className="border-b pb-2">
            <div className="flex justify-between">
              <span className="font-medium">Block {block.height}</span>
              <span>{block.time}</span>
            </div>
            <div className="text-sm text-gray-600">
              {block.transactions} transactions
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BlockList