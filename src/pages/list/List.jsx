import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import DataTable from '../../components/dataTable/DataTable'
import "./list.scss"

const list = () => {
  return (
    <div className='list'>
      <Sidebar />
      <div className="listContainer">
        <Navbar/>
        <DataTable />
      </div>
    </div>
  )
}

export default list