import Link from 'next/link'
import React from 'react'

type Props = {
    type: 'default' | 'active' | 'danger',
    href: string,
    children: React.ReactNode
}

const NavButton = ({ type, href, children }: Props) => {
    let className = "navButton h-full uppercase font-semibold px-4 text-[14px] text-black cursor-pointer rounded-2xl border border-gray2 hover:text-green transition-all hover:border-green justify-center flex"
    if (type === 'active') {
        className = 'bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded'
    }
    
    return (
        <Link className={className} href={href}>
            <div className="navButtonLink text-center">
            {/* <div className="navButtonLink rotate-90 whitespace-nowrap bg-white/50 items-center h-fit"> */}
            {children}
            </div>
        </Link>
    )
}

export default NavButton;
