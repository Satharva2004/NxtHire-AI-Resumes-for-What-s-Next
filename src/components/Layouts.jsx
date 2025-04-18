import FancyBg from "./bg";
import Features from "./Features";
const Layout = ({ children }) => {
    return (
        <div className="relative">
            <FancyBg />
            <div className="relative z-10">
                {children}
                <Features />
            </div>
        </div>
    );
};

export default Layout;
