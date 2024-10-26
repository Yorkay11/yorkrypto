import { cryptocurrencies, inflations } from '@/assets/data'
import React from 'react'
// import { Separator } from '../ui/separator'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'

const CryptoBanner = () => {
    return (
        <nav className="shadow-md text-gray-900 dark:text-white bg-[#181818] py-6 flex justify-between items-center px-[5%]">
            <div className="  flex flex-row items-center gap-4">
                {cryptocurrencies[0].icon({ className: 'h-12 w-12 ' })}
                <div className=''>
                    <p
                        className='font-bold text-xl'
                    >{cryptocurrencies[0].symbol} / USDT</p>
                    <p
                        className='font-thin text-xs text-gray-400'
                    >{cryptocurrencies[0].name}</p>
                </div>
                <div className='mx-2'>
                    <p
                        className='font-bold text-md text-[#F7931A]'
                    >26,901.20</p>
                    <p
                        className='font-thin text-xs text-gray-400'
                    >$ 26,901.20</p>
                </div>
            </div>

            <div className='w-full max-w-xs '>
                <Carousel className="flex h-8 w-full items-center gap-4">
                    <CarouselContent>
                        <CarouselItem key={0}>
                            <div className='flex gap-2 flex-row items-center'>
                                {inflations[0].icon}
                                <p
                                    className='text-sm text-[#6E6D6E]'
                                >24h change</p>
                            </div>
                            <div className='flex flex-row gap-2'>
                                <p
                                    className='font-semibold text-sm items-center'
                                >{inflations[0].amount}</p>
                                <p
                                    className={`${inflations[0].taux > 0 ? 'text-[#007F1E]' : 'text-[#B60000]'} font-thin text-sm`}
                                >
                                    {inflations[0].taux > 0 && <span>+</span>}
                                    {inflations[0].taux} %
                                </p>
                            </div>
                        </CarouselItem>
                        {/* <Separator orientation="vertical" className='ml-8'/> */}
                        <CarouselItem key={1}>
                            <div className='flex gap-2 flex-row items-center'>
                                {inflations[1].icon}
                                <p
                                    className='text-sm text-[#6E6D6E]'
                                >24h low</p>
                            </div>
                            <div className='flex flex-row gap-2'>
                                <p
                                    className='font-semibold text-sm items-center'
                                >{inflations[1].amount}</p>
                                <p
                                    className={`${inflations[1].taux > 0 ? 'text-[#007F1E]' : 'text-[#B60000]'} font-thin text-sm`}
                                >
                                    {inflations[1].taux > 0 && <span>+</span>}
                                    {inflations[1].taux} %
                                </p>
                            </div>
                        </CarouselItem>
                        {/* <Separator orientation="vertical" className='ml-8'/> */}
                        <CarouselItem key={2}>
                            <div className='flex gap-2 flex-row items-center'>
                                {inflations[2].icon}
                                <p
                                    className='text-sm text-[#6E6D6E]'
                                >24h high</p>
                            </div>
                            <div className='flex flex-row gap-2'>
                                <p
                                    className='font-semibold text-sm items-center'
                                >{inflations[2].amount}</p>
                                <p
                                    className={`${inflations[2].taux > 0 ? 'text-[#007F1E]' : 'text-[#B60000]'} font-thin text-sm`}
                                >
                                    {inflations[2].taux > 0 && <span>+</span>}
                                    {inflations[2].taux} %
                                </p>
                            </div>
                        </CarouselItem>
                        {/* <Separator orientation="vertical" className='ml-8'/> */}
                        <CarouselItem key={3}>
                            <div className='flex gap-2 flex-row items-center'>
                                {inflations[3].icon}
                                <p
                                    className='text-sm text-[#6E6D6E]'
                                >24h volume</p>
                            </div>
                            <div className='flex flex-row gap-2'>
                                <p
                                    className='font-semibold text-sm items-center'
                                >{inflations[3].amount}</p>
                                <p
                                    className={`${inflations[3].taux > 0 ? 'text-[#007F1E]' : 'text-[#B60000]'} font-thin text-sm`}
                                >
                                    {inflations[3].taux > 0 ? <span>+</span> : <span>-</span>}
                                    {inflations[3].taux} %
                                </p>
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </nav>
    )
}

export default CryptoBanner