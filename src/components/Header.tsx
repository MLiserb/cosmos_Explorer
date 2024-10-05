import React from 'react'
import { Link } from 'react-router-dom'
import { Globe } from 'lucide-react'

const Header: React.FC = () => {
  return (
    <header className="bg-indigo-600 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Globe size={24} />
          <h1 className="text-2xl font-bold">Cosmos Chain Explorer</h1>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:text-indigo-200">Home</Link></li>
            <li><Link to="/blocks" className="hover:text-indigo-200">Blocks</Link></li>
            <li><Link to="/transactions" className="hover:text-indigo-200">Transactions</Link></li>
            <li><Link to="/validators" className="hover:text-indigo-200">Validators</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header