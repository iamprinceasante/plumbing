import { useEffect, useState } from 'react';
import pic from './pic.jpg';

function App() {
    // Scroll Effect
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScroll(window.scrollY > 50);
        });
    }, []);

    // Scroll Effect Ends

    return (
        <div className='font-display select-none w-screen'>
            {/* Header Section */}

            <header className='fixed z-50 w-screen top-0'>
                <div
                    className={`max-w-[1440px] w-full mx-auto flex justify-between items-center px-24 py-2 z-50 transition-colors duration-500 ${
                        scroll
                            ? 'bg-opacity-80 bg-white backdrop-blur'
                            : 'bg-transparent'
                    } relative top-0`}>
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
                                <li className='flex justify-center items-center ml-2 px-4 py-2 rounded-full bg-primary text-white hover:text-primary hover:bg-white border-primary border-2'>
                                    <a href='./#'>Get Started</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
            {/* Header Section Ends*/}

            {/* Main Section */}
            <main className='max-w-[1440px] w-full px-24 mx-auto'>
                {/* Hero Section */}
                <section className='hero relative flex flex-col'>
                    {/* Hero Section 1*/}

                    <div className='hero1 max-h-[400px] h-full grid grid-cols-2 gap-9'>
                        <div className='col-span-1 z-10 -ml-24'>
                            <img
                                src={pic}
                                alt='Plumbing work'
                                className='h-[500px] w-full'
                            />
                        </div>
                        <div className='col-span-1 pt-12 pb-6'>
                            <h1 className='text-6xl font-bold mt-8 capitalize'>
                                We fix all your plumbing{' '}
                                <span className='text-primary'>problems </span>
                            </h1>
                        </div>
                    </div>

                    {/* Hero Section 1 */}

                    {/* Our Expect Team */}

                    <div className='grid grid-cols-3 gap-4 p-5 shadow-xl bg-white z-20 place-items-center rounded self-center absolute top-[300px]'>
                        <h3 className='col-span-full  font-bold text-xl'>
                            Our Expect Team
                        </h3>
                        <div className='colspan-1 text-white bg-blue-500 p-3 rounded'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 24 24'
                                fill='currentColor'
                                className='w-9 h-9'>
                                <path
                                    fillRule='evenodd'
                                    d='M11.622 1.602a.75.75 0 01.756 0l2.25 1.313a.75.75 0 01-.756 1.295L12 3.118 10.128 4.21a.75.75 0 11-.756-1.295l2.25-1.313zM5.898 5.81a.75.75 0 01-.27 1.025l-1.14.665 1.14.665a.75.75 0 11-.756 1.295L3.75 8.806v.944a.75.75 0 01-1.5 0V7.5a.75.75 0 01.372-.648l2.25-1.312a.75.75 0 011.026.27zm12.204 0a.75.75 0 011.026-.27l2.25 1.312a.75.75 0 01.372.648v2.25a.75.75 0 01-1.5 0v-.944l-1.122.654a.75.75 0 11-.756-1.295l1.14-.665-1.14-.665a.75.75 0 01-.27-1.025zm-9 5.25a.75.75 0 011.026-.27L12 11.882l1.872-1.092a.75.75 0 11.756 1.295l-1.878 1.096V15a.75.75 0 01-1.5 0v-1.82l-1.878-1.095a.75.75 0 01-.27-1.025zM3 13.5a.75.75 0 01.75.75v1.82l1.878 1.095a.75.75 0 11-.756 1.295l-2.25-1.312a.75.75 0 01-.372-.648v-2.25A.75.75 0 013 13.5zm18 0a.75.75 0 01.75.75v2.25a.75.75 0 01-.372.648l-2.25 1.312a.75.75 0 11-.756-1.295l1.878-1.096V14.25a.75.75 0 01.75-.75zm-9 5.25a.75.75 0 01.75.75v.944l1.122-.654a.75.75 0 11.756 1.295l-2.25 1.313a.75.75 0 01-.756 0l-2.25-1.313a.75.75 0 11.756-1.295l1.122.654V19.5a.75.75 0 01.75-.75z'
                                    clipRule='evenodd'
                                />
                            </svg>
                        </div>
                        <div className='colspan-1 text-white bg-red-500 p-3 rounded'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 24 24'
                                fill='currentColor'
                                className='w-9 h-9'>
                                <path
                                    fillRule='evenodd'
                                    d='M11.622 1.602a.75.75 0 01.756 0l2.25 1.313a.75.75 0 01-.756 1.295L12 3.118 10.128 4.21a.75.75 0 11-.756-1.295l2.25-1.313zM5.898 5.81a.75.75 0 01-.27 1.025l-1.14.665 1.14.665a.75.75 0 11-.756 1.295L3.75 8.806v.944a.75.75 0 01-1.5 0V7.5a.75.75 0 01.372-.648l2.25-1.312a.75.75 0 011.026.27zm12.204 0a.75.75 0 011.026-.27l2.25 1.312a.75.75 0 01.372.648v2.25a.75.75 0 01-1.5 0v-.944l-1.122.654a.75.75 0 11-.756-1.295l1.14-.665-1.14-.665a.75.75 0 01-.27-1.025zm-9 5.25a.75.75 0 011.026-.27L12 11.882l1.872-1.092a.75.75 0 11.756 1.295l-1.878 1.096V15a.75.75 0 01-1.5 0v-1.82l-1.878-1.095a.75.75 0 01-.27-1.025zM3 13.5a.75.75 0 01.75.75v1.82l1.878 1.095a.75.75 0 11-.756 1.295l-2.25-1.312a.75.75 0 01-.372-.648v-2.25A.75.75 0 013 13.5zm18 0a.75.75 0 01.75.75v2.25a.75.75 0 01-.372.648l-2.25 1.312a.75.75 0 11-.756-1.295l1.878-1.096V14.25a.75.75 0 01.75-.75zm-9 5.25a.75.75 0 01.75.75v.944l1.122-.654a.75.75 0 11.756 1.295l-2.25 1.313a.75.75 0 01-.756 0l-2.25-1.313a.75.75 0 11.756-1.295l1.122.654V19.5a.75.75 0 01.75-.75z'
                                    clipRule='evenodd'
                                />
                            </svg>
                        </div>
                        <div className='colspan-1 text-white bg-yellow-500 p-3 rounded'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 24 24'
                                fill='currentColor'
                                className='w-9 h-9'>
                                <path
                                    fillRule='evenodd'
                                    d='M11.622 1.602a.75.75 0 01.756 0l2.25 1.313a.75.75 0 01-.756 1.295L12 3.118 10.128 4.21a.75.75 0 11-.756-1.295l2.25-1.313zM5.898 5.81a.75.75 0 01-.27 1.025l-1.14.665 1.14.665a.75.75 0 11-.756 1.295L3.75 8.806v.944a.75.75 0 01-1.5 0V7.5a.75.75 0 01.372-.648l2.25-1.312a.75.75 0 011.026.27zm12.204 0a.75.75 0 011.026-.27l2.25 1.312a.75.75 0 01.372.648v2.25a.75.75 0 01-1.5 0v-.944l-1.122.654a.75.75 0 11-.756-1.295l1.14-.665-1.14-.665a.75.75 0 01-.27-1.025zm-9 5.25a.75.75 0 011.026-.27L12 11.882l1.872-1.092a.75.75 0 11.756 1.295l-1.878 1.096V15a.75.75 0 01-1.5 0v-1.82l-1.878-1.095a.75.75 0 01-.27-1.025zM3 13.5a.75.75 0 01.75.75v1.82l1.878 1.095a.75.75 0 11-.756 1.295l-2.25-1.312a.75.75 0 01-.372-.648v-2.25A.75.75 0 013 13.5zm18 0a.75.75 0 01.75.75v2.25a.75.75 0 01-.372.648l-2.25 1.312a.75.75 0 11-.756-1.295l1.878-1.096V14.25a.75.75 0 01.75-.75zm-9 5.25a.75.75 0 01.75.75v.944l1.122-.654a.75.75 0 11.756 1.295l-2.25 1.313a.75.75 0 01-.756 0l-2.25-1.313a.75.75 0 11.756-1.295l1.122.654V19.5a.75.75 0 01.75-.75z'
                                    clipRule='evenodd'
                                />
                            </svg>
                        </div>
                        <div className='colspan-1 text-white bg-green-500 p-3 rounded'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 24 24'
                                fill='currentColor'
                                className='w-9 h-9'>
                                <path
                                    fillRule='evenodd'
                                    d='M11.622 1.602a.75.75 0 01.756 0l2.25 1.313a.75.75 0 01-.756 1.295L12 3.118 10.128 4.21a.75.75 0 11-.756-1.295l2.25-1.313zM5.898 5.81a.75.75 0 01-.27 1.025l-1.14.665 1.14.665a.75.75 0 11-.756 1.295L3.75 8.806v.944a.75.75 0 01-1.5 0V7.5a.75.75 0 01.372-.648l2.25-1.312a.75.75 0 011.026.27zm12.204 0a.75.75 0 011.026-.27l2.25 1.312a.75.75 0 01.372.648v2.25a.75.75 0 01-1.5 0v-.944l-1.122.654a.75.75 0 11-.756-1.295l1.14-.665-1.14-.665a.75.75 0 01-.27-1.025zm-9 5.25a.75.75 0 011.026-.27L12 11.882l1.872-1.092a.75.75 0 11.756 1.295l-1.878 1.096V15a.75.75 0 01-1.5 0v-1.82l-1.878-1.095a.75.75 0 01-.27-1.025zM3 13.5a.75.75 0 01.75.75v1.82l1.878 1.095a.75.75 0 11-.756 1.295l-2.25-1.312a.75.75 0 01-.372-.648v-2.25A.75.75 0 013 13.5zm18 0a.75.75 0 01.75.75v2.25a.75.75 0 01-.372.648l-2.25 1.312a.75.75 0 11-.756-1.295l1.878-1.096V14.25a.75.75 0 01.75-.75zm-9 5.25a.75.75 0 01.75.75v.944l1.122-.654a.75.75 0 11.756 1.295l-2.25 1.313a.75.75 0 01-.756 0l-2.25-1.313a.75.75 0 11.756-1.295l1.122.654V19.5a.75.75 0 01.75-.75z'
                                    clipRule='evenodd'
                                />
                            </svg>
                        </div>
                        <div className='colspan-1 text-white bg-purple-500 p-3 rounded'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 24 24'
                                fill='currentColor'
                                className='w-9 h-9'>
                                <path
                                    fillRule='evenodd'
                                    d='M11.622 1.602a.75.75 0 01.756 0l2.25 1.313a.75.75 0 01-.756 1.295L12 3.118 10.128 4.21a.75.75 0 11-.756-1.295l2.25-1.313zM5.898 5.81a.75.75 0 01-.27 1.025l-1.14.665 1.14.665a.75.75 0 11-.756 1.295L3.75 8.806v.944a.75.75 0 01-1.5 0V7.5a.75.75 0 01.372-.648l2.25-1.312a.75.75 0 011.026.27zm12.204 0a.75.75 0 011.026-.27l2.25 1.312a.75.75 0 01.372.648v2.25a.75.75 0 01-1.5 0v-.944l-1.122.654a.75.75 0 11-.756-1.295l1.14-.665-1.14-.665a.75.75 0 01-.27-1.025zm-9 5.25a.75.75 0 011.026-.27L12 11.882l1.872-1.092a.75.75 0 11.756 1.295l-1.878 1.096V15a.75.75 0 01-1.5 0v-1.82l-1.878-1.095a.75.75 0 01-.27-1.025zM3 13.5a.75.75 0 01.75.75v1.82l1.878 1.095a.75.75 0 11-.756 1.295l-2.25-1.312a.75.75 0 01-.372-.648v-2.25A.75.75 0 013 13.5zm18 0a.75.75 0 01.75.75v2.25a.75.75 0 01-.372.648l-2.25 1.312a.75.75 0 11-.756-1.295l1.878-1.096V14.25a.75.75 0 01.75-.75zm-9 5.25a.75.75 0 01.75.75v.944l1.122-.654a.75.75 0 11.756 1.295l-2.25 1.313a.75.75 0 01-.756 0l-2.25-1.313a.75.75 0 11.756-1.295l1.122.654V19.5a.75.75 0 01.75-.75z'
                                    clipRule='evenodd'
                                />
                            </svg>
                        </div>
                        <div className='colspan-1 text-white bg-pink-500 p-3 rounded'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 24 24'
                                fill='currentColor'
                                className='w-9 h-9'>
                                <path
                                    fillRule='evenodd'
                                    d='M11.622 1.602a.75.75 0 01.756 0l2.25 1.313a.75.75 0 01-.756 1.295L12 3.118 10.128 4.21a.75.75 0 11-.756-1.295l2.25-1.313zM5.898 5.81a.75.75 0 01-.27 1.025l-1.14.665 1.14.665a.75.75 0 11-.756 1.295L3.75 8.806v.944a.75.75 0 01-1.5 0V7.5a.75.75 0 01.372-.648l2.25-1.312a.75.75 0 011.026.27zm12.204 0a.75.75 0 011.026-.27l2.25 1.312a.75.75 0 01.372.648v2.25a.75.75 0 01-1.5 0v-.944l-1.122.654a.75.75 0 11-.756-1.295l1.14-.665-1.14-.665a.75.75 0 01-.27-1.025zm-9 5.25a.75.75 0 011.026-.27L12 11.882l1.872-1.092a.75.75 0 11.756 1.295l-1.878 1.096V15a.75.75 0 01-1.5 0v-1.82l-1.878-1.095a.75.75 0 01-.27-1.025zM3 13.5a.75.75 0 01.75.75v1.82l1.878 1.095a.75.75 0 11-.756 1.295l-2.25-1.312a.75.75 0 01-.372-.648v-2.25A.75.75 0 013 13.5zm18 0a.75.75 0 01.75.75v2.25a.75.75 0 01-.372.648l-2.25 1.312a.75.75 0 11-.756-1.295l1.878-1.096V14.25a.75.75 0 01.75-.75zm-9 5.25a.75.75 0 01.75.75v.944l1.122-.654a.75.75 0 11.756 1.295l-2.25 1.313a.75.75 0 01-.756 0l-2.25-1.313a.75.75 0 11.756-1.295l1.122.654V19.5a.75.75 0 01.75-.75z'
                                    clipRule='evenodd'
                                />
                            </svg>
                        </div>
                        <div className='col-span-full place-self-center flex justify-center items-center px-4 py-1 bg-primary text-white hover:text-primary hover:bg-white border-primary border-2 rounded-full shadow w-fit'>
                            <a href='./#'>Contact Us</a>
                        </div>
                    </div>

                    {/* Our Section Expect Ends*/}

                    {/* Hero Section 2*/}
                    <div className='hero2 bg-slate-200 bg-opacity-20 grid grid-cols-3 gap-16 -mx-24 px-24'>
                        <div className='col-span-2 mt-32 py-20 grid grid-cols-2 gap-9 place-self-start'>
                            <div className='col-span-1'>
                                <p className='text-primary font-bold text-5xl'>
                                    1,500+
                                </p>
                                <p className='capitalize max-w-[184px] text-lg mt-2'>
                                    Clients satisfaction with our Services
                                </p>
                            </div>
                            <div className='col-span-1'>
                                <p className='text-primary font-bold text-5xl'>
                                    2,300+
                                </p>
                                <p className='capitalize max-w-[184px] text-lg mt-2'>
                                    Project completed by our services
                                </p>
                            </div>
                        </div>
                        <div className='col-span-1'>
                            <h3 className='text-right my-8 flex flex-col justify-center items-end'>
                                <div className='top text-2xl'>
                                    {' '}
                                    8.9{' '}
                                    <span className='text-slate-300 text-2xl mx-0.5'>
                                        |
                                    </span>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 24 24'
                                        fill='currentColor'
                                        className='w-6 h-6 text-yellow-500 inline'>
                                        <path
                                            fillRule='evenodd'
                                            d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z'
                                            clipRule='evenodd'
                                        />
                                    </svg>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 24 24'
                                        fill='currentColor'
                                        className='w-6 h-6 text-yellow-500 inline'>
                                        <path
                                            fillRule='evenodd'
                                            d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z'
                                            clipRule='evenodd'
                                        />
                                    </svg>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 24 24'
                                        fill='currentColor'
                                        className='w-6 h-6 text-yellow-500 inline'>
                                        <path
                                            fillRule='evenodd'
                                            d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z'
                                            clipRule='evenodd'
                                        />
                                    </svg>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 24 24'
                                        fill='currentColor'
                                        className='w-6 h-6 text-yellow-500 inline'>
                                        <path
                                            fillRule='evenodd'
                                            d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z'
                                            clipRule='evenodd'
                                        />
                                    </svg>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 24 24'
                                        fill='currentColor'
                                        className='w-6 h-6 text-yellow-500 inline'>
                                        <path
                                            fillRule='evenodd'
                                            d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z'
                                            clipRule='evenodd'
                                        />
                                    </svg>
                                </div>
                                <p className='text-[22px]'>
                                    324k Total Reviews
                                </p>
                            </h3>
                            <div className='relative'>
                                <div className='p-2 rounded-full bg-white absolute -top-8 -left-8 shadow-2xl'>
                                    <div className='icon shadow-md text-primary bg-yellow-500 p-4 rounded-full'>
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            viewBox='0 0 24 24'
                                            fill='currentColor'
                                            className='w-9 h-9 animate-bounce'>
                                            <path
                                                fillRule='evenodd'
                                                d='M11.622 1.602a.75.75 0 01.756 0l2.25 1.313a.75.75 0 01-.756 1.295L12 3.118 10.128 4.21a.75.75 0 11-.756-1.295l2.25-1.313zM5.898 5.81a.75.75 0 01-.27 1.025l-1.14.665 1.14.665a.75.75 0 11-.756 1.295L3.75 8.806v.944a.75.75 0 01-1.5 0V7.5a.75.75 0 01.372-.648l2.25-1.312a.75.75 0 011.026.27zm12.204 0a.75.75 0 011.026-.27l2.25 1.312a.75.75 0 01.372.648v2.25a.75.75 0 01-1.5 0v-.944l-1.122.654a.75.75 0 11-.756-1.295l1.14-.665-1.14-.665a.75.75 0 01-.27-1.025zm-9 5.25a.75.75 0 011.026-.27L12 11.882l1.872-1.092a.75.75 0 11.756 1.295l-1.878 1.096V15a.75.75 0 01-1.5 0v-1.82l-1.878-1.095a.75.75 0 01-.27-1.025zM3 13.5a.75.75 0 01.75.75v1.82l1.878 1.095a.75.75 0 11-.756 1.295l-2.25-1.312a.75.75 0 01-.372-.648v-2.25A.75.75 0 013 13.5zm18 0a.75.75 0 01.75.75v2.25a.75.75 0 01-.372.648l-2.25 1.312a.75.75 0 11-.756-1.295l1.878-1.096V14.25a.75.75 0 01.75-.75zm-9 5.25a.75.75 0 01.75.75v.944l1.122-.654a.75.75 0 11.756 1.295l-2.25 1.313a.75.75 0 01-.756 0l-2.25-1.313a.75.75 0 11.756-1.295l1.122.654V19.5a.75.75 0 01.75-.75z'
                                                clipRule='evenodd'
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <img
                                    src={pic}
                                    alt=''
                                    className='w-full h-[280px] rounded-t'
                                />
                            </div>
                        </div>
                    </div>
                    {/* Hero Section 2 Ends*/}
                </section>
                {/* Hero Section Ends*/}

                {/* Services Section*/}
                <section className='py-20 bg-slate-50 -mx-24 px-24 z-20 relative'>
                    <h2 className='text-center text-2xl font-bold text-primary my-3'>
                        Plumbing Service
                    </h2>
                    <h3 className='text-center text-4xl font-bold mt-2 mb-24'>
                        Our Plumbing Service
                    </h3>
                    <div className='grid grid-cols-3 gap-12 place-items-center'>
                        <div className='flex flex-col justify-center items-center relative p-9 bg-white rounded mt-6 shadow-2xl'>
                            <div className='absolute rounded bg-white h-full w-full -z-10 skew-y-6 origin-top-right shadow-2xl'></div>
                            <div className='icon shadow-md text-white bg-blue-500 p-5 rounded-full absolute -top-14'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 24 24'
                                    fill='currentColor'
                                    className='w-9 h-9 bg-blue-500'>
                                    <path
                                        fillRule='evenodd'
                                        d='M11.622 1.602a.75.75 0 01.756 0l2.25 1.313a.75.75 0 01-.756 1.295L12 3.118 10.128 4.21a.75.75 0 11-.756-1.295l2.25-1.313zM5.898 5.81a.75.75 0 01-.27 1.025l-1.14.665 1.14.665a.75.75 0 11-.756 1.295L3.75 8.806v.944a.75.75 0 01-1.5 0V7.5a.75.75 0 01.372-.648l2.25-1.312a.75.75 0 011.026.27zm12.204 0a.75.75 0 011.026-.27l2.25 1.312a.75.75 0 01.372.648v2.25a.75.75 0 01-1.5 0v-.944l-1.122.654a.75.75 0 11-.756-1.295l1.14-.665-1.14-.665a.75.75 0 01-.27-1.025zm-9 5.25a.75.75 0 011.026-.27L12 11.882l1.872-1.092a.75.75 0 11.756 1.295l-1.878 1.096V15a.75.75 0 01-1.5 0v-1.82l-1.878-1.095a.75.75 0 01-.27-1.025zM3 13.5a.75.75 0 01.75.75v1.82l1.878 1.095a.75.75 0 11-.756 1.295l-2.25-1.312a.75.75 0 01-.372-.648v-2.25A.75.75 0 013 13.5zm18 0a.75.75 0 01.75.75v2.25a.75.75 0 01-.372.648l-2.25 1.312a.75.75 0 11-.756-1.295l1.878-1.096V14.25a.75.75 0 01.75-.75zm-9 5.25a.75.75 0 01.75.75v.944l1.122-.654a.75.75 0 11.756 1.295l-2.25 1.313a.75.75 0 01-.756 0l-2.25-1.313a.75.75 0 11.756-1.295l1.122.654V19.5a.75.75 0 01.75-.75z'
                                        clipRule='evenodd'
                                    />
                                </svg>
                            </div>
                            <h4 className='text-2xl mt-7 mb-7 text-center font-bold'>
                                General Plumbing
                            </h4>
                            <p className='text-center'>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Omnis ut quas similique sed,
                                vitae possimus.
                            </p>
                        </div>
                        <div className='flex flex-col justify-center items-center relative shadow-2xl p-9 rounded bg-primary text-white'>
                            <div className='icon shadow-md text-primary bg-white p-5 rounded-full absolute -top-10'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 24 24'
                                    fill='currentColor'
                                    className='w-9 h-9 bg-white'>
                                    <path
                                        fillRule='evenodd'
                                        d='M11.622 1.602a.75.75 0 01.756 0l2.25 1.313a.75.75 0 01-.756 1.295L12 3.118 10.128 4.21a.75.75 0 11-.756-1.295l2.25-1.313zM5.898 5.81a.75.75 0 01-.27 1.025l-1.14.665 1.14.665a.75.75 0 11-.756 1.295L3.75 8.806v.944a.75.75 0 01-1.5 0V7.5a.75.75 0 01.372-.648l2.25-1.312a.75.75 0 011.026.27zm12.204 0a.75.75 0 011.026-.27l2.25 1.312a.75.75 0 01.372.648v2.25a.75.75 0 01-1.5 0v-.944l-1.122.654a.75.75 0 11-.756-1.295l1.14-.665-1.14-.665a.75.75 0 01-.27-1.025zm-9 5.25a.75.75 0 011.026-.27L12 11.882l1.872-1.092a.75.75 0 11.756 1.295l-1.878 1.096V15a.75.75 0 01-1.5 0v-1.82l-1.878-1.095a.75.75 0 01-.27-1.025zM3 13.5a.75.75 0 01.75.75v1.82l1.878 1.095a.75.75 0 11-.756 1.295l-2.25-1.312a.75.75 0 01-.372-.648v-2.25A.75.75 0 013 13.5zm18 0a.75.75 0 01.75.75v2.25a.75.75 0 01-.372.648l-2.25 1.312a.75.75 0 11-.756-1.295l1.878-1.096V14.25a.75.75 0 01.75-.75zm-9 5.25a.75.75 0 01.75.75v.944l1.122-.654a.75.75 0 11.756 1.295l-2.25 1.313a.75.75 0 01-.756 0l-2.25-1.313a.75.75 0 11.756-1.295l1.122.654V19.5a.75.75 0 01.75-.75z'
                                        clipRule='evenodd'
                                    />
                                </svg>
                            </div>
                            <h4 className='text-2xl mt-7 mb-4 text-center font-bold'>
                                Factory Machine
                            </h4>
                            <p className='text-center'>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Omnis ut quas similique sed,
                                vitae possimus.
                            </p>
                            <div className='flex justify-center items-center mt-8 animate-pulse'>
                                <a href='./#'>Read More</a>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    strokeWidth={1.5}
                                    stroke='currentColor'
                                    className='w-6 h-6 mx-2'>
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center relative shadow-2xl p-9 rounded bg-white mt-8'>
                            <div className='absolute bg-white -skew-y-6 origin-top-left h-full w-full rounded -z-10 shadow-2xl'></div>
                            <div className='icon shadow-md text-white bg-blue-500 p-5 rounded-full absolute -top-12'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 24 24'
                                    fill='currentColor'
                                    className='w-9 h-9 bg-blue-500'>
                                    <path
                                        fillRule='evenodd'
                                        d='M11.622 1.602a.75.75 0 01.756 0l2.25 1.313a.75.75 0 01-.756 1.295L12 3.118 10.128 4.21a.75.75 0 11-.756-1.295l2.25-1.313zM5.898 5.81a.75.75 0 01-.27 1.025l-1.14.665 1.14.665a.75.75 0 11-.756 1.295L3.75 8.806v.944a.75.75 0 01-1.5 0V7.5a.75.75 0 01.372-.648l2.25-1.312a.75.75 0 011.026.27zm12.204 0a.75.75 0 011.026-.27l2.25 1.312a.75.75 0 01.372.648v2.25a.75.75 0 01-1.5 0v-.944l-1.122.654a.75.75 0 11-.756-1.295l1.14-.665-1.14-.665a.75.75 0 01-.27-1.025zm-9 5.25a.75.75 0 011.026-.27L12 11.882l1.872-1.092a.75.75 0 11.756 1.295l-1.878 1.096V15a.75.75 0 01-1.5 0v-1.82l-1.878-1.095a.75.75 0 01-.27-1.025zM3 13.5a.75.75 0 01.75.75v1.82l1.878 1.095a.75.75 0 11-.756 1.295l-2.25-1.312a.75.75 0 01-.372-.648v-2.25A.75.75 0 013 13.5zm18 0a.75.75 0 01.75.75v2.25a.75.75 0 01-.372.648l-2.25 1.312a.75.75 0 11-.756-1.295l1.878-1.096V14.25a.75.75 0 01.75-.75zm-9 5.25a.75.75 0 01.75.75v.944l1.122-.654a.75.75 0 11.756 1.295l-2.25 1.313a.75.75 0 01-.756 0l-2.25-1.313a.75.75 0 11.756-1.295l1.122.654V19.5a.75.75 0 01.75-.75z'
                                        clipRule='evenodd'
                                    />
                                </svg>
                            </div>
                            <h4 className='text-2xl mt-7 mb-4 text-center font-bold'>
                                Plumber Wrench
                            </h4>
                            <p className='text-center'>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Omnis ut quas similique sed,
                                vitae possimus.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Services Section Ends */}

                {/* What We Offer */}

                <section className='grid grid-cols-2 gap-9 -mx-24 px-24 bg-slate-100 py-20'>
                    <div className='col-span-1'>
                        <h2 className='text-2xl font-bold text-primary mb-3'>
                            What we offer
                        </h2>
                        <h3 className='text-4xl font-bold mt-2 mb-10'>
                            We serve any work very quickly at a low price
                        </h3>
                        <div>
                            <div className='flex items-center mb-3'>
                                <div className='mr-2'>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 24 24'
                                        fill='currentColor'
                                        className='w-6 h-6 text-primary'>
                                        <path
                                            fillRule='evenodd'
                                            d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z'
                                            clipRule='evenodd'
                                        />
                                    </svg>
                                </div>
                                <p className='text-xl'>Affordable Pricing</p>
                            </div>
                            <div className='flex items-center mb-3'>
                                <div className='mr-2'>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 24 24'
                                        fill='currentColor'
                                        className='w-6 h-6 text-primary'>
                                        <path
                                            fillRule='evenodd'
                                            d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z'
                                            clipRule='evenodd'
                                        />
                                    </svg>
                                </div>
                                <p className='text-xl'>Plumbing Experts</p>
                            </div>
                            <div className='flex items-center mb-3'>
                                <div className='mr-2'>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 24 24'
                                        fill='currentColor'
                                        className='w-6 h-6 text-primary'>
                                        <path
                                            fillRule='evenodd'
                                            d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z'
                                            clipRule='evenodd'
                                        />
                                    </svg>
                                </div>
                                <p className='text-xl'>1500+ Project Done</p>
                            </div>
                            <div className='flex items-center mb-3'>
                                <div className='mr-2'>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 24 24'
                                        fill='currentColor'
                                        className='w-6 h-6 text-primary'>
                                        <path
                                            fillRule='evenodd'
                                            d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z'
                                            clipRule='evenodd'
                                        />
                                    </svg>
                                </div>
                                <p className='text-xl'>Modern Technology</p>
                            </div>
                            <div className='flex items-center mb-3'>
                                <div className='mr-2'>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 24 24'
                                        fill='currentColor'
                                        className='w-6 h-6 text-primary'>
                                        <path
                                            fillRule='evenodd'
                                            d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z'
                                            clipRule='evenodd'
                                        />
                                    </svg>
                                </div>
                                <p className='text-xl'>24/7 Services</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-1'>
                        <img
                            src={pic}
                            alt='Man fixing broken pipes'
                            className='h-[380px] w-full rounded'
                        />
                    </div>
                </section>
                {/* What We Offer Ends*/}

                {/* Why Choose Us */}
                <section className='grid grid-cols-5 gap-16 py-20'>
                    <div className='col-span-2'>
                        <img
                            src={pic}
                            alt='Why Choose Us'
                            className='h-[350px] w-full rounded'
                        />
                    </div>
                    <div className='col-span-3'>
                        <h2 className='text-2xl font-bold text-primary mb-3 capitalize'>
                            Why choose us
                        </h2>
                        <h3 className='text-4xl font-bold mt-2 mb-12 capitalize'>
                            The perfect solution for all plumbing service
                        </h3>
                        <div className='grid grid-cols-2 gap-20'>
                            <div className='flex flex-col'>
                                <h4 className='uppercase flex items-center mb-2'>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 24 24'
                                        fill='currentColor'
                                        className='w-9 h-9 text-blue-500 mr-2 inline'>
                                        <path
                                            fillRule='evenodd'
                                            d='M11.622 1.602a.75.75 0 01.756 0l2.25 1.313a.75.75 0 01-.756 1.295L12 3.118 10.128 4.21a.75.75 0 11-.756-1.295l2.25-1.313zM5.898 5.81a.75.75 0 01-.27 1.025l-1.14.665 1.14.665a.75.75 0 11-.756 1.295L3.75 8.806v.944a.75.75 0 01-1.5 0V7.5a.75.75 0 01.372-.648l2.25-1.312a.75.75 0 011.026.27zm12.204 0a.75.75 0 011.026-.27l2.25 1.312a.75.75 0 01.372.648v2.25a.75.75 0 01-1.5 0v-.944l-1.122.654a.75.75 0 11-.756-1.295l1.14-.665-1.14-.665a.75.75 0 01-.27-1.025zm-9 5.25a.75.75 0 011.026-.27L12 11.882l1.872-1.092a.75.75 0 11.756 1.295l-1.878 1.096V15a.75.75 0 01-1.5 0v-1.82l-1.878-1.095a.75.75 0 01-.27-1.025zM3 13.5a.75.75 0 01.75.75v1.82l1.878 1.095a.75.75 0 11-.756 1.295l-2.25-1.312a.75.75 0 01-.372-.648v-2.25A.75.75 0 013 13.5zm18 0a.75.75 0 01.75.75v2.25a.75.75 0 01-.372.648l-2.25 1.312a.75.75 0 11-.756-1.295l1.878-1.096V14.25a.75.75 0 01.75-.75zm-9 5.25a.75.75 0 01.75.75v.944l1.122-.654a.75.75 0 11.756 1.295l-2.25 1.313a.75.75 0 01-.756 0l-2.25-1.313a.75.75 0 11.756-1.295l1.122.654V19.5a.75.75 0 01.75-.75z'
                                            clipRule='evenodd'
                                        />
                                    </svg>
                                    <span className='text-2xl font-bold'>
                                        Our mission
                                    </span>
                                </h4>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Exercitationem sint eum
                                    ullam!
                                </p>
                            </div>
                            <div className='flex flex-col'>
                                <h4 className='uppercase flex items-center mb-2'>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 24 24'
                                        fill='currentColor'
                                        className='w-9 h-9 text-blue-500 mr-2 inline'>
                                        <path
                                            fillRule='evenodd'
                                            d='M11.622 1.602a.75.75 0 01.756 0l2.25 1.313a.75.75 0 01-.756 1.295L12 3.118 10.128 4.21a.75.75 0 11-.756-1.295l2.25-1.313zM5.898 5.81a.75.75 0 01-.27 1.025l-1.14.665 1.14.665a.75.75 0 11-.756 1.295L3.75 8.806v.944a.75.75 0 01-1.5 0V7.5a.75.75 0 01.372-.648l2.25-1.312a.75.75 0 011.026.27zm12.204 0a.75.75 0 011.026-.27l2.25 1.312a.75.75 0 01.372.648v2.25a.75.75 0 01-1.5 0v-.944l-1.122.654a.75.75 0 11-.756-1.295l1.14-.665-1.14-.665a.75.75 0 01-.27-1.025zm-9 5.25a.75.75 0 011.026-.27L12 11.882l1.872-1.092a.75.75 0 11.756 1.295l-1.878 1.096V15a.75.75 0 01-1.5 0v-1.82l-1.878-1.095a.75.75 0 01-.27-1.025zM3 13.5a.75.75 0 01.75.75v1.82l1.878 1.095a.75.75 0 11-.756 1.295l-2.25-1.312a.75.75 0 01-.372-.648v-2.25A.75.75 0 013 13.5zm18 0a.75.75 0 01.75.75v2.25a.75.75 0 01-.372.648l-2.25 1.312a.75.75 0 11-.756-1.295l1.878-1.096V14.25a.75.75 0 01.75-.75zm-9 5.25a.75.75 0 01.75.75v.944l1.122-.654a.75.75 0 11.756 1.295l-2.25 1.313a.75.75 0 01-.756 0l-2.25-1.313a.75.75 0 11.756-1.295l1.122.654V19.5a.75.75 0 01.75-.75z'
                                            clipRule='evenodd'
                                        />
                                    </svg>
                                    <span className='text-2xl font-bold'>
                                        Our vision
                                    </span>
                                </h4>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Exercitationem sint eum
                                    ullam!
                                </p>
                            </div>
                        </div>
                        <div className='flex justify-center items-center my-4 px-6 py-2 bg-primary text-white hover:text-primary hover:bg-white border-primary border-2 rounded-full shadow w-fit'>
                            <a href='./#'>Get Started</a>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us Ends*/}

                {/* Contact Us Section */}
            </main>
            <footer className='max-w-[1440px] w-full mx-auto px-24 pt-8 pb-4 bg-slate-100 relative mt-32'>
                <section className='grid grid-cols-5 bg-primary py-10 gap-16 rounded-md text-white relative -top-40'>
                    <div className='col-span-3 px-9 flex flex-col justify-center'>
                        <p className='text-2xl font-bold'>
                            Can't find your desired service?
                        </p>
                        <p className='text-2xl font-bold my-2'>
                            Let know in 24/7 in 3125
                        </p>
                        <div className='grid grid-cols-2 gap-6'>
                            <div className='flex justify-center items-center mt-4 px-6 py-2 bg-white text-primary hover:border-2 hover:border-white hover:text-white hover:bg-primary rounded-full shadow w-fit transition-all duration-500'>
                                <a href='./#'>Request a service</a>
                            </div>
                            <div className='flex justify-center items-center mt-4 px-9 py-2 bg-primary text-white border-2 border-white hover:bg-white hover:text-primary rounded-full shadow w-fit transition-all duration-500'>
                                <a href='./#'>3125</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-2 mr-6 -mt-28'>
                        <img
                            src={pic}
                            alt='Call Us Now'
                            className='h-[300px] w-full rounded'
                        />
                    </div>
                </section>
                <section className='-mt-28 grid grid-cols-5 gap-14'>
                    <div className='col-span-2'>
                        <div className='mb-4'>
                            <h2 className='text-2xl uppercase font-bold'>
                                Plumbing
                            </h2>
                        </div>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Accusamus, ut. Optio, nobis fuga minima porro
                            totam necessitatibus beatae dolorum delectus!
                        </p>
                    </div>
                    <div className='col-span-1'>
                        <h2 className='text-xl uppercase font-bold mb-4'>
                            About Us
                        </h2>
                        <div className='gap-y-1 grid'>
                            <div className='link'>
                                <a href='./#'>Our Site</a>
                            </div>
                            <div className='link'>
                                <a href='./#'>Team</a>
                            </div>
                            <div className='link'>
                                <a href='./#'>Members</a>
                            </div>
                            <div className='link'>
                                <a href='./#'>Careers</a>
                            </div>
                            <div className='link'>
                                <a href='./#'>Contact Us</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-1'>
                        <h2 className='text-xl uppercase font-bold mb-4'>
                            Quick Links
                        </h2>
                        <div className='gap-y-1 grid'>
                            <div className='link'>
                                <a href='./#'>Terms of Use</a>
                            </div>
                            <div className='link'>
                                <a href='./#'>Privacy and Policy</a>
                            </div>
                            <div className='link'>
                                <a href='./#'>Contact</a>
                            </div>
                            <div className='link'>
                                <a href='./#'>Support</a>
                            </div>
                            <div className='link'>
                                <a href='./#'>FAQ's</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-1'>
                        <h2 className='text-xl uppercase font-bold mb-4'>
                            Support
                        </h2>
                        <div className='gap-y-1 grid'>
                            <div className='link'>
                                <a href='./#'>Help Centers</a>
                            </div>
                            <div className='link'>
                                <a href='./#'>Loan Support</a>
                            </div>
                            <div className='link'>
                                <a href='./#'>Manager</a>
                            </div>
                            <div className='link'>
                                <a href='./#'>Privacy</a>
                            </div>
                            <div className='link'>
                                <a href='./#'>Policy</a>
                            </div>
                        </div>
                    </div>
                </section>
                <div className='h-[1px] bg-slate-300 w-full mt-12'></div>
                <section className='pt-6 flex justify-between items-center'>
                    {/* Social Icons */}
                    <div className='flex items-center'>
                        <div className='colspan-1 text-white bg-blue-500 p-3 rounded-full'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 24 24'
                                fill='currentColor'
                                className='w-6 h-6'>
                                <path
                                    fillRule='evenodd'
                                    d='M11.622 1.602a.75.75 0 01.756 0l2.25 1.313a.75.75 0 01-.756 1.295L12 3.118 10.128 4.21a.75.75 0 11-.756-1.295l2.25-1.313zM5.898 5.81a.75.75 0 01-.27 1.025l-1.14.665 1.14.665a.75.75 0 11-.756 1.295L3.75 8.806v.944a.75.75 0 01-1.5 0V7.5a.75.75 0 01.372-.648l2.25-1.312a.75.75 0 011.026.27zm12.204 0a.75.75 0 011.026-.27l2.25 1.312a.75.75 0 01.372.648v2.25a.75.75 0 01-1.5 0v-.944l-1.122.654a.75.75 0 11-.756-1.295l1.14-.665-1.14-.665a.75.75 0 01-.27-1.025zm-9 5.25a.75.75 0 011.026-.27L12 11.882l1.872-1.092a.75.75 0 11.756 1.295l-1.878 1.096V15a.75.75 0 01-1.5 0v-1.82l-1.878-1.095a.75.75 0 01-.27-1.025zM3 13.5a.75.75 0 01.75.75v1.82l1.878 1.095a.75.75 0 11-.756 1.295l-2.25-1.312a.75.75 0 01-.372-.648v-2.25A.75.75 0 013 13.5zm18 0a.75.75 0 01.75.75v2.25a.75.75 0 01-.372.648l-2.25 1.312a.75.75 0 11-.756-1.295l1.878-1.096V14.25a.75.75 0 01.75-.75zm-9 5.25a.75.75 0 01.75.75v.944l1.122-.654a.75.75 0 11.756 1.295l-2.25 1.313a.75.75 0 01-.756 0l-2.25-1.313a.75.75 0 11.756-1.295l1.122.654V19.5a.75.75 0 01.75-.75z'
                                    clipRule='evenodd'
                                />
                            </svg>
                        </div>
                        <div className='colspan-1 text-white bg-red-500 p-3 rounded-full ml-4'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 24 24'
                                fill='currentColor'
                                className='w-6 h-6'>
                                <path
                                    fillRule='evenodd'
                                    d='M11.622 1.602a.75.75 0 01.756 0l2.25 1.313a.75.75 0 01-.756 1.295L12 3.118 10.128 4.21a.75.75 0 11-.756-1.295l2.25-1.313zM5.898 5.81a.75.75 0 01-.27 1.025l-1.14.665 1.14.665a.75.75 0 11-.756 1.295L3.75 8.806v.944a.75.75 0 01-1.5 0V7.5a.75.75 0 01.372-.648l2.25-1.312a.75.75 0 011.026.27zm12.204 0a.75.75 0 011.026-.27l2.25 1.312a.75.75 0 01.372.648v2.25a.75.75 0 01-1.5 0v-.944l-1.122.654a.75.75 0 11-.756-1.295l1.14-.665-1.14-.665a.75.75 0 01-.27-1.025zm-9 5.25a.75.75 0 011.026-.27L12 11.882l1.872-1.092a.75.75 0 11.756 1.295l-1.878 1.096V15a.75.75 0 01-1.5 0v-1.82l-1.878-1.095a.75.75 0 01-.27-1.025zM3 13.5a.75.75 0 01.75.75v1.82l1.878 1.095a.75.75 0 11-.756 1.295l-2.25-1.312a.75.75 0 01-.372-.648v-2.25A.75.75 0 013 13.5zm18 0a.75.75 0 01.75.75v2.25a.75.75 0 01-.372.648l-2.25 1.312a.75.75 0 11-.756-1.295l1.878-1.096V14.25a.75.75 0 01.75-.75zm-9 5.25a.75.75 0 01.75.75v.944l1.122-.654a.75.75 0 11.756 1.295l-2.25 1.313a.75.75 0 01-.756 0l-2.25-1.313a.75.75 0 11.756-1.295l1.122.654V19.5a.75.75 0 01.75-.75z'
                                    clipRule='evenodd'
                                />
                            </svg>
                        </div>
                        <div className='colspan-1 text-white bg-yellow-500 p-3 rounded-full ml-4'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 24 24'
                                fill='currentColor'
                                className='w-6 h-6'>
                                <path
                                    fillRule='evenodd'
                                    d='M11.622 1.602a.75.75 0 01.756 0l2.25 1.313a.75.75 0 01-.756 1.295L12 3.118 10.128 4.21a.75.75 0 11-.756-1.295l2.25-1.313zM5.898 5.81a.75.75 0 01-.27 1.025l-1.14.665 1.14.665a.75.75 0 11-.756 1.295L3.75 8.806v.944a.75.75 0 01-1.5 0V7.5a.75.75 0 01.372-.648l2.25-1.312a.75.75 0 011.026.27zm12.204 0a.75.75 0 011.026-.27l2.25 1.312a.75.75 0 01.372.648v2.25a.75.75 0 01-1.5 0v-.944l-1.122.654a.75.75 0 11-.756-1.295l1.14-.665-1.14-.665a.75.75 0 01-.27-1.025zm-9 5.25a.75.75 0 011.026-.27L12 11.882l1.872-1.092a.75.75 0 11.756 1.295l-1.878 1.096V15a.75.75 0 01-1.5 0v-1.82l-1.878-1.095a.75.75 0 01-.27-1.025zM3 13.5a.75.75 0 01.75.75v1.82l1.878 1.095a.75.75 0 11-.756 1.295l-2.25-1.312a.75.75 0 01-.372-.648v-2.25A.75.75 0 013 13.5zm18 0a.75.75 0 01.75.75v2.25a.75.75 0 01-.372.648l-2.25 1.312a.75.75 0 11-.756-1.295l1.878-1.096V14.25a.75.75 0 01.75-.75zm-9 5.25a.75.75 0 01.75.75v.944l1.122-.654a.75.75 0 11.756 1.295l-2.25 1.313a.75.75 0 01-.756 0l-2.25-1.313a.75.75 0 11.756-1.295l1.122.654V19.5a.75.75 0 01.75-.75z'
                                    clipRule='evenodd'
                                />
                            </svg>
                        </div>
                    </div>
                    <p>Made With Love By Prince Asante</p>
                </section>
            </footer>
        </div>
    );
}

export default App;
