import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const Transactions: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const transactionsPerPage = 20

  // TODO: Fetch real data from a Cosmos API
  const transactions = Array.from({ length: 100 }, (_, i) => ({
    hash: `0x${Math.random().toString(16).substr(2, 40)}`,
    from: `cosmos1${Math.random().toString(36).substr(2, 34)}`,
    to: `cosmos1${Math.random().toString(36).substr(2, 34)}`,
    amount: `${Math.floor(Math.random() * 1000)} ATOM`,
    time: new Date(Date.now() - i * 60000).toISOString(),
  }))

  const indexOfLastTransaction = currentPage * transactionsPerPage
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage
  const currentTransactions = transactions.slice(indexOfFirstTransaction, indexOfLastTransaction)

  const totalPages = Math.ceil(transactions.length / transactionsPerPage)

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Transactions</h2>
      <table className="w-full">
        <thead>
          <tr className="text-left">
            <th className="pb-2">Hash</th>
            <th className="pb-2">From</th>
            <th className="pb-2">To</th>
            <th className="pb-2">Amount</th>
            <th className="pb-2">Time</th>
          </tr>
        </thead>
        <tbody>
          {currentTransactions.map((tx) => (
            <tr key={tx.hash} className="border-b">
              <td className="py-2">{tx.hash.substr(0, 10)}...</td>
              <td className="py-2">{tx.from.substr(0, 10)}...</td>
              <td className="py-2">{tx.to.substr(0, 10)}...</td>
              <td className="py-2">{tx.amount}</td>
              <td className="py-2">{new Date(tx.time).toLocaleString()}</td>
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

export default Transactions