import handWave from '../assets/waving_hand.gif';
import myPic from '../assets/IMG-preview.png';
import techImg from '../assets/tech-images.png';
import webImg from '../assets/Web-develpoment.gif';
import resumeDown from '../assets/down.png';
import location from '../assets/location.gif';
import bdFlag from '../assets/bangladesh_flag_lottie_json_animation_800.gif';
const Home = () => {
    // const u = `https://ibb.co.com/dL2yYQg`;
    return (
        
            <div id="home" className='m-6 grid grid-cols-1 gap-1 h-[500px] w-[90vw] items-center justify-center bg-slate-950 text-white'>
                <div className="flex justify-between pt-10">
                    <div className="card-wrapper h-[250px] w-[950px]">
                        <div className="card-content flex gap-10 pl-4 pr-4  items-center justify-around text-xs">
                            <div className="w-[500px]">
                                <div className="flex">
                                    <p className="text-5xl text-red-400 font-semibold pb-1">Hi...</p>
                                    <img src={handWave} alt="" />
                                </div>
                                <p className="text-4xl text-end text-indigo-400 font-semibold pb-1">I'm Tusher Debnath</p>
                            </div>
                            <div className="">
                                <div className="flex gap-1 pb-5">
                                    <p className="text-3xl text-amber-100 pt-5">|  Web Developer </p>
                                    <img className="h-[100px] w-[100px]" src={webImg} alt="" />
                                </div>
                                {/* <div  className="flex">
                                    <p className="text-3xl text-amber-100 pb-6">| Researcher</p>
                                    <img className="h-[60px] w-[60px]" src="/src/assets/researcher.gif" alt="" />
                                </div> */}
                                <div className="flex gap-4">
                                    <p className="text-3xl text-amber-100 pt-5">| Tech Enthusiast</p>
                                    <img className="h-[80px] w-[90px]" src={techImg} alt="" />
                                </div>
                                
                                
                                
                            </div>                   
                        </div>
                    </div> 
                    <div className="flex space-x-4 gap-8  h-[250px]">
                        <div className="card-wrapper h-[250px] rounded-xl">
                            <img className="card-content h-[250px] w-[270px] rounded-xl" src={myPic} alt="" />
                        </div>   
                    </div> 
                </div>
                <div className="flex flex-row gap-3 justify-between">
                    <div className="flex space-x-7 items-center h-[150px]">
                            <a 
                                href="/Tusher Debnath.pdf"
                                download='Tusher Debnath.pdf'
                            >
                                    <button className="flex gap-2 px-4 py-2 h-10 border-2 border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-red-500 hover:text-white transform hover:scale-105">
                                <p>Resume</p>
                                <img className="bg-emerald-50 h-[25px]" src={resumeDown} alt="" /> 
                            </button>
                            </a>
                            <a href="#project">
                                <button class="px-4 py-2 h-10 border-2 border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-blue-500 hover:text-white">
                                View My Work
                            </button>
                            </a>
                            <a href="#contract">
                                <button class="px-4 py-2 h-10 border-2 border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-blue-500 hover:text-white">
                                Contact Me
                            </button>
                            </a>
                    </div>                    
                    <div className="card-wrapper h-[150px] w-[600px]">
                        <div className="card-content flex items-center justify-between text-xs">
                            <img className="h-[150px] w-[200px]" src={location} alt="" />
                            {/* <p className="text-2xl pl-5">Baised in:</p> */}
                            <div className="w-[400px] ml-5">
                                <p className="text-2xl">Baised in:</p>
                                <div className="flex flex-row gap-1">
                                    <p className="text-2xl pt-5">Dhaka, Bangladesh</p>
                                    <img className="h-[80px] w-[80px] ml-5 rounded-full" src={bdFlag} alt="" />
                                </div>
                            </div>

                        </div>
                    </div> 
                </div>        
            </div>
        
    );
};

export default Home;