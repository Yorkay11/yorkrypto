"use client"
import React, { useState } from 'react'
import { Card } from '../ui/card'
import { Separator } from '../ui/separator'
import { Button } from '../ui/button'

const AllPairs = () => {
    const [selected, setSelected] = useState<number>(0);


  return (
    <Card className='bg-[#181818] w-full h-full flex-1'>
            <div className='m-4 flex flex-row gap-4'>
                <Button 
                    variant={selected == 0 ? 'outline' : 'ghost'}
                    onClick={() => setSelected(0)}
                    className='hover:bg-black'
                >
                    All
                </Button>
                <Button 
                    variant={selected == 1 ? 'outline' : 'ghost'}
                    onClick={() => setSelected(1)}
                    className='hover:bg-black'
                >
                    Cross
                </Button>
                <Button 
                    variant={selected == 2 ? 'outline' : 'ghost'}
                    onClick={() => setSelected(2)}
                    className='hover:bg-black'
                >
                    Isolated
                </Button>
            </div>
            <Separator className="my-7" />
            <div className='m-4'>
                
            </div>
        </Card>
  )
}

export default AllPairs