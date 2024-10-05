import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

interface SearchResult {
  type: 'block' | 'transaction' | 'address'
  data: any
}

const SearchResults: React.FC = () => {
  const { query } = useParams<{ query: string }>()
  const [result, setResult] = useState<SearchResult | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchSearchResults = async () => {
      // TODO: Replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate API delay

      if (query) {
        if (/^\d+$/.test(query)) {
          // Block search
          setResult({
            type: 'block',
            data: {
              height: parseInt(query),
              time: new Date().toISOString(),
              transactions: Math.floor(Math.random() * 100),
              proposer: `validator${Math.floor(Math.random() * 100) + 1}`,
            },
          })
        } else if (/^0x[a-fA-F0-9]{64}$/.test(query)) {
          // Transaction search
          setResult({
            type: 'transaction',
            data: {
              hash: query,
              from: `cosmos1${Math.random().toString(36).substr(2, 34)}`,
              to: `cosmos1${Math.random().toString(36).substr(2, 34)}`,
              amount: `${Math.floor(Math.random() * 1000)} ATOM`,
              time: new Date().toISOString(),
            },
          })
        } else if (/^cosmos1[a-zA-Z0-9]{38}$/.test(query)) {
          // Address search
          setResult({
            type: 'address',
            data: {
              address: query,
              balance: `${Math.floor(Math.random() * 1000000)} ATOM`,
              transactions: Math.floor(Math.random() * 1000),
            },
          })
        } else {
          setError('Invalid search query. Please enter a valid block height, transaction hash, or address.')
        }
      }
    }

    fetchSearchResults()
  }, [query])

  if (error) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Search Error</h2>
        <p className="text-red-600">{error}</p>
        <Link to="/" className="mt-4 inline-block text-indigo-600 hover:text-indigo-800">
          Return to Home
        </Link>
      </div>
    )
  }

  if (!result) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Searching...</h2>
        <p>Please wait while we fetch the results.</p>
      </div>
    )
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Search Results</h2>
      {result.type === 'block' && (
        <div>
          <h3 className="text-xl font-semibold mb-2">Block Information</h3>
          <p><strong>Height:</strong> {result.data.height}</p>
          <p><strong>Time:</strong> {new Date(result.data.time).toLocaleString()}</p>
          <p><strong>Transactions:</strong> {result.data.transactions}</p>
          <p><strong>Proposer:</strong> {result.data.proposer}</p>
        </div>
      )}
      {result.type === 'transaction' && (
        <div>
          <h3 className="text-xl font-semibold mb-2">Transaction Information</h3>
          <p><strong>Hash:</strong> {result.data.hash}</p>
          <p><strong>From:</strong> {result.data.from}</p>
          <p><strong>To:</strong> {result.data.to}</p>
          <p><strong>Amount:</strong> {result.data.amount}</p>
          <p><strong>Time:</strong> {new Date(result.data.time).toLocaleString()}</p>
        </div>
      )}
      {result.type === 'address' && (
        <div>
          <h3 className="text-xl font-semibold mb-2">Address Information</h3>
          <p><strong>Address:</strong> {result.data.address}</p>
          <p><strong>Balance:</strong> {result.data.balance}</p>
          <p><strong>Transactions:</strong> {result.data.transactions}</p>
        </div>
      )}
      <Link to="/" className="mt-4 inline-block text-indigo-600 hover:text-indigo-800">
        Return to Home
      </Link>
    </div>
  )
}

export default SearchResults