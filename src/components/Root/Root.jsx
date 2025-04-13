import React from 'react';
import Header from '../Header/Header';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Footer/Footer';
import SideBar from '../SideBar/SideBar';

const Root = () => {
    const navigation = useNavigation();
    const isNavigating = Boolean(navigation.location)
    return (
        <div className=' mx-auto'>
            <Header></Header>
            <div className='lg:mx-auto flex gap-2 mt-2 mx-2 justify-center'>
                <div className='w-36 lg:w-56'>
                    <SideBar></SideBar>
                </div>
                {isNavigating && <span className="loading loading-spinner loading-xl"></span>}
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