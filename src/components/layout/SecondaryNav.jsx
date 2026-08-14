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
    <div className='order-last w-full bg-[#29B380]'>
        <div className='container mx-auto grid grid-cols-1 gap-px px-4 py-5 sm:grid-cols-2 sm:px-6 md:py-6 lg:grid-cols-4 lg:px-8'>
            {secondaryNav.map((nav) => {
                const Icon = nav.icon

                return (
                    <a
                    href="#form"
                    key={nav.id}
                    className='group flex min-h-20 min-w-0 items-center gap-4 rounded-lg border-white/25 px-3 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#077F7F] hover:shadow-lg focus-within:bg-[#077F7F] sm:min-h-24 sm:px-5 sm:odd:border-r lg:min-h-28 lg:border-r lg:px-6 lg:last:border-r-0'>
                        <span className='flex size-14 shrink-0 items-center justify-center rounded-full bg-white/20 transition-all duration-300 group-hover:-rotate-3 group-hover:scale-110 group-hover:bg-white sm:size-16'>
                            <Icon aria-hidden='true' className='size-8 text-white transition-colors duration-300 group-hover:text-[#077F7F] sm:size-9' strokeWidth={1.8}/>
                        </span>
                        <p className='min-w-0 text-base font-bold leading-snug text-white sm:text-lg'>{nav.title}</p>
                        <CornerRightDown
                            aria-hidden='true'
                            className='size-7 shrink-0 text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1 sm:size-8'
                            strokeWidth={3}
                        />
                    
                    </a>
                )
            })}
        </div>
    </div>
  )
}
