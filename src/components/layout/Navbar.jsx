"use client"
import React, { useState } from 'react'
import Link from 'next/link';
import { House, ChevronDown, Menu } from 'lucide-react';

export default function Navbar () {
    const[navOpen, setNavOpen]= useState(null)
    const[menuOpen, setMenuOpen]= useState(false)
    const navItems=[
        {itemName: "Rubbish Removal", href: "/",
        subItem:[
            {name: "Prices", href: "/#prices"},
            {name: "House Clearance", href: "/houseClearance"},
            {name: "Garden Clearance", href: "/gardenClearance"},
            {name: "Flat Clearance", href: "/flatClearance"},
            {name: "Garage Clearance", href: "/garageClearance"},
            {name: "Furniture Removal & Disposal", href: "/furnitureRemoval"},
            {name: "Builders Waste Removal", href: "/buildersWasteRemoval"},
            {name: "Junk Collection", href: "/junkCollection"},
            {name: "Wait & Load", href: "/waitAndLoad"},
        ]
        },
        {itemName: "Commercial Waste", href: "/",
        subItem:[
            {name: "Builders Waste Removal", href: "/buildersWasteRemoval"},
            {name: "Office Waste Clearance", href: "/officeWasteClearance"},
            {name: "Fly Tipping Clearance", href: "/flyTippingClearance"},
            {name: "Restaurant Clearance", href: "/restaurantClearance"},
        ]
        },
        {itemName: "Cleaning", href: "/",
        subItem:[
            {name: "Window Cleaning", href: "/windowCleaning"},
            {name: "Communal Area Cleaning", href: "/communalAreaCleaning"},
            {name: "Ground Maintainance", href: "/groundMaintainance"},
        ]
        },
        {itemName: "Garden Services", href: "/",
        subItem:[
            {name: "Lawn Mowing", href: "/lawnMowing"},
            {name: "Hedge Cutting", href: "/hedgeCutting"},
        ]
        },
        {itemName: "Areas Covered", href: "/areasCovered"
        },
        {itemName: "FAQ", href: "/faq"
        },
        {itemName: "Contact Us", href: "/contactUs"
        },
    ]
  return (
    <nav className='order-first bg-[#11224D] text-white lg:order-last lg:py-2 lg:text-current' aria-label='Main navigation'>
        <div className='container mx-auto'>
            <button
                type='button'
                aria-expanded={menuOpen}
                aria-controls='main-menu'
                onClick={() => setMenuOpen(!menuOpen)}
                className='flex w-full items-center gap-2 px-4 py-2 text-xl font-normal uppercase sm:px-6 lg:hidden'
            >
                <Menu aria-hidden='true' size={32} strokeWidth={3} />
                <span>Menu</span>
            </button>
            <div
                id='main-menu'
                className={`${menuOpen ? 'flex' : 'hidden'} flex-col border-t border-white/20 px-4 pb-3 sm:px-6 lg:flex lg:flex-row lg:items-center lg:justify-center lg:gap-7 lg:border-0 lg:px-4 lg:pb-0 xl:gap-10`}
            >
            <Link href='/' aria-label='Home' className='hidden shrink-0 hover:text-white/50 lg:block'><House /></Link>
            {navItems.map((navItem, index)=>(
                <div
                key={`${navItem.itemName}-${index}`}
                className='group relative border-b border-white/15 last:border-0 lg:border-0'>
                    {navItem.subItem ? (
                        <button
                        type='button'
                        aria-expanded={navOpen === index}
                        onClick={()=>setNavOpen(navOpen === index ? null : index)}
                        className='flex w-full flex-row items-center justify-between py-3 text-left font-semibold hover:text-gray-300 lg:w-auto lg:justify-start lg:py-0 lg:hover:text-white/50 hover:cursor-pointer'>
                            {navItem.itemName}
                            <ChevronDown
                            aria-hidden='true'
                            size={16}
                            className='ml-1 transition-transform duration-200 lg:group-hover:rotate-180 lg:group-focus-within:rotate-180'/>
                        </button>
                    ) : (
                        <Link
                        href={navItem.href}
                        onClick={() => setMenuOpen(false)}
                        className='flex w-full flex-row items-center justify-between py-3 text-left font-semibold hover:text-gray-300 lg:w-auto lg:justify-start lg:py-0 lg:hover:text-white/50'>
                            {navItem.itemName}
                        </Link>
                    )}
                    {navItem.subItem && (
                        <div
                        className={`${navOpen === index ? 'block' : 'hidden'} pb-2 lg:absolute lg:-right-10 lg:top-10 lg:z-50 lg:hidden lg:bg-[#11224D] lg:py-5 lg:shadow-2xl lg:shadow-black/25 lg:group-hover:block lg:group-focus-within:block`}>
                            {navItem.subItem.map((subItem)=> (
                                <Link
                                key={subItem.href}
                                href={subItem.href}
                                onClick={() => {
                                   setNavOpen(null)
                                  setMenuOpen(false)
                                     }}
                                className='block cursor-pointer border-t border-white/15 px-4 py-2 transition-colors duration-150 lg:text-nowrap lg:border-b lg:border-t-0 lg:px-10 lg:hover:bg-white/15 lg:hover:text-white lg:focus-visible:bg-white/15 lg:focus-visible:outline-none'>
                                    {subItem.name}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            ))}
            </div>
        </div>
    </nav>
  )
}
