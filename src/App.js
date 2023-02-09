import { useEffect, useState } from 'react';
import pic from './pic.jpg';

function App() {
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScroll(window.scrollY > 150);
        });
    }, []);
    return (
        <div className='App font-display'>
            <header>
                <div
                    className={`header max-w-[1440px] w-full flex justify-between items-center px-24 py-2 ${
                        scroll
                            ? 'bg-opacity-75 bg-white backdrop-blur'
                            : 'bg-transparent'
                    } fixed top-0`}>
                    <div className='logo'>
                        <h2 className='text-primary text-xl uppercase font-bold'>
                            Plumbing
                        </h2>
                    </div>
                    <div className='nav flex items-center'>
                        <nav>
                            <ul className='list-none flex items-center'>
                                <li className='mx-2'>
                                    <a
                                        href='./#'
                                        className='text-primary hover:text-opacity-80 transition-colors duration-500'>
                                        Home
                                    </a>
                                </li>
                                <li className='mx-2'>
                                    <a
                                        href='./#'
                                        className='text-slate-500 hover:text-slate-800 transition-colors duration-500'>
                                        About
                                    </a>
                                </li>
                                <li className='mx-2'>
                                    <a
                                        href='./#'
                                        className='text-slate-500 hover:text-slate-800 transition-colors duration-500'>
                                        Service
                                    </a>
                                </li>
                                <li className='mx-2'>
                                    <a
                                        href='./#'
                                        className='text-slate-500 hover:text-slate-800 transition-colors duration-500'>
                                        Blog
                                    </a>
                                </li>
                                <li className='mx-2'>
                                    <a
                                        href='./#'
                                        className='text-slate-500 hover:text-slate-800 transition-colors duration-500'>
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <div className='flex justify-center items-center ml-6 px-4 py-2 rounded-full bg-primary text-white hover:text-primary hover:bg-white'>
                            <a href='./#'>Get Started</a>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default App;
