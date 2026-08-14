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
            {name: "Flat Clearance", href: "/flat-clearance"},
            {name: "Garage Clearance", href: "/garage-clearance"},
            {name: "Furniture Removal & Disposal", href: "/furniture-removal"},
            {name: "Builders Waste Removal", href: "/builders-waste-removal"},
            {name: "Junk Collection", href: "/junk-collection"},
            {name: "Wait & Load", href: "/wait-and-load"},
        ]
        },
        {itemName: "Commercial Waste", href: "/",
        subItem:[
            {name: "Builders Waste Removal", href: "/commercial/builders-waste-removal"},
            {name: "Office Waste Clearance", href: "/commercial/office-waste-clearance"},
            {name: "Fly Tipping Clearance", href: "/commercial/fly-tipping-clearance"},
            {name: "Restaurant Clearance", href: "/commercial/restaurant-clearance"},
        ]
        },
        {itemName: "Rubbish Removal", href: "/",
        subItem:[
            {name: "Window Cleaning", href: "/window-cleaning"},
            {name: "Communal Area Cleaning", href: "/communal-area-cleaning"},
            {name: "Ground Maintainance", href: "/ground-maintainance"},
        ]
        },
        {itemName: "Rubbish Removal", href: "/",
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
    <nav className='order-first bg-[#077F7F] text-white lg:order-last lg:py-5 lg:text-current' aria-label='Main navigation'>
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
                className='relative border-b border-white/15 last:border-0 lg:border-0'>
                    {navItem.subItem ? (
                        <button
                        type='button'
                        aria-expanded={navOpen === index}
                        onClick={()=>setNavOpen(navOpen === index ? null : index)}
                        className='flex w-full flex-row items-center justify-between py-3 text-left font-semibold hover:text-gray-300 lg:w-auto lg:justify-start lg:py-0 lg:hover:text-white/50'>
                            {navItem.itemName}
                            <ChevronDown size={16}/>
                        </button>
                    ) : (
                        <Link
                        href={navItem.href}
                        onClick={() => setMenuOpen(false)}
                        className='flex w-full flex-row items-center justify-between py-3 text-left font-semibold hover:text-gray-300 lg:w-auto lg:justify-start lg:py-0 lg:hover:text-white/50'>
                            {navItem.itemName}
                        </Link>
                    )}
                    {navOpen === index && navItem.subItem && (
                        <div
                        className='pb-2 lg:absolute lg:-right-10 lg:top-10 lg:z-50 lg:bg-[#077F7F] lg:py-5'>
                            {navItem.subItem.map((subItem)=> (
                                <Link
                                key={subItem.href}
                                href={subItem.href}
                                onClick={() => {
                                   setNavOpen(null)
                                  setMenuOpen(false)
                                     }}
                                className='block cursor-pointer border-t border-white/15 px-4 py-2 lg:text-nowrap lg:border-b lg:border-t-0 lg:px-10'>
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
