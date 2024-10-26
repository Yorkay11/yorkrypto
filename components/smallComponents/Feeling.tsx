import React from 'react'
import { Card, CardContent } from '../ui/card'
import { Button } from '../ui/button'
// import { BiSad, BiSolidHappyHeartEyes } from "react-icons/bi";


const Feeling = () => {
    return (
        <Card className="w-full bg-[#181818] h-full flex-1">
            <CardContent className='pt-4 flex flex-row justify-between items-center'>
                <div>
                    <p className='text-xs font-semibold '>How do you feel about Bitcoin Today ?</p>
                    <p className='text-xs font-thin text-gray-500'>Vote to see community result</p>
                </div>
                <div className='flex flex-row gap-2'>
                    <Button variant={'outline'}>
                        {/* <BiSolidHappyHeartEyes className='h-4 w-4' color='yellow' /> */}
                        <p>😃 Good</p>
                    </Button>
                    <Button variant={'outline'}>
                        {/* <BiSad className='h-4 w-4' color='yellow' /> */}
                        <p>😢 Bad</p>
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default Feeling