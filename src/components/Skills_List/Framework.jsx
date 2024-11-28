

const Framework = () => {
    return (
        <div className="h-[330px]">
            <h2 className="text-4xl font-semibold pb-2">Framework</h2>
            <hr class="border-t-2 border-white w-full" />
            <div className="flex flex-col gap-5 pt-8">
                <div className="flex gap-5">
                    <img className="h[20px] w-[20px]" src="/src/assets/fast-forward_3585545.png" alt="" />
                    <p className="text-xl">React</p>
                </div>
                <div className="flex gap-5">
                    <img className="h[20px] w-[20px]" src="/src/assets/fast-forward_3585545.png" alt="" />
                    <p className="text-xl">Vue</p>
                </div>
                <div className="flex gap-5">
                    <img className="h[20px] w-[20px]" src="/src/assets/fast-forward_3585545.png" alt="" />
                    <p className="text-xl">Tailwind CSS</p>
                </div>
                <div className="flex gap-5">
                    <img className="h[20px] w-[20px]" src="/src/assets/fast-forward_3585545.png" alt="" />
                    <p className="text-xl">Bootstrap</p>
                </div>
            </div>
        </div>
    );
};

export default Framework;