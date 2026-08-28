'use client'

import React, { useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useCart } from '../cart/CartContext'
import CollectionDetails from './CollectionDetails'
import {
  ChevronRight,
  Armchair,
  Bed,
  Package,
  UtensilsCrossed,
  Refrigerator,
  Zap,
  TreePine,
  AlertTriangle,
  Briefcase,
  Building2,
  Trash2,
  LayoutGrid,
  Truck,
  Star,
  Minus,
  Plus,
  Check,
} from 'lucide-react'

export const CATEGORIES = [
  { id: 'sofas', label: 'Sofas', icon: Armchair },
  { id: 'mattress-bed', label: 'Mattress & Bed', icon: Bed },
  { id: 'furniture', label: 'Furniture', icon: Package },
  { id: 'kitchen-appliances', label: 'Kitchen Appliances', icon: UtensilsCrossed },
  { id: 'fridge-freezer', label: 'Fridge & Freezer', icon: Refrigerator },
  { id: 'electrical-it', label: 'Electrical & IT', icon: Zap },
  { id: 'garden-items', label: 'Garden Items', icon: TreePine },
  { id: 'hazardous-waste', label: 'Hazardous Waste', icon: AlertTriangle },
  { id: 'office-items', label: 'Office Items', icon: Briefcase },
  { id: 'commercial-items', label: 'Commercial Items', icon: Building2 },
  { id: 'bins-wheelie-bins', label: 'Bins & Wheelie Bins', icon: Trash2 },
  { id: 'show-all', label: 'Show All', icon: LayoutGrid },
]

// NOTE: descriptions & prices below are placeholder catalogue data â€”
// swap in your real item list / pricing per category.
const ITEMS_BY_CATEGORY = {
  sofas: [
    { id: 'sofa-2seater', name: '2 Seater Sofa / Chaise Lounge', description: 'Standard 2 seater. Love seat. Chaise lounge. Wicker sofa.', price: 70 },
    { id: 'sofa-3piece', name: '3 Piece Suite', description: '1 x armchair. 1 x 2 seater sofa. 1 x 3 seater sofa. 1 x footstool.', price: 185 },
    { id: 'sofa-3seater', name: '3 Seat Sofa', description: 'Standard 3 seater. Large chaise longue & wicker sofa.', price: 95 },
    { id: 'armchair', name: 'Armchair', description: 'Wooden, fabric, wicker & leather chairs.', price: 54 },
  ],
  'mattress-bed': [
    { id: 'mattress-single', name: 'Single Mattress', description: 'Standard single size, any material.', price: 25 },
    { id: 'mattress-double', name: 'Double / King Mattress', description: 'Double, king or super king size.', price: 35 },
    { id: 'bed-frame', name: 'Bed Frame', description: 'Wooden or metal frame, single to king.', price: 40 },
    { id: 'divan-base', name: 'Divan Base', description: 'Includes storage divan bases.', price: 45 },
  ],
  furniture: [
    { id: 'wardrobe', name: 'Wardrobe', description: 'Single, double or triple door.', price: 55 },
    { id: 'chest-drawers', name: 'Chest of Drawers', description: 'Any size, wood, veneer or flatpack.', price: 30 },
    { id: 'dining-table', name: 'Dining Table', description: 'Seats 4-8, with or without chairs.', price: 45 },
    { id: 'bookcase', name: 'Bookcase / Shelving Unit', description: 'Freestanding units of any size.', price: 25 },
  ],
  'kitchen-appliances': [
    { id: 'washing-machine', name: 'Washing Machine', description: 'Freestanding or integrated.', price: 35 },
    { id: 'dishwasher', name: 'Dishwasher', description: 'Freestanding or integrated.', price: 35 },
    { id: 'cooker', name: 'Cooker / Oven', description: 'Electric or gas, freestanding.', price: 40 },
    { id: 'microwave', name: 'Microwave', description: 'Any size microwave oven.', price: 15 },
  ],
  'fridge-freezer': [
    { id: 'fridge-freezer', name: 'Fridge Freezer', description: 'Standard combined fridge freezer.', price: 45 },
    { id: 'fridge-only', name: 'Fridge Only', description: 'Under-counter or full size.', price: 35 },
    { id: 'chest-freezer', name: 'Chest Freezer', description: 'Any size chest freezer.', price: 40 },
    { id: 'wine-cooler', name: 'Wine Cooler', description: 'Freestanding wine fridge.', price: 30 },
  ],
  'electrical-it': [
    { id: 'tv', name: 'Television', description: 'Any size, CRT or flat screen.', price: 20 },
    { id: 'computer', name: 'Computer / Monitor', description: 'Desktops, monitors & peripherals.', price: 15 },
    { id: 'printer', name: 'Printer / Scanner', description: 'Home or office printers.', price: 15 },
    { id: 'small-electricals', name: 'Small Electricals (box)', description: 'Kettles, toasters, cables etc.', price: 20 },
  ],
  'garden-items': [
    { id: 'lawnmower', name: 'Lawnmower', description: 'Petrol or electric mower.', price: 25 },
    { id: 'shed', name: 'Garden Shed (dismantled)', description: 'Wooden or metal, flat packed.', price: 60 },
    { id: 'garden-furniture', name: 'Garden Furniture Set', description: 'Table, chairs or bench sets.', price: 40 },
    { id: 'green-waste', name: 'Green Waste (per bag)', description: 'Grass, hedge cuttings & leaves.', price: 8 },
  ],
  'hazardous-waste': [
    { id: 'paint-tins', name: 'Paint Tins (per 5)', description: 'Part-full or empty tins.', price: 20 },
    { id: 'gas-canister', name: 'Gas Canister', description: 'Camping or BBQ gas bottles.', price: 25 },
    { id: 'asbestos', name: 'Asbestos (small item)', description: 'Requires licensed handling.', price: 80 },
    { id: 'chemicals', name: 'Chemicals / Oils (per container)', description: 'Household chemicals & oils.', price: 20 },
  ],
  'office-items': [
    { id: 'office-desk', name: 'Office Desk', description: 'Single or double pedestal desk.', price: 35 },
    { id: 'office-chair', name: 'Office Chair', description: 'Swivel or task chairs.', price: 15 },
    { id: 'filing-cabinet', name: 'Filing Cabinet', description: '2, 3 or 4 drawer units.', price: 25 },
    { id: 'partition', name: 'Office Partition', description: 'Freestanding screens & partitions.', price: 30 },
  ],
  'commercial-items': [
    { id: 'shop-fittings', name: 'Shop Fittings', description: 'Shelving, racking & display units.', price: 50 },
    { id: 'catering-equipment', name: 'Catering Equipment', description: 'Commercial kitchen equipment.', price: 60 },
    { id: 'pallets', name: 'Pallets (per 5)', description: 'Wooden or plastic pallets.', price: 25 },
    { id: 'signage', name: 'Signage / Displays', description: 'Shop or event signage.', price: 20 },
  ],
  'bins-wheelie-bins': [
    { id: 'wheelie-bin', name: 'Wheelie Bin', description: '140L, 240L or 360L bins.', price: 30 },
    { id: 'builders-bag', name: "Builder's Bag (full)", description: 'Filled rubble / waste bag.', price: 65 },
    { id: 'black-sacks', name: 'Black Sacks (per 5)', description: 'General household waste bags.', price: 15 },
    { id: 'skip-bag', name: 'Skip Bag', description: 'Large capacity waste bag.', price: 70 },
  ],
}

// NOTE: only the first three sizes' prices are confirmed from the reference
// design; Medium / Large / Full are placeholders â€” adjust as needed.
const LOAD_SIZES = [
  { id: 'mini', name: 'Mini Load', priceIncVat: 34.99, priceExVat: 29.16, maxWeight: '50KG', volume: '1.05 ydsÂ³', sacks: 6, time: '10mins', popular: true },
  { id: 'small', name: 'Small Load', priceIncVat: 64.99, priceExVat: 54.16, maxWeight: '125KG', volume: '2.1 ydsÂ³', sacks: 12, time: '15mins', popular: true },
  { id: 'small-plus', name: 'Small Load +', priceIncVat: 89.99, priceExVat: 74.99, maxWeight: '250KG', volume: '4.5 ydsÂ³', sacks: 25, time: '25mins', popular: false },
  { id: 'medium', name: 'Medium Load', priceIncVat: 129.99, priceExVat: 108.32, maxWeight: '375KG', volume: '6.5 ydsÂ³', sacks: 35, time: '35mins', popular: false },
  { id: 'large', name: 'Large Load', priceIncVat: 179.99, priceExVat: 149.99, maxWeight: '500KG', volume: '9 ydsÂ³', sacks: 48, time: '45mins', popular: false },
  { id: 'full', name: 'Full Load', priceIncVat: 249.99, priceExVat: 208.32, maxWeight: '750KG', volume: '12 ydsÂ³', sacks: 65, time: '60mins', popular: false },
]

const ALL_ITEMS = Object.values(ITEMS_BY_CATEGORY).flat()

export default function ManVanBooking ({ defaultMode = 'lorry', initialCategoryId = null }) {
  const { addItems } = useCart()
  const router = useRouter()
  const [mode, setMode] = useState(defaultMode)
  const [selectedLoadSize, setSelectedLoadSize] = useState(null)
  const [selectedCategories, setSelectedCategories] = useState(
    initialCategoryId === 'show-all'
      ? CATEGORIES.map((category) => category.id)
      : initialCategoryId
        ? [initialCategoryId]
        : []
  )
  const [quantities, setQuantities] = useState({}) // itemId -> qty
  const [saturdayCollection, setSaturdayCollection] = useState(false)
  const [paymentOption, setPaymentOption] = useState('now')
  const [notice, setNotice] = useState('30')
  const [collectionDate, setCollectionDate] = useState('')
  const [accessConfirmed, setAccessConfirmed] = useState(false)
  const [restrictedAccess, setRestrictedAccess] = useState('')

  const toggleCategory = (id) => {
    if (id === 'show-all') {
      setSelectedCategories((prev) =>
        prev.includes('show-all') ? [] : CATEGORIES.map((c) => c.id)
      )
      return
    }
    setSelectedCategories((prev) =>
      prev.includes(id)
        ? prev.filter((c) => c !== id && c !== 'show-all')
        : [...prev.filter((c) => c !== 'show-all'), id]
    )
  }

  const toggleItem = (item) => {
    setQuantities((prev) => ({ ...prev, [item.id]: 1 }))
  }

  const changeQty = (item, delta) => {
    setQuantities((prev) => {
      const nextQty = Math.max(0, (prev[item.id] || 0) + delta)
      const next = { ...prev }
      if (nextQty === 0) {
        delete next[item.id]
      } else {
        next[item.id] = nextQty
      }
      return next
    })
  }

  const activeCategories = useMemo(
    () => CATEGORIES.filter((c) => c.id !== 'show-all' && selectedCategories.includes(c.id)),
    [selectedCategories]
  )

  const individualTotal = useMemo(
    () =>
      Object.entries(quantities).reduce((sum, [itemId, qty]) => {
        const item = ALL_ITEMS.find((i) => i.id === itemId)
        return sum + (item ? item.price * qty : 0)
      }, 0),
    [quantities]
  )

  const lorryTotal = useMemo(() => {
    const size = LOAD_SIZES.find((l) => l.id === selectedLoadSize)
    return size ? size.priceIncVat : 0
  }, [selectedLoadSize])

  const selectionTotal = mode === 'lorry' ? lorryTotal : individualTotal
  const hasSelection = mode === 'lorry' ? !!selectedLoadSize : Object.keys(quantities).length > 0
  const total = selectionTotal + (hasSelection && saturdayCollection ? 50 : 0)

  const handleAddToBasket = (event) => {
    event.preventDefault()
    if (!hasSelection) return
    const formData = new FormData(event.currentTarget)
    const collectionDetail = [
      formData.get('collectionDate'),
      `${notice} minute notice`,
      saturdayCollection ? 'Saturday collection' : null,
      paymentOption === 'now' ? 'Pay now' : 'Pay on arrival',
      restrictedAccess ? `Restricted access: ${restrictedAccess}` : null,
      formData.get('accessRestrictions'),
    ].filter(Boolean).join(' · ')

    if (mode === 'lorry') {
      const size = LOAD_SIZES.find((load) => load.id === selectedLoadSize)
      if (size) addItems([{ id: `load-${size.id}`, name: size.name, detail: `${size.maxWeight} · ${size.volume} · ${size.time} · ${collectionDetail}`, unitPrice: size.priceIncVat, quantity: 1 }])
    } else {
      addItems(Object.entries(quantities).map(([itemId, quantity]) => {
        const item = ALL_ITEMS.find((entry) => entry.id === itemId)
        const category = CATEGORIES.find((entry) => (ITEMS_BY_CATEGORY[entry.id] || []).some((entryItem) => entryItem.id === itemId))
        return { id: `item-${itemId}`, name: item.name, detail: `${category?.label || 'Waste collection'} · ${collectionDetail}`, unitPrice: item.price, quantity }
      }))
    }
    if (saturdayCollection) addItems([{ id: 'saturday-collection', name: 'Saturday collection', detail: 'Weekend collection surcharge', unitPrice: 50, quantity: 1 }])
    router.push('/checkout')
  }
  return (
    <div className='w-full rounded-2xl border border-[#0492E8]/10 bg-white p-4 text-left shadow-lg transition-shadow duration-300 hover:shadow-xl sm:p-6 lg:p-8'>
      {/* Mode selector */}
      <div className='flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-8'>
        {[
          { id: 'lorry', label: 'Lorry Load + Extras' },
          { id: 'individual', label: 'Individual items only' },
        ].map((option) => (
          <button
            key={option.id}
            type='button'
            aria-pressed={mode === option.id}
            onClick={() => setMode(option.id)}
            className='group flex items-center gap-2.5 rounded-md px-1.5 py-1 -mx-1.5 transition-colors duration-200 hover:bg-[#EAF3FB]'
          >
            <span
              className={`flex size-5 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-200 group-hover:scale-110 ${
                mode === option.id
                  ? 'border-[#0497E2] bg-[#0497E2]'
                  : 'border-[#4974AF]/50 bg-white group-hover:border-[#0497E2]'
              }`}
            >
              {mode === option.id && <span className='size-2 rounded-full bg-white' />}
            </span>
            <span
              className={`text-sm font-bold transition-colors duration-200 sm:text-base ${
                mode === option.id ? 'text-[#0497E2]' : 'text-[#11224D] group-hover:text-[#1A68A3]'
              }`}
            >
              {option.label}
            </span>
          </button>
        ))}
      </div>

      {/* LORRY LOAD + EXTRAS */}
      {mode === 'lorry' && (
        <div className='mt-8'>
          <h3 className='text-xl font-bold text-[#11224D] sm:text-2xl'>Load size</h3>
          <div className='mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'>
            {LOAD_SIZES.map((size) => {
              const isSelected = selectedLoadSize === size.id
              return (
                <button
                  key={size.id}
                  type='button'
                  aria-pressed={isSelected}
                  onClick={() => setSelectedLoadSize(size.id)}
                  className={`group relative flex flex-col overflow-hidden rounded-xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#0497E2] hover:shadow-xl hover:shadow-blue-100 ${
                    isSelected ? 'border-[#0497E2] ring-2 ring-[#0497E2]' : 'border-[#0492E8]/10'
                  }`}
                >
                  {size.popular && (
                    <span className='absolute left-3 top-3 z-10 inline-flex items-center gap-1 rounded-full bg-[#F7B965] px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-[#11224D] transition-transform duration-300 group-hover:scale-105'>
                      <Star className='size-3 fill-[#0492E8]' /> Popular
                    </span>
                  )}
                  <div className='flex h-32 items-center justify-center bg-gradient-to-b from-[#DCEBFA] to-white p-4 transition-colors duration-300 group-hover:from-[#CFE6FA] sm:h-36'>
                    <Truck className='size-14 text-[#1A68A3] transition-transform duration-300 group-hover:scale-110 group-hover:-translate-x-1 sm:size-16' strokeWidth={1.5} />
                  </div>
                  <div className='bg-[#0492E8] px-4 py-2.5 text-center text-base font-bold text-[#102a4c] transition-colors duration-300 group-hover:bg-[#1A68A3] sm:text-lg'>
                    {size.name}
                  </div>
                  <div className='flex flex-1 flex-col items-center gap-1 px-4 py-4 text-center'>
                    <p className='text-2xl font-extrabold text-[#0497E2] sm:text-3xl'>
                      Â£{size.priceIncVat.toFixed(2)}
                      <span className='ml-1 text-xs font-semibold text-[#0497E2]/70'>inc. VAT</span>
                    </p>
                    <p className='text-sm font-semibold text-[#4974AF]'>
                      Â£{size.priceExVat.toFixed(2)} <span className='text-xs font-normal'>ex. VAT</span>
                    </p>
                    <div className='mt-2 space-y-0.5 text-xs text-neutral-500 sm:text-sm'>
                      <p>Max Weight: <span className='font-semibold text-[#11224D]'>{size.maxWeight}</span></p>
                      <p>Approximately <span className='font-semibold text-[#11224D]'>{size.volume}</span></p>
                      <p>Equivalent to: <span className='font-semibold text-[#11224D]'>{size.sacks} Black Sacks</span></p>
                    </div>
                  </div>
                  <div className='border-t border-[#0492E8]/10 bg-[#EAF3FB] px-4 py-2.5 text-center text-xs font-semibold text-[#11224D] transition-colors duration-300 group-hover:bg-[#DCEBFA] sm:text-sm'>
                    Time Allowance: <span className='font-bold'>{size.time}</span>
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      )}

      {/* INDIVIDUAL ITEMS ONLY */}
      {mode === 'individual' && (
        <div className='mt-8'>
          <h3 className='text-xl font-bold text-[#11224D] sm:text-2xl'>Choose Your Items to be Collected:</h3>

          <div className='mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 lg:grid-cols-4 xl:grid-cols-5'>
            {CATEGORIES.map((category) => {
              const isSelected = selectedCategories.includes(category.id)
              return (
                <button
                  key={category.id}
                  type='button'
                  aria-pressed={isSelected}
                  onClick={() => toggleCategory(category.id)}
                  className={`group flex items-center justify-between gap-2 rounded-lg px-3 py-3 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${
                    isSelected
                      ? 'bg-[#CFE6FA] ring-1 ring-[#0497E2]'
                      : 'bg-[#B9DCF5]/60 hover:bg-[#B9DCF5]'
                  }`}
                >
                  <span className='flex min-w-0 items-center gap-2.5'>
                    <span
                      className={`flex size-5 shrink-0 items-center justify-center rounded border transition-all duration-200 group-hover:scale-110 ${
                        isSelected ? 'border-[#0497E2] bg-[#0497E2]' : 'border-[#4974AF]/40 bg-white group-hover:border-[#0497E2]'
                      }`}
                    >
                      {isSelected && <Check className='size-3.5 text-[#102a4c]' strokeWidth={3} />}
                    </span>
                    <span className='truncate text-xs font-bold leading-tight text-[#11224D] transition-colors duration-200 group-hover:text-[#0497E2] sm:text-sm'>
                      {category.label}
                    </span>
                  </span>
                  <ChevronRight className='size-4 shrink-0 text-[#4974AF] transition-all duration-200 group-hover:translate-x-1 group-hover:text-[#0497E2]' />
                </button>
              )
            })}
          </div>

          {activeCategories.map((category) => (
            <div key={category.id} className='mt-8'>
              <h4 className='text-lg font-bold text-[#11224D] sm:text-xl'>{category.label}</h4>
              <div className='mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
                {(ITEMS_BY_CATEGORY[category.id] || []).map((item) => {
                  const qty = quantities[item.id] || 0
                  const isSelected = qty > 0
                  const Icon = category.icon
                  return (
                    <div
                      key={item.id}
                      className={`group relative flex flex-col rounded-xl border bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#0497E2] hover:shadow-lg hover:shadow-blue-100 ${
                        isSelected ? 'border-[#0497E2] ring-1 ring-[#0497E2]' : 'border-[#0492E8]/10'
                      }`}
                    >
                      <div className='flex items-start justify-between gap-2'>
                        <div className='flex size-14 shrink-0 items-center justify-center rounded-lg bg-[#EAF3FB] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#CFE6FA] sm:size-16'>
                          <Icon className='size-7 text-[#1A68A3] transition-transform duration-300 group-hover:scale-110 sm:size-8' strokeWidth={1.5} />
                        </div>
                        {isSelected ? (
                          <div className='flex shrink-0 items-center gap-1 rounded-md border border-[#0497E2]/30 bg-[#EAF3FB] p-0.5'>
                            <button
                              type='button'
                              onClick={() => changeQty(item, -1)}
                              className='flex size-6 items-center justify-center rounded text-[#11224D] transition-all duration-150 hover:scale-110 hover:bg-white hover:text-[#0497E2]'
                              aria-label={`Decrease ${item.name} quantity`}
                            >
                              <Minus className='size-3.5' />
                            </button>
                            <span className='w-5 text-center text-sm font-bold text-[#11224D]'>{qty}</span>
                            <button
                              type='button'
                              onClick={() => changeQty(item, 1)}
                              className='flex size-6 items-center justify-center rounded text-[#11224D] transition-all duration-150 hover:scale-110 hover:bg-white hover:text-[#0497E2]'
                              aria-label={`Increase ${item.name} quantity`}
                            >
                              <Plus className='size-3.5' />
                            </button>
                          </div>
                        ) : (
                          <button
                            type='button'
                            onClick={() => toggleItem(item)}
                            className='shrink-0 rounded-md border border-[#0492E8]/15 px-2 py-1 text-xs font-bold text-[#4974AF] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#0497E2] hover:bg-[#EAF3FB] hover:text-[#0497E2] hover:shadow-sm'
                          >
                            + Add
                          </button>
                        )}
                      </div>
                      <p className='mt-3 text-sm font-bold leading-snug text-[#11224D] transition-colors duration-200 group-hover:text-[#0497E2]'>{item.name}</p>
                      <p className='mt-1 flex-1 text-xs leading-relaxed text-neutral-500'>{item.description}</p>
                      <p className='mt-3 text-base font-extrabold text-[#0497E2]'>Â£{item.price.toFixed(2)}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      )}

      {hasSelection && (
        <CollectionDetails
          onSubmit={handleAddToBasket}
          saturdayCollection={saturdayCollection}
          setSaturdayCollection={setSaturdayCollection}
          collectionDate={collectionDate}
          setCollectionDate={setCollectionDate}
          accessConfirmed={accessConfirmed}
          setAccessConfirmed={setAccessConfirmed}
          restrictedAccess={restrictedAccess}
          setRestrictedAccess={setRestrictedAccess}
          paymentOption={paymentOption}
          setPaymentOption={setPaymentOption}
          notice={notice}
          setNotice={setNotice}
        />
      )}
      {/* Footer: Add to basket + running total */}
      {mode && (
        <div className='sticky bottom-3 z-20 mt-10 flex flex-col items-stretch gap-3 rounded-xl border border-[#0492E8]/10 bg-white/95 p-3 shadow-xl backdrop-blur sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:p-4'>
          <button
            type='submit'
            form='collection-details'
            disabled={!hasSelection}
            className={`order-2 flex-1 rounded-lg px-6 py-3 text-sm font-bold uppercase tracking-wide transition-all duration-200 sm:order-1 sm:text-base ${
              hasSelection
                ? 'bg-gradient-to-r from-[#1A68A3] via-[#0492E8] to-[#1A68A3] text-[#102a4c] hover:-translate-y-0.5 hover:shadow-lg hover:brightness-110'
                : 'cursor-not-allowed bg-[#0492E8]/10 text-[#11224D]/40'
            }`}
          >
            Add to Basket
          </button>
          <div className='group order-1 inline-flex shrink-0 items-center justify-center gap-2 self-center rounded-lg bg-[#F7B965] px-5 py-3 transition-colors duration-200 hover:bg-[#F5C583] sm:order-3'>
            <span className='text-sm font-semibold text-[#11224D] sm:text-base'>Total</span>
            <span className='text-lg font-extrabold text-[#11224D] sm:text-xl'>Â£{total.toFixed(2)}</span>
            <span className='text-xs font-medium text-[#11224D]/70'>(inc. VAT)</span>
          </div>
        </div>
      )}
    </div>
  )
}
