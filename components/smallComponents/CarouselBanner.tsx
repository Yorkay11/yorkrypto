import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import { Card, CardContent } from '../ui/card'
import { images } from '@/assets/data'
import Image from "next/image"
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

const CarouselBanner = () => {
    return (
        <Carousel
            className="w-[90%] cursor-grabbing"
            opts={{
                align: "start",
                loop: true,
            }}
        >
            <CarouselContent>
                {images.map((item, index) => (
                    <CarouselItem key={index}>
                        <div className="">
                            <Card className='p-0 border-none'>
                                <CardContent className="flex w-full h-[80vh] rounded-xl p-0 border-none">
                                    <Image 
                                        src={item.image}
                                        alt='image'
                                        className='w-full h-full rounded-xl'
                                    />
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}

export default CarouselBanner