import React from 'react'
import { Truck, Recycle, ShieldCheck, FaceSlightlySmiling, CornerRightDown } from 'lucide-react';

export default function SecondaryNav () {
    const secondaryNav=[
        {id: 1,
        icon: Truck,
        title: "Flexible Booking Options"
        },
        {id: 2,
        icon: Recycle,
        title: "95% of All Waste Recycled"
        },
        {id: 3,
        icon: ShieldCheck,
        title: "Guaranteed Next Day Collection"
        },
        {id: 4,
        icon: FaceSlightlySmiling,
        title: "Sit Back & Relax, We'll Do The Rest"
        },
    ]
  return (
    <div className='order-last w-full bg-linear-to-b from-[#1A68A3] to-[#4E75B1]'>
        <div className='mx-auto grid w-[calc(100%-1.5rem)] max-w-7xl grid-cols-1 gap-px py-5 sm:grid-cols-2 md:py-6 lg:grid-cols-4'>
            {secondaryNav.map((nav) => {
                const Icon = nav.icon

                return (
                    <a
                    href="#form"
                    key={nav.id}
                    className='group flex min-h-20 min-w-0 items-center gap-2 rounded-lg border-white/25 px-3 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#11224D] hover:shadow-lg focus-within:bg-[#11224D] sm:min-h-24 sm:gap-3 sm:px-5 sm:odd:border-r lg:min-h-28 lg:px-6 lg:border-r lg:last:border-r-0'>
                        <span className='flex size-14 shrink-0 items-center justify-center rounded-full bg-white/20 transition-all duration-300 group-hover:-rotate-3 group-hover:scale-110 group-hover:bg-white sm:size-16'>
                            <Icon aria-hidden='true' className='size-8 text-white transition-colors duration-300 group-hover:text-[#11224D] sm:size-9' strokeWidth={1.8}/>
                        </span>
                        <p className='min-w-0 text-base font-bold leading-snug text-white sm:text-lg'>{nav.title}</p>
                        <CornerRightDown
                            aria-hidden='true'
                            className='size-7 shrink-0 text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1 sm:size-6'
                            strokeWidth={3}
                        />
                    
                    </a>
                )
            })}
        </div>
    </div>
  )
}
