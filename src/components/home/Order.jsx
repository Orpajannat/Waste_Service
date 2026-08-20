'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { ChevronRight, Recycle, ArrowUpRight } from 'lucide-react'
import ManVanBooking from './ManVanBooking'

export default function Order() {
    const Items = [
        {
            id: 'man-van',
            image: "/images/truck.jpg",
            title: "Man & Van",
        },
        {
            id: 'sofas',
            image: "/images/Sofa1.png",
            title: "Sofas",
        },
        {
            id: 'mattress-bed',
            image: "/images/Mattress.png",
            title: "Mattress & Bed",
        },
        {
            id: 'furniture',
            image: "/images/Furniture.png",
            title: "Furniture",
        },
        {
            id: 'kitchen-appliances',
            image: "/images/Kitchen Appliance.png",
            title: "Kitchen Appliances",
        },
        {
            id: 'fridge-freezer',
            image: "/images/fridge.png",
            title: "Fridge & Freezer",
        },
        {
            id: 'electrical-it',
            image: "/images/Iron.png",
            title: "Electrical & IT",
        },
        {
            id: 'garden-items',
            image: "/images/garden.png",
            title: "Garden Items",
        },
        {
            id: 'hazardous-waste',
            image: "/images/haz.jfif",
            title: "Hazardous Waste",
        },
        {
            id: 'office-items',
            image: "/images/office.jfif",
            title: "Office Items",
        },
        {
            id: 'commercial-items',
            image: "/images/waste.jpg",
            title: "Commercial Items",
        },
        {
            id: 'bins-wheelie-bins',
            image: "/images/bin.png",
            title: "Bins",
        },
        {
            id: 'show-all',
            image: "/images/rubbish.jfif",
            title: "All Waste Types",
        },
    ]

    const [activeItem, setActiveItem] = useState(null)

    const handleItemClick = (item) => {
        setActiveItem((prev) => (prev === item.id ? null : item.id))
    }

    const isManVan = activeItem === 'man-van'

    const bookingProps = activeItem
        ? isManVan
            ? { defaultMode: 'lorry', initialCategoryId: null }
            : { defaultMode: 'individual', initialCategoryId: activeItem }
        : null

    return (
        <div className='bg-[#B9DCF5]/30'>

            <div className='container mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 px-4 py-8 text-center sm:px-6 sm:py-10 md:gap-5 lg:px-8 lg:py-14'>

                <div className='group flex max-w-full cursor-default flex-row items-center justify-center gap-2 rounded-full border border-[#11224D]/10 bg-white/70 px-3 py-1.5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-[#0497E2]/30 hover:bg-white hover:shadow-md'>
                    <Recycle
                        aria-hidden='true'
                        className='size-5 shrink-0 text-[#11224D] transition-transform duration-500 group-hover:rotate-180 group-hover:text-[#0497E2]'
                    />
                    <p className='text-sm font-medium text-[#11224D] sm:text-base'>
                        We take it all. You relax.
                    </p>
                </div>


                <div>
                    <h1 className='text-3xl font-black leading-tight text-[#11224D] sm:text-4xl lg:text-5xl'>
                        Order Chingford
                    </h1>

                    <h1 className='text-3xl font-black leading-tight text-[#0497E2] sm:text-4xl lg:text-5xl'>
                        Rubbish Removal
                    </h1>
                </div>


                <h2 className='text-lg leading-snug text-[#11224D] sm:text-2xl lg:text-3xl'>
                    Get{' '}
                    <span className='font-bold text-[#0497E2]'>
                        prices &amp; book
                    </span>{' '}
                    your waste collection Online:
                </h2>


                <p className='max-w-4xl text-sm leading-relaxed text-neutral-500 sm:text-base'>
                    We can sort out those awkward clearance jobs that you haven&apos;t got round to. Everything from DIY waste to old mattresses.
                </p>


                <div
                    id='prices'
                    className='mt-3 grid w-full scroll-mt-24 grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                >

                    {Items.map((item) => {

                        const isActive = activeItem === item.id

                        return (
                            <button
                                key={item.id}
                                type='button'
                                onClick={() => handleItemClick(item)}
                                aria-pressed={isActive}
                                className={`group relative flex min-h-28 min-w-0 cursor-pointer items-center justify-between overflow-hidden rounded-2xl border bg-white p-4 text-left shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#11224D]/15 sm:p-5 ${
                                    isActive
                                        ? 'border-[#0497E2] ring-2 ring-[#0497E2]/20'
                                        : 'border-[#11224D]/10 hover:border-[#0497E2]/40'
                                }`}
                            >

                                <div className='absolute inset-x-0 bottom-0 h-1 bg-[#0497E2] transition-all duration-500 group-hover:h-full group-hover:opacity-[0.04]' />

                                <div className='absolute -right-8 -top-8 size-24 rounded-full bg-[#0497E2]/5 transition-all duration-700 group-hover:scale-[2.5] group-hover:bg-[#0497E2]/10' />


                                <div className='relative z-10 flex min-w-0 flex-row items-center gap-3 sm:gap-4'>

                                    <div className='relative flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-[#11224D]/10 bg-[#F7FAFD] p-2 shadow-sm transition-all duration-500 group-hover:scale-105 group-hover:border-[#0497E2]/30 group-hover:bg-white group-hover:shadow-lg group-hover:shadow-[#0497E2]/15 sm:size-[72px]'>

                                        <div className='absolute inset-0 rounded-2xl bg-[#0497E2]/0 transition-all duration-500 group-hover:bg-[#0497E2]/5' />

                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            sizes='(max-width: 639px) 64px, 72px'
                                            className='relative object-contain p-2 transition-transform duration-500 group-hover:scale-110'
                                        />

                                    </div>


                                    <div className='min-w-0'>

                                        <span className='mb-1 block text-[10px] font-bold uppercase tracking-[0.18em] text-[#0497E2] opacity-60 transition-all duration-300 group-hover:opacity-100'>
                                            Waste Service
                                        </span>

                                        <p className='text-base font-bold leading-snug text-[#11224D] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#0497E2] sm:text-lg'>
                                            {item.title}
                                        </p>

                                        <div className='mt-1 flex items-center gap-1 overflow-hidden'>
                                            <span className='max-w-0 text-xs font-semibold text-[#11224D]/50 transition-all duration-500 group-hover:max-w-20'>
                                                Explore
                                            </span>

                                            <ArrowUpRight className='size-3 text-[#0497E2] opacity-0 transition-all duration-500 group-hover:translate-x-1 group-hover:rotate-45 group-hover:opacity-100' />
                                        </div>

                                    </div>

                                </div>


                                <div
                                    className={`relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full transition-all duration-500 ${
                                        isActive
                                            ? 'rotate-90 bg-[#11224D] text-white'
                                            : 'bg-[#11224D]/5 text-[#11224D] group-hover:bg-[#11224D] group-hover:text-white'
                                    }`}
                                >

                                    <ChevronRight
                                        aria-hidden='true'
                                        className='size-5 transition-transform duration-300 group-hover:translate-x-0.5'
                                        strokeWidth={2.5}
                                    />

                                </div>

                            </button>
                        )
                    })}

                </div>


                {activeItem && (
                    <div className='mt-3 w-full'>
                        <ManVanBooking
                            key={activeItem}
                            {...bookingProps}
                        />
                    </div>
                )}

            </div>

        </div>
    )
}