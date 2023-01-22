import React from 'react'
import NavbarUser from '../components/Navbar'
import Jumbotron from '../components/Jumbotron'
import ListBook from '../components/ListBook'
import Footer from '../components/Footer'

export default function HomePage() {
    return (
        <>
            <NavbarUser />
            <Jumbotron />
            <ListBook />
            <Footer />
        </>
    )
}
