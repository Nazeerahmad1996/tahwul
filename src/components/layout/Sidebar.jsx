import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { navigationItems } from '@/data/dashboardData';
import SidebarToggleIcon from '@/components/icons/SidebarToggleIcon';
import DashboardIcon from '@/components/icons/DashboardIcon';
import PerspectivesIcon from '@/components/icons/PerspectivesIcon';
import TasksIcon from '@/components/icons/TasksIcon';
import DocumentsIcon from '@/components/icons/DocumentsIcon';
import ReportsIcon from '@/components/icons/ReportsIcon';
import UsersIcon from '@/components/icons/UsersIcon';
import logoImg from '@/assets/images/logo.png';

const iconMap = {
    LayoutDashboard: DashboardIcon,
    Eye: PerspectivesIcon,
    CheckSquare: TasksIcon,
    FileText: DocumentsIcon,
    BarChart3: ReportsIcon,
    Users: UsersIcon,
};

export default function Sidebar({ isCollapsed, onToggle, isMobileOpen, onMobileClose }) {
    const location = useLocation();
    const desktopWidth = isCollapsed ? '80px' : '254px';

    return (
        <>
            {isMobileOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={onMobileClose}
                />
            )}

            <aside
                className={`
                    bg-[#1D3557] min-h-screen flex flex-col font-cairo z-50
                    fixed inset-y-0 left-0 lg:relative lg:translate-x-0
                    transition-all duration-300 cubic-bezier(0.4, 0, 0.2, 1)
                    ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
                `}
                style={{
                    width: typeof window !== 'undefined' && window.innerWidth >= 1024 ? desktopWidth : '254px',
                }}
            >
                <button
                    onClick={onToggle}
                    className="absolute top-[14px] -right-4 w-8 h-8 bg-white rounded-full shadow-[0px_0px_2px_rgba(0,0,0,0.1)] hidden lg:flex items-center justify-center z-10 hover:shadow-md transition-shadow cursor-pointer"
                >
                    <SidebarToggleIcon
                        className={`transition-transform duration-300 ${isCollapsed ? 'rotate-180' : ''}`}
                    />
                </button>

                <div className={`px-6 py-5 ${isCollapsed ? 'lg:justify-center lg:px-2' : ''} flex justify-between items-center lg:block`}>
                    {isCollapsed ? (
                        <div className="hidden lg:block">
                            <img src={logoImg} alt="TAHWUL" className="h-8 w-8 object-contain" />
                        </div>
                    ) : (
                        <img src={logoImg} alt="TAHWUL" className="h-10" />
                    )}

                    <button
                        onClick={onMobileClose}
                        className="lg:hidden text-white/70 hover:text-white"
                    >
                        <SidebarToggleIcon className="rotate-180" />
                    </button>
                </div>

                <nav className={`flex-1 pt-2 ${isCollapsed ? 'lg:px-3' : 'px-[23px]'}`}>
                    <ul className="space-y-1">
                        {navigationItems.map((item, index) => {
                            const Icon = iconMap[item.icon];
                            const isActive = location.pathname === item.path;

                            return (
                                <li key={index}>
                                    <Link
                                        to={item.path}
                                        title={isCollapsed ? item.label : undefined}
                                        className={`flex items-center gap-[10px] px-[10px] py-[10px] text-[14px] font-medium leading-[16px] capitalize transition-colors rounded-lg ${isActive
                                            ? 'bg-[rgba(152,174,192,0.1)] text-white'
                                            : 'text-[#7B9FC3] hover:bg-[rgba(152,174,192,0.1)] hover:text-white'
                                            } ${isCollapsed ? 'lg:justify-center' : ''}`}
                                    >
                                        <Icon size={16} strokeWidth={1.5} />
                                        <span className={isCollapsed ? 'lg:hidden' : ''}>{item.label}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </aside>
        </>
    );
}

Sidebar.propTypes = {
    isCollapsed: PropTypes.bool.isRequired,
    onToggle: PropTypes.func.isRequired,
    isMobileOpen: PropTypes.bool,
    onMobileClose: PropTypes.func,
};
