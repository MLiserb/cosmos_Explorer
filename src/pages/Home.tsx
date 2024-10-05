import React from 'react'
import SearchBar from '../components/SearchBar'
import ChainInfo from '../components/ChainInfo'
import BlockList from '../components/BlockList'
import TransactionList from '../components/TransactionList'

const Home: React.FC = () => {
  return (
    <>
      <SearchBar />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <ChainInfo />
        <BlockList />
      </div>
      <TransactionList />
    </>
  )
}

export default Home