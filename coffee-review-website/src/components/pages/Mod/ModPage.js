import React from 'react'
import CountryAdd from './CountryAdd'
import GrinderAdd from './GrinderAdd'
import GrinderTable from './GrinderTable'
import CountryTable from './CountryTable'
import BrewerTable from './BrewerTable'

const ModPage = () => {
  return (
    <>
        <GrinderTable />
        <GrinderAdd />
        <CountryTable />
        <CountryAdd />
        <BrewerTable />
    </>
  )
}

export default ModPage