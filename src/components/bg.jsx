const FancyBg = () => {
    return (
        <div className="fixed inset-0 -z-10 w-full min-h-screen bg-white bg-[linear-gradient(to_right,#f0f0f0_0.7px,transparent_0.5px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
            <div className="bg-[radial-gradient(circle_500px_at_100%_200px,#d5c5ff,transparent)]"></div>
        </div>
    );
};

export default FancyBg;

