import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const Blocks: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const blocksPerPage = 20

  // TODO: Fetch real data from a Cosmos API
  const blocks = Array.from({ length: 100 }, (_, i) => ({
    height: 12345678 - i,
    time: new Date(Date.now() - i * 60000).toISOString(),
    transactions: Math.floor(Math.random() * 200),
    proposer: `validator${i % 10 + 1}`,
  }))

  const indexOfLastBlock = currentPage * blocksPerPage
  const indexOfFirstBlock = indexOfLastBlock - blocksPerPage
  const currentBlocks = blocks.slice(indexOfFirstBlock, indexOfLastBlock)

  const totalPages = Math.ceil(blocks.length / blocksPerPage)

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Blocks</h2>
      <table className="w-full">
        <thead>
          <tr className="text-left">
            <th className="pb-2">Height</th>
            <th className="pb-2">Time</th>
            <th className="pb-2">Transactions</th>
            <th className="pb-2">Proposer</th>
          </tr>
        </thead>
        <tbody>
          {currentBlocks.map((block) => (
            <tr key={block.height} className="border-b">
              <td className="py-2">{block.height}</td>
              <td className="py-2">{new Date(block.time).toLocaleString()}</td>
              <td className="py-2">{block.transactions}</td>
              <td className="py-2">{block.proposer}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 flex justify-between items-center">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md disabled:bg-gray-400"
        >
          <ChevronLeft size={20} />
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md disabled:bg-gray-400"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  )
}

export default Blocks