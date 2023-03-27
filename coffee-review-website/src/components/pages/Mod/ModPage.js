import React from 'react'
import GrinderTable from './GrinderTable'
import CountryTable from './CountryTable'
import BrewerTable from './BrewerTable'

const ModPage = () => {
  return (
    <div style={{ marginTop: '10px' }}>
        <GrinderTable />
        <CountryTable />
        <BrewerTable />
    </div>
  )
}

export default ModPage