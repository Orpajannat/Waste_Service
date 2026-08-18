"use client"
import React, { useState } from 'react'
import Link from 'next/link';
import { ChevronDown, ChevronRight, Menu } from 'lucide-react';

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
    <nav className='order-1 w-auto shrink-0 bg-transparent text-[#11224D] lg:order-2 lg:min-w-0 lg:flex-1 lg:py-2' aria-label='Main navigation'>
        <div>
            <button
                type='button'
                aria-expanded={menuOpen}
                aria-controls='main-menu'
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label='Toggle navigation menu'
                className='flex items-center justify-center rounded-md p-1.5 text-[#11224D] transition-colors hover:bg-[#EAF2FB] lg:hidden'
            >
                <Menu aria-hidden='true' size={28} strokeWidth={3} />
            </button>
            <div
                id='main-menu'
                className={`${menuOpen ? 'flex' : 'hidden'} absolute inset-x-0 top-full mt-2 max-h-[calc(100vh-6rem)] flex-col overflow-y-auto rounded-2xl border border-[#11224D]/10 bg-white/95 px-4 pb-3 shadow-xl backdrop-blur-md sm:px-6 lg:static lg:mt-0 lg:flex lg:max-h-none lg:flex-row lg:items-center lg:justify-center lg:gap-1 lg:overflow-visible lg:rounded-none lg:border-0 lg:bg-transparent lg:px-1 lg:pb-0 lg:shadow-none lg:backdrop-blur-none xl:gap-5 xl:px-2`}
            >
            {navItems.map((navItem, index)=>(
                <div
                key={`${navItem.itemName}-${index}`}
                className={`group relative w-full border-b border-[#11224D]/10 last:border-0 lg:w-auto lg:border-0 ${(index === 1 || index === 2) ? 'lg:hidden' : ''}`}>
                    {navItem.subItem ? (
                        <button
                        type='button'
                        aria-expanded={navOpen === index}
                        onClick={()=>setNavOpen(navOpen === index ? null : index)}
                        className='flex w-full cursor-pointer flex-row items-center justify-between py-3 text-left font-semibold text-[#11224D] transition-colors hover:text-[#1A68A3] lg:w-auto lg:justify-center lg:whitespace-nowrap lg:py-0 lg:text-center lg:text-base'>
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
                        className='flex w-full flex-row items-center justify-start py-3 text-left font-semibold text-[#11224D] transition-colors hover:text-[#1A68A3] lg:w-auto lg:justify-center lg:whitespace-nowrap lg:py-0 lg:text-center lg:text-base'>
                            {navItem.itemName}
                        </Link>
                    )}
                    {navItem.subItem && (
                        <div
                        className={`${navOpen === index ? 'block' : 'hidden'} pb-2 text-[#11224D] lg:absolute lg:-right-10 lg:top-10 lg:z-50 lg:hidden lg:rounded-md lg:bg-white/90 lg:py-3 lg:shadow-2xl lg:shadow-black/20 lg:group-hover:block lg:group-focus-within:block`}>
                            {navItem.subItem.map((subItem)=> (
                                <Link
                                key={subItem.href}
                                href={subItem.href}
                                onClick={() => {
                                   setNavOpen(null)
                                  setMenuOpen(false)
                                     }}
                                className='block cursor-pointer border-t border-[#11224D]/10 px-4 py-2 text-left text-[#11224D] transition-colors duration-150 hover:bg-[#EAF2FB] hover:text-[#11224D] focus-visible:bg-[#EAF2FB] focus-visible:text-[#11224D] focus-visible:outline-none lg:text-nowrap lg:border-b lg:border-t-0 lg:px-10 lg:text-left'>
                                    {subItem.name}
                                </Link>
                            ))}
                            {index === 0 && navItems.slice(1, 3).map((nestedItem) => (
                                <div key={nestedItem.itemName} className='group/nested relative hidden lg:block'>
                                    <button
                                      type='button'
                                      className='flex w-full cursor-pointer items-center justify-between gap-6 border-b border-[#11224D]/10 px-10 py-2 text-nowrap text-[#11224D] transition-colors duration-150 hover:bg-[#EAF2FB] focus-visible:bg-[#EAF2FB] focus-visible:outline-none'
                                    >
                                      <span>{nestedItem.itemName}</span>
                                      <ChevronRight aria-hidden='true' className='size-4 transition-transform group-hover/nested:translate-x-1' />
                                    </button>

                                    <div className='absolute left-full top-0 z-50 hidden min-w-max rounded-md bg-white/95 py-3 shadow-2xl shadow-black/20 backdrop-blur-md group-hover/nested:block group-focus-within/nested:block'>
                                      {nestedItem.subItem.map((nestedSubItem) => (
                                        <Link
                                          key={nestedSubItem.href}
                                          href={nestedSubItem.href}
                                          className='block border-b border-[#11224D]/10 px-10 py-2 text-center text-nowrap text-[#11224D] transition-colors duration-150 last:border-b-0 hover:bg-[#EAF2FB] focus-visible:bg-[#EAF2FB] focus-visible:outline-none'
                                        >
                                          {nestedSubItem.name}
                                        </Link>
                                      ))}
                                    </div>
                                </div>
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
