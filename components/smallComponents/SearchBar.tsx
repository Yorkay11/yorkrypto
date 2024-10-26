"use client"
import React, { useState } from 'react'
import { Input } from '../ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { cryptocurrencies } from '@/assets/data'
import { Search } from 'lucide-react'



const SearchBar = () => {
    const [selectedCrypto, setSelectedCrypto] = useState('')

    return (
        <div className='py-6 bg-black px-[5%] flex flex-row justify-between items-center'>
            <div className='flex flex-col lg:flex-row items-start lg:items-center gap-4'>
                <div className='flex gap-1 text-sm font-thin'>
                    <span className='text-gray-600'>Cryptocurrencies</span>
                    <span>1592</span>
                </div>
                <div className='flex gap-1 text-sm font-thin'>
                    <span className='text-gray-600'>Markets</span>
                    <span>10271</span>
                </div>
            </div>

            <div className='flex flex-row gap-2 items-center'>
                <form className="relative w-full hidden lg:flex max-w-sm">
                    <Input
                        placeholder='Search...'
                        className=''
                    />
                    <button
                        type="submit"
                        className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 hover:text-gray-700 focus:outline-none"
                        aria-label="Search"
                    >
                        <Search className="h-4 w-4" />
                    </button>
                </form>
                <div className="flex justify-between">
                    <Select value={selectedCrypto} onValueChange={setSelectedCrypto} defaultValue={cryptocurrencies[0].symbol}>
                        <SelectTrigger className="w-[180px] bg-[#181818]">
                            <SelectValue placeholder={"Default: Bitcoin"} />
                        </SelectTrigger>
                        <SelectContent>
                            {cryptocurrencies.map((crypto) => (
                                <SelectItem key={crypto.symbol} value={crypto.name} className=''>
                                    <div className='flex items-center gap-2'>
                                        {crypto.icon({ className: 'h-4 w-4' })}
                                        <p>{crypto.name}</p>
                                    </div>
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>

        </div>
    )
}

export default SearchBar