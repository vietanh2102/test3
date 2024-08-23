import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="fixed top-0 z-[999] bg-[#111111] flex h-[80px] text-white items-center justify-around w-full">
            <div className="text-2xl w-[226px]">What Happened</div>
            <div className="md:w-2/3 md:block lg:w-1/2 lg:grow-0 hidden">
                <ul className="flex w-full justify-around uppercase text-[14px] leading-[2.14]">
                    <li>Introduction</li>
                    <li>Solution</li>
                    <li>Rate plan</li>
                    <li className="bg-[#ccc8c6] w-[1px]"></li>
                    <Link to={"/login"}><li>login</li></Link>
                    <li>Apply for free use</li>
                </ul>
            </div>
        </div>
    );
}

export default Header;