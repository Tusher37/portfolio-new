

const Soft_Skills = () => {
    return (
        <div className="h-[330px]">
            <h2 className="text-4xl font-semibold pb-2">Soft skills</h2>
            <hr class="border-t-2 border-white w-full" />
            {/* <p className="text-gray-700">This div has an animated border that changes color over time.</p> */}
            <div className="flex flex-col gap-5 pt-8">
                <div className="flex gap-5">
                    <img className="h[20px] w-[20px]" src="/src/assets/fast-forward_3585545.png" alt="" />
                    <p className="text-xl">Analytical Thinking</p>
                </div>
                <div className="flex gap-5">
                    <img className="h[20px] w-[20px]" src="/src/assets/fast-forward_3585545.png" alt="" />
                    <p className="text-xl">Communication</p>
                </div>
                <div className="flex gap-5">
                    <img className="h[20px] w-[20px]" src="/src/assets/fast-forward_3585545.png" alt="" />
                    <p className="text-xl">Organizing</p>
                </div>
            </div>
        </div>
    );
};

export default Soft_Skills;