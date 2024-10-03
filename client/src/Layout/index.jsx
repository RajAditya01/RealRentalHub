import React, { Suspense } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div className='flex flex-col min-h-screen w-screen'>
            <Header />
            <div className='w-full flex-grow'>
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet />
                </Suspense>
            </div>
            <Footer />
        </div>
    )
}

export default Layout
