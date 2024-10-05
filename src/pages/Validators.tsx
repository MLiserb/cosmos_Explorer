import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const Validators: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const validatorsPerPage = 20

  // TODO: Fetch real data from a Cosmos API
  const validators = Array.from({ length: 100 }, (_, i) => ({
    address: `cosmosvaloper1${Math.random().toString(36).substr(2, 34)}`,
    moniker: `Validator ${i + 1}`,
    votingPower: Math.floor(Math.random() * 1000000),
    commission: (Math.random() * 0.2).toFixed(2),
    uptime: (Math.random() * 0.1 + 0.9).toFixed(4),
  }))

  const indexOfLastValidator = currentPage * validatorsPerPage
  const indexOfFirstValidator = indexOfLastValidator - validatorsPerPage
  const currentValidators = validators.slice(indexOfFirstValidator, indexOfLastValidator)

  const totalPages = Math.ceil(validators.length / validatorsPerPage)

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Validators</h2>
      <table className="w-full">
        <thead>
          <tr className="text-left">
            <th className="pb-2">Moniker</th>
            <th className="pb-2">Address</th>
            <th className="pb-2">Voting Power</th>
            <th className="pb-2">Commission</th>
            <th className="pb-2">Uptime</th>
          </tr>
        </thead>
        <tbody>
          {currentValidators.map((validator) => (
            <tr key={validator.address} className="border-b">
              <td className="py-2">{validator.moniker}</td>
              <td className="py-2">{validator.address.substr(0, 10)}...</td>
              <td className="py-2">{validator.votingPower.toLocaleString()}</td>
              <td className="py-2">{validator.commission}%</td>
              <td className="py-2">{validator.uptime}%</td>
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

export default Validators