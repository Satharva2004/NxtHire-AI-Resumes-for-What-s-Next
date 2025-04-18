const NavBar = () => {
    return (
        <header className="py-4 md:py-6" x-data="{expanded: false}">
            <div className="container px-4 mx-auto sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <div className="flex-shrink-0">
                        <a href="#" title="" className="flex rounded outline-none focus:ring-1 focus:ring-sky-50 focus:ring-offset-1">
                            <img className="w-auto h-10 filter invert brightness-100" src={logo} alt="NxtHire Logo" />

                        </a>
                    </div>
                    <div className="hidden lg:flex lg:ml-16 lg:items-center lg:justify-center lg:space-x-10 xl:space-x-16">
                        <a href="#" title="" className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1  focus:ring-sky-50 focus:ring-offset-2"> Features </a>

                        <a href="#" title="" className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1  focus:ring-sky-50 focus:ring-offset-2"> Pricing </a>

                        <a href="#" title="" className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1  focus:ring-sky-50 focus:ring-offset-2"> Automation </a>
                    </div>

                    <div className="hidden lg:ml-auto lg:flex lg:items-center lg:space-x-10">
                        <a href="#" title="" className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50"> Contact Us </a>

                        <a
                            href="https://github.com/Satharva2004"
                            title=""
                            className="inline-flex items-center justify-center px-6 py-3 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                            role="button"
                        >
                            Github
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default NavBar;