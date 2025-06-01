import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../../assets/assets'

const Sidebar = () => {
    const sidebarLinks = [
        { name: 'Dashboard', path: '/owner', icon: assets.dashboardIcon },
        { name: 'Add Room', path: '/owner/add-room', icon: assets.addIcon },
        { name: 'Rooms', path: '/owner/list-room', icon: assets.listIcon },
    ]

    return (
        <div className='md:w-64 w-16 border-r text-base border-gray-300 pt-16 flex flex-col transition-all duration-300 overflow-y-auto'>
            {sidebarLinks.map((item, index) => (
                <NavLink
                    to={item.path}
                    key={index}
                    className={({ isActive }) =>
                        `flex items-center gap-4 py-3 px-4 md:px-8 ${
                            isActive
                                ? 'border-r-4 md:border-r-[6px] bg-blue-600/10 border-blue-600 text-blue-600'
                                : 'hover:bg-gray-100/90 border-white text-gray-700'
                        }`
                    }
                >
                    <img src={item.icon} alt="" className="w-5 h-5" />
                    <span className='hidden md:inline'>{item.name}</span>
                </NavLink>
            ))}
        </div>
    )
}

export default Sidebar
