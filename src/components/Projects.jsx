

const Projects = () => {
    return (
        <section id="project">
        <div>
            <h1 className="text-4xl text-indigo-500 font-semibold text-center m-12 pt-11">Some Of My Recent Projects</h1>
            <div className="flex gap-5 justify-center">
                <div className="card-wrapper w-[410px] text-center justify-center">
                    <div className="card-content h-[300px] w-[400px]">
                        <p className="text-2xl font-semibold">Book Store</p>
                        <p className="text-sm">(React, Tailwind CSS)</p>
                        <div className="p-5">
                            <div className="h-[200px]">
                                <p className="text-lg font-extralight text-justify">In this dummy app I have used React JS with Tailwind CSS to create a user friendly website. Also implement the locatstorage part to save the readed book list and show it in the graph</p>
                            </div>
                            <div>
                                <a href="https://github.com/Tusher37/online-book" target="_blank" rel="noopener noreferrer"><u>Source Code</u> </a>
                                <br />
                                <a href="https://bookvibe-24.netlify.app/" target="_blank" rel="noopener noreferrer"><u>Deployed Link</u> </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-wrapper w-[410px] text-center justify-center">
                    <div className="card-content h-[300px] w-[400px]">
                        <p className="text-2xl font-semibold">Online Bus Ticket Booking</p>
                        <p className="text-sm">(JavaScript, Tailwind CSS)</p>
                        <div className="p-5">
                            <div className="h-[200px]">
                                <p className="text-lg font-extralight text-justify">In this dummy app I have used React JS with Tailwind CSS to create a user friendly website. Tailwind CSS is used for integrate the frontend part and React is used to handle the state management. Also implement the locatstorage part to save the readed book list and show it in the graph</p>
                            </div>
                            <div>
                                <a href="https://github.com/Tusher37/b9a5" target="_blank" rel="noopener noreferrer"><u>Source Code</u> </a>
                                <br />
                                <a href="https://b9a5.netlify.app/" target="_blank" rel="noopener noreferrer"><u>Deployed Link</u> </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-wrapper w-[410px] text-center justify-center">
                    <div className="card-content h-[300px] w-[400px]">
                        <p className="text-2xl font-semibold">Online Kitchen Class Menu</p>
                        <p className="text-sm">(React, Tailwind CSS)</p>
                        <div className="p-5">
                            <div className="h-[200px]">
                                <p className="text-lg font-extralight text-justify">In this dummy app I have used React JS with Tailwind CSS to create a user friendly website. Tailwind CSS is used for integrate the frontend part and React is used to handle the state management.</p>
                            </div>
                            <div>
                                <a href="https://github.com/Tusher37/Online-Chefs-table-menu" target="_blank" rel="noopener noreferrer"><u>Source Code</u> </a>
                                <br />
                                <a href="https://tusher-b9a7-2024.netlify.app/" target="_blank" rel="noopener noreferrer"><u>Deployed Link</u> </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>

    );
};

export default Projects;