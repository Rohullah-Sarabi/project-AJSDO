function ContextContainer() {
    return (
        <>
            <div className="flex flex-col justify-center gap-5">
                <div className="flex flex-col justify-center items-center gap-5">
                    <h1 className="text-base sm:text-2xl font-medium sm:font-semibold text-center">VISION STATEMENT</h1>
                    <p className="text-sm sm:text-lg text-[#3c3744]">Providing Social Welfare</p>
                </div>
                <div className="flex justify-center items-center">
                    <hr className="w-1/12 h-1 bg-blue-400 rounded-md" />
                </div>
            </div>
            <div className="flex flex-col justify-center gap-5 sm:p-5">
                <h1 className="text-base sm:text-2xl text-center font-medium sm:font-semibold ">MISSION STATEMENT</h1>
                <div className="flex flex-col gap-1">
                    <p className="text-base sm:text-lg text-[#3c3744] text-justify">
                        Our mission is to provide equitable access to education, healthcare, and social services, fostering empowerment,
                         improving well-being, and creating sustainable changes for underprivileged individuals and communities, with a particular focus on women.
                         Through collaboration, innovation, and advocacy, we strive to break the cycle of poverty, promote social inclusion, and enable women to reach their full potential. By addressing gender disparities, promoting gender equality, and championing women's rights, we aim to empower women, create opportunities for their advancement, and contribute to building a more just and inclusive society.

                    </p>
                </div>
                <div className="flex justify-center items-center">
                    <hr className="w-1/12 h-1 bg-blue-400 rounded-md" />
                </div>
            </div>
        </>
    )
}

export default ContextContainer;