import React from 'react'
import CountryAdd from './CountryAdd'
import GrinderAdd from './GrinderAdd'
import GrinderTable from './GrinderTable'
import CountryTable from './CountryTable'

const ModPage = () => {
  return (
    <>
        <GrinderTable />
        <GrinderAdd />
        <CountryTable />
        <CountryAdd />
    </>
  )
}

export default ModPage