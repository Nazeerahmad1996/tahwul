import PropTypes from 'prop-types';
import { Search, Bell, ChevronDown, Menu } from 'lucide-react';
import profileImg from '../../assets/images/profile.jpg';

export default function Header({ onMenuClick }) {
    return (
        <header className="h-[60px] bg-white border-b border-[#E0E8ED] flex items-center justify-between px-6">
            <div className="flex items-center gap-4 ml-0 lg:ml-6">
                <button
                    onClick={onMenuClick}
                    className="p-2 -ml-2 hover:bg-gray-100 rounded-lg lg:hidden text-[#8597A8]"
                >
                    <Menu size={20} />
                </button>
                <div className="relative w-full lg:w-[318px] h-[34px] hidden sm:block">
                    <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8597A8]" strokeWidth={1.5} />
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full h-full bg-[#F5F8FA] border border-[#E0E8ED] rounded-lg pl-10 pr-4 text-[14px] font-normal text-gray-700 placeholder:text-[#8597A8] placeholder:capitalize font-cairo focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>
            </div>

            <div className="flex items-center gap-4">
                <button className="relative text-[#8597A8] hover:text-gray-700">
                    <Bell size={16} strokeWidth={1.5} />
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
                <div className="h-[32px] bg-[#F9FAFA] rounded-[30px] flex items-center gap-2 px-2 cursor-pointer">
                    <img src={profileImg} alt="Mohamed" className="w-6 h-6 rounded-full object-cover" />
                    <span className="text-sm font-medium text-gray-700 font-cairo">Mohamed</span>
                    <ChevronDown size={14} className="text-gray-500" />
                </div>
            </div>
        </header>
    );
}

Header.propTypes = {
    onMenuClick: PropTypes.func,
};
