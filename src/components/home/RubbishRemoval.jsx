import React from 'react'
import { Recycle } from 'lucide-react';

export default function RubbishRemoval () {
    const List=[
        {title: "House Rubbish Clearance"},
        {title: "White Goods Appliances (inc. fridges/freezers)"},
        {title: "Builders Waste & Rubble Removal"},
        {title: "Home Improvement Waste"},
        {title: "Plumbers Waste"},
        {title: "Garden Clearance (inc. sheds & garages)"},
        {title: "Old Furniture (inc. sofas & cabinets)"},
        {title: "Office Waste Clearance"},
        {title: "General House Junk Removal"},
    ]
  return (
    <div className='bg-linear-to-b from-[#E9F4FC] via-white to-[#E9F4FC]'>
        <div className='container mx-auto flex w-full max-w-7xl flex-col items-start justify-start gap-4 px-4 py-8 sm:gap-5 sm:px-6 sm:py-10 lg:px-8 lg:py-14'>
            <h1 className='text-2xl font-bold leading-tight text-[#11224D] sm:text-3xl lg:text-4xl'>Chingford Rubbish Removal</h1>
            <div className='h-1 w-12 rounded-full bg-linear-to-r from-[#11224D] to-[#4873AF]'></div>
            <div className='grid w-full grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2 sm:gap-y-4 lg:gap-x-8 lg:gap-y-5'>
                {List.map((list, index)=>(
                    <div
                    key={index}
                    className='group flex min-h-14 min-w-0 flex-row items-center gap-2 rounded-xl bg-linear-to-b from-[#0497E2] to-[#4572AE] px-3 py-2 shadow transition duration-300 hover:-translate-y-0.5 hover:shadow-xl sm:min-h-16 sm:gap-3'>
                        <div className='flex size-10 shrink-0 items-center justify-center rounded-full bg-white'>
                            <Recycle aria-hidden='true' className='size-5 shrink-0 text-[#11224D]/80 transition-transform duration-300 group-hover:scale-110 sm:size-6'/>
                        </div>
                        <p className='min-w-0 text-base leading-snug text-white sm:text-lg'>{list.title}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
