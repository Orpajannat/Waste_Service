import Image from 'next/image'
import React from 'react'
import { ChevronRight } from 'lucide-react';

export default function Order () {
    const Items=[
        {image:"/images/truck.jpg",
         title:"Man & Van",
        },
        {image:"/images/Sofa.png",
         title:"Sofas",
        },
        {image:"/images/Mattress.png",
         title:"Mattress & Bed",
        },
        {image:"/images/Furniture.png",
         title:"Furniture",
        },
        {image:"/images/Kitchen Appliance.png",
         title:"Kitchen Appliances",
        },
        {image:"/images/fridge.png",
         title:"Fridge & Freezer",
        },
        {image:"/images/truck.jpg",
         title:"Electrical & IT",
        },
        {image:"/images/truck.jpg",
         title:"Garden Items",
        },
        {image:"/images/truck.jpg",
         title:"Hazardous Waste",
        },
        {image:"/images/truck.jpg",
         title:"Office Items",
        },
        {image:"/images/truck.jpg",
         title:"Commercial Items",
        },
        {image:"/images/truck.jpg",
         title:"Bins",
        },
        {image:"/images/truck.jpg",
         title:"All Waste Types",
        },
    ]
  return (
    <div className='bg-[#A7DDD2]/30'>
        <div className='container mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 px-4 py-8 text-center sm:px-6 sm:py-10 md:gap-5 lg:px-8 lg:py-14'>
            <h1 className='text-3xl font-bold leading-tight text-[#153933] sm:text-4xl lg:text-5xl'>Order Chingford Rubbish Removal</h1>
            <h2 className='text-xl font-semibold leading-snug text-[#077F7F] sm:text-2xl lg:text-3xl'>Get prices &amp; book your waste collection Online:</h2>
            <p className='max-w-4xl text-sm leading-relaxed text-neutral-500 sm:text-base'>We can sort out those awkward clearance jobs that you haven&apos;t got round to. Everything from DIY waste to old mattresses.</p>
            <div id='prices' className='mt-3 grid w-full scroll-mt-6 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-5'>
                {Items.map((item, index)=>(
                    <div
                    id="prices"
                    key={index}
                    className="group flex min-h-24 min-w-0 flex-row items-center justify-between gap-3 rounded-lg bg-[#29B380] p-4 text-left transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:min-h-28 sm:gap-4 sm:p-5">
                        <div className='flex min-w-0 flex-row items-center gap-3 sm:gap-4'>
                            <div className='relative size-16 shrink-0 overflow-hidden rounded-lg bg-white p-2 sm:size-18'>
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    sizes='(max-width: 639px) 64px, 72px'
                                    className='object-contain p-2 transition duration-300 group-hover:scale-105'
                                />
                            </div>
                            <p className='min-w-0 text-base font-semibold leading-snug text-[#153933] sm:text-lg'>{item.title}</p>
                        </div>
                        <div className='shrink-0 transition duration-300 group-hover:translate-x-1 sm:group-hover:translate-x-2'>
                            <ChevronRight/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
