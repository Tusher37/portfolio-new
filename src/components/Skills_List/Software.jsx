
const Software = () => {
    return (
        <div className="h-[330px]">
            <h2 className="text-4xl font-semibold pb-2">Software</h2>
            <hr class="border-t-2 border-white w-full" />
            <div className="flex flex-col gap-5 pt-8">
                <div className="flex gap-5">
                    <img className="h[20px] w-[20px]" src="/src/assets/fast-forward_3585545.png" alt="" />
                    <p className="text-xl">Cisco Packet Tracer</p>
                </div>
                <div className="flex gap-5">
                    <img className="h[20px] w-[20px]" src="/src/assets/fast-forward_3585545.png" alt="" />
                    <p className="text-xl">PSIM</p>
                </div>
                <div className="flex gap-5">
                    <img className="h[20px] w-[20px]" src="/src/assets/fast-forward_3585545.png" alt="" />
                    <p className="text-xl">Visual Studio Code</p>
                </div>
                <div className="flex gap-5">
                    <img className="h[20px] w-[20px]" src="/src/assets/fast-forward_3585545.png" alt="" />
                    <p className="text-xl">Code::Blocks</p>
                </div>
            </div>
        </div>
    );
};

export default Software;