import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Blocks from './pages/Blocks'
import Transactions from './pages/Transactions'
import Validators from './pages/Validators'
import SearchResults from './pages/SearchResults'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blocks" element={<Blocks />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/validators" element={<Validators />} />
            <Route path="/search/:query" element={<SearchResults />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App