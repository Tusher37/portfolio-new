import { NavLink } from "react-router-dom";

const Header = () => {

    const links = <>
        <li><a href='#home'>Intro</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#skill'>Skills</a></li>
        <li><a href='#project'>Projects</a></li>
        <li><a href='#contract'>Contact</a></li>
    </>

    return (
        <div className="fixed top-0 left-0 w-full flex justify-center gap-6 shadow-lg z-50  bg-slate-950 text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Tusher</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end bg-transparent">
                
            </div>
        </div>
    );
};

export default Header;