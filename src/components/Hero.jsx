import logo from "../assets/logo.png";

const FancyGrid = () => {
  return (
    <div className=" bg-[radial-gradient(circle_500px_at_100%_200px,#d5c5ff,transparent)]">
      <header className="py-4 md:py-6">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex-shrink-0">
              <a href="#" className="flex rounded outline-none focus:ring-1 focus:ring-sky-50 focus:ring-offset-1">
                <img className="w-auto h-10 filter invert brightness-100" src={logo} alt="NxtHire Logo" />
              </a>
            </div>

            <div className="hidden lg:flex lg:ml-16 lg:items-center lg:justify-center lg:space-x-10 xl:space-x-16">
              <a href="#" className="text-base font-medium text-gray-900 hover:text-opacity-50 font-pj"> Features </a>
              <a href="#" className="text-base font-medium text-gray-900 hover:text-opacity-50 font-pj"> Pricing </a>
              <a href="#" className="text-base font-medium text-gray-900 hover:text-opacity-50 font-pj"> Automation </a>
            </div>

            <div className="hidden lg:ml-auto lg:flex lg:items-center lg:space-x-10">
              <a href="#" className="text-base font-medium text-gray-900 hover:text-opacity-50 font-pj"> Contact Us </a>
              <a href="https://github.com/Satharva2004" className="inline-flex items-center px-6 py-3 text-base font-bold text-white bg-gray-900 rounded-xl hover:bg-gray-600 font-pj">
                Github
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="pt-40 pb-40">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="px-6 text-lg text-gray-600 font-inter">NxtHire - AI Resumes for What’s Next.</h1>
            <p className="mt-5 text-4xl font-bold leading-tight text-gray-900 lg:text-5xl font-pj">
              Supercharge Your Resume with AI with
              <span className="relative inline-flex sm:inline">
                <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0"></span>
                <span className="relative"> for What’s Next </span>
              </span>
            </p>

            <div className="mt-9 sm:flex sm:items-center sm:justify-center sm:space-x-5">
              <a href="#" className="inline-flex items-center justify-center px-8 py-3 text-lg font-bold text-white bg-gray-900 rounded-xl hover:bg-gray-600 font-pj">
                Get more customers
              </a>
              <a href="#" className="inline-flex items-center justify-center px-6 py-3 mt-4 text-lg font-bold text-gray-900 border-2 border-gray-400 rounded-xl hover:bg-gray-900 hover:text-white sm:mt-0 font-pj">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 18 18" fill="none" stroke="currentColor">
                  <path d="M8.18 13.4261C6.86 14.3918 5 13.448 5 11.8113V5.43865C5 3.80198 6.86 2.85821 8.18 3.82387L12.54 7.01022C13.63 7.80916 13.63 9.44084 12.54 10.2398L8.18 13.4261Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Watch free demo
              </a>
            </div>

            <p className="mt-8 text-base text-gray-500 font-inter">
              Get personalized career timelines, gamified achievements, ATS optimization, and predictive job matches all in one place.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FancyGrid;
