import React from 'react'
import NavbarUser from '../components/Navbar'
import IncomeTable from '../components/IncomeTable'
import DataBook from '../components/DataBook'

export default function IncomeAdminPage() {
    return (
        <>
            <NavbarUser />
            <DataBook />
            <IncomeTable />
        </>
    )
}
