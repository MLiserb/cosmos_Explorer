import React from 'react'

const TransactionList: React.FC = () => {
  // TODO: Fetch real data from a Cosmos API
  const transactions = [
    { hash: '0x1234...5678', from: '0xabcd...ef01', to: '0x2345...6789', amount: '100 ATOM' },
    { hash: '0x9876...5432', from: '0xfeda...bc01', to: '0x3456...7890', amount: '50 ATOM' },
    { hash: '0x5678...1234', from: '0xbcde...fa01', to: '0x4567...8901', amount: '75 ATOM' },
  ]

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-8">
      <h2 className="text-2xl font-semibold mb-4">Latest Transactions</h2>
      <table className="w-full">
        <thead>
          <tr className="text-left">
            <th className="pb-2">Transaction Hash</th>
            <th className="pb-2">From</th>
            <th className="pb-2">To</th>
            <th className="pb-2">Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx) => (
            <tr key={tx.hash} className="border-b">
              <td className="py-2">{tx.hash}</td>
              <td className="py-2">{tx.from}</td>
              <td className="py-2">{tx.to}</td>
              <td className="py-2">{tx.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TransactionList