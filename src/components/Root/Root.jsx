import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import About from "../About";
import Home from "../Home";
import Skills from "../Skills";
import Projects from "../Projects";
import Contract from "../Contract";

const Root = () => {
    return (
        <div className="bg-slate-950 text-white items-center justify-center">
            <Header></Header>
            <Home></Home>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Contract></Contract>
            {/* <div className='max-w-7xl mx-auto'>              
                <Outlet></Outlet>
            </div> */}
        </div>
    );
};

export default Root;