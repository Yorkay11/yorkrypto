import React from 'react'
import { Card } from '../ui/card'
import { cryptocurrencies } from '@/assets/data'
import { FaExchangeAlt } from 'react-icons/fa'

const Change = () => {
    return (
        <Card className='p-1 h-20 relative flex flex-row flex-1'>
            <div
                className='bg-[#181818] w-[50%] left-0 p-4 rounded-l-lg h-full flex flex-row gap-4 items-center justify-between'
            >
                <div
                    className='flex flex-row gap-4 items-center'
                >
                    {cryptocurrencies[0].icon({ className: 'h-6 w-6 ' })}
                    <div className=''>
                        <p
                            className='font-semibold text-xs  text-gray-400'
                        >{cryptocurrencies[0].symbol}</p>
                        <p
                            className='font-thin text-xs'
                        >{cryptocurrencies[0].name}</p>
                    </div>
                </div>
                <p
                    className='mr-4'
                >1</p>
            </div>

            <div
                className=' w-[50%] right-0 p-4 rounded-lg h-full relative  flex flex-row gap-4 items-center justify-between'
            >
                <div className='absolute rounded-full p-2 flex items-center justify-center bg-black left-[-16px] top-[30%] border'>
                    <FaExchangeAlt className='h-4 w-4' color='#7A7A7A' />
                </div>
                <div
                    className='flex flex-row gap-4 items-center pl-4 '
                >
                    
                    <div className=''>
                        <p
                            className='font-semibold text-xs  text-gray-400'
                        >USD</p>
                        <p
                            className='font-thin text-xs'
                        >United State Dollars</p>
                    </div>
                </div>
                <p
                    className='mr-4'
                >30,920.29</p>
            </div>
        </Card>
    )
}

export default Change