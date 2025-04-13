import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import SideBar from '../SideBar/SideBar';

const Root = () => {
    return (
        <div className=' mx-auto'>
            <Header></Header>
            <div className='lg:mx-auto flex gap-2 mt-2 mx-2 justify-center'>
                <div className='w-36 lg:w-56'>
                    <SideBar></SideBar>
                </div>
                <Outlet></Outlet>


                {/* <div>
                    <SideBar></SideBar>
                    </div> */}
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;