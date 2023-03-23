import React from 'react'
import CountryAdd from './CountryAdd'
import GrinderAdd from './GrinderAdd'
import GrinderTable from './GrinderTable'
import CountryTable from './CountryTable'
import BrewerTable from './BrewerTable'

const ModPage = () => {
  return (
    <div style={{ marginTop: '10px' }}>
        <GrinderTable />
        <GrinderAdd />
        <CountryTable />
        <CountryAdd />
        <BrewerTable />
    </div>
  )
}

export default ModPage