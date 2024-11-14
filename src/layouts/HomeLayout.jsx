import { Outlet } from 'react-router-dom';
import LatestNews from '../components/LatestNews';
import LeftNavbar from '../components/LeftNavbar';
import Navbar from '../components/Navbar';
import RightNavbar from '../components/RightNavbar';
import Header from './../components/Header';
const HomeLayout = () => {
    return (
        <div className='font-poppins w-11/12 mx-auto'>
            <header>
                <Header/>
                <section className='mt-6'>
                    <LatestNews></LatestNews>
                </section>
                <nav className='mt-4'>
                    <Navbar></Navbar>
                </nav>
            </header>
            <main className='grid grid-cols-12 gap-5 mt-8'>
                <aside className='col-span-3'><LeftNavbar></LeftNavbar></aside>
                <div className='col-span-6'><Outlet></Outlet></div>
                <aside className='col-span-3'><RightNavbar></RightNavbar></aside>
            </main>
        </div>
    );
};

export default HomeLayout;