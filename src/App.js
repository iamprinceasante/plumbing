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
        <div className='App font-display'>
            {/* Header Section */}

            <header>
                <div
                    className={`header max-w-[1440px] w-full flex justify-between items-center px-24 py-2 z-50 transition-colors duration-500 ${
                        scroll
                            ? 'bg-opacity-80 bg-white backdrop-blur'
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
            {/* Header Section Ends*/}

            {/* Main Section */}
            <main className='max-w-[1440px] w-full px-24'>
                {/* Hero Section */}
                <section className='hero'>
                    {/* Hero Section 1*/}
                    <div className='hero1 max-h-[300px] h-full grid grid-cols-2 gap-9'>
                        <div className='col-span-1 z-10 -ml-24'>
                            <img
                                src={pic}
                                alt='Plumbing work'
                                className='h-[450px] w-full'
                            />
                        </div>
                        <div className='col-span-1 pt-12 pb-6'>
                            <h1 className='text-6xl font-bold mt-8'>
                                We fix all your plumbing problems
                            </h1>
                        </div>
                    </div>
                    {/* Hero Section 1 Ends*/}

                    {/* Hero Section 2*/}
                    <div className='hero2 bg-slate-300 bg-opacity-20 grid grid-cols-2 gap-9 -mx-24 px-24'>
                        <div className='col-span-1 mt-32 py-20 grid grid-cols-2 gap-9'>
                            <div className='col-span-1'>
                                <p className='text-primary font-bold text-6xl'>
                                    1,500+
                                </p>
                                <p className='capitalize max-w-[184px] text-xl mt-2'>
                                    Clients satisfaction with our Services
                                </p>
                            </div>
                            <div className='col-span-1'>
                                <p className='text-primary font-bold text-6xl'>
                                    2,300+
                                </p>
                                <p className='capitalize max-w-[184px] text-xl mt-2'>
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
                            <div className='img ml-24 rounded-t'>
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
                <section className='py-20'>
                    <h2 className='text-center text-2xl font-bold text-primary my-3'>
                        Plumbing Service
                    </h2>
                    <h3 className='text-center text-4xl font-bold mt-2 mb-24'>
                        Our Plumbing Service
                    </h3>
                    <div className='grid grid-cols-3 gap-12 place-items-center'>
                        <div className='flex flex-col justify-center items-center relative shadow-2xl p-9 rounded bg-slate-50'>
                            <div className='icon shadow-md text-white bg-blue-500 p-5 rounded-full absolute -top-10'>
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
                            <div className='flex justify-center items-center mt-4 animate-pulse'>
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
                        <div className='flex flex-col justify-center items-center relative shadow-2xl p-9 rounded bg-slate-50'>
                            <div className='icon shadow-md text-white bg-blue-500 p-5 rounded-full absolute -top-10'>
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
            </main>
        </div>
    );
}

export default App;
