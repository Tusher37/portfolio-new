import React from 'react';

const Contract = () => {
    return (
        <div id='contract' className='pt-12 pb-5 m-11'>
            <p className='text-5xl text-indigo-500 font-semibold text-center pb-5'>Contact Me</p>
                <div className='card-wrapper'>
                    <div className='card-content'>
                        <div className='p-5 flex justify-around '>
                            <form className='w-[800px]' action="">
                                <label className="input input-bordered flex items-center gap-2">
                                    Your Name :
                                    <input type="text" className="grow" placeholder="Enter your name" />
                                </label>
                                <br />
                                <label className="input input-bordered flex items-center gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16"
                                        fill="currentColor"
                                        className="h-4 w-4 opacity-70">
                                        <path
                                        d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                        <path
                                        d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                                    </svg>
                                    <input type="text" className="grow" placeholder="Email" />
                                </label>
                                <br />
                                <textarea className="textarea textarea-bordered w-[800px] h-[240px]" placeholder="Enter your message"></textarea>
                                <div className='flex justify-end mt-3'>
                                    <button className='btn-primary bg-blue-400 text-lg font-semibold px-4 py-1 rounded-lg justify-end'>Send</button>
                                </div>
                            </form>
                            <div className=''>
                                <div className='h-full w-[100px] rounded-xl bg-white text-black p-3 flex flex-col-reverse gap-3'>
                                    <div>
                                        <a href="https://www.instagram.com/tusher_deb.nath/" target="_blank" rel="noopener noreferrer"><img className='bg-white rounded-lg shadow-md hover:shadow-3xl hover:scale-105 transition duration-300' src="/src/assets/instagram-brands-solid.svg" alt="" /></a>
                                    </div>
                                    <div>
                                        <a href="https://www.facebook.com/tusher.nath.37/" target="_blank" rel="noopener noreferrer"><img className='bg-white rounded-lg shadow-md hover:shadow-3xl hover:scale-105 transition duration-300' src="/src/assets/facebook-brands-solid.svg" alt="" /></a>
                                    </div>
                                    <div>
                                        <a href="https://github.com/Tusher37" target="_blank"><img className='bg-white rounded-lg shadow-md hover:shadow-3xl hover:scale-105 transition duration-300' src="/src/assets/github-brands-solid.svg" alt="" /></a>
                                    </div>
                                    <div>
                                        <a href="https://www.linkedin.com/in/tusherdebnath" target="_blank" rel="noopener noreferrer"><img className='bg-white rounded-lg shadow-md hover:shadow-3xl hover:scale-105 transition duration-300' src="/src/assets/linkedin-brands-solid.svg" alt="" /></a>
                                    </div>
                                    <div>                           
                                        <a href='mailto:ttusherdebnath@gmail.com'><img className='bg-white rounded-lg shadow-md hover:shadow-3xl hover:scale-105 transition duration-300' src="/src/assets/envelope-regular.svg" alt="" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>           
        </div>
    );
};

export default Contract;