import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Label } from '../ui/label'
import { Separator } from '../ui/separator'
import { ChevronRight, Wallet, WalletCards } from 'lucide-react'
import Link from 'next/link'
import { cryptocurrencies } from '@/assets/data'


const AllOrders = () => {
    return (
        <Card className='bg-[#181818] w-full '>
            <div className='m-4'>
                <Tabs defaultValue="limit" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 my-4">
                        <TabsTrigger value="limit">Limit</TabsTrigger>
                        <TabsTrigger value="market">Market</TabsTrigger>
                    </TabsList>
                    <Separator className="my-4" />
                    <TabsContent value="limit">
                        <Card className='bg-[#181818] border-none'>
                            <CardContent className="pt-4 p-0">
                                <form className='flex  flex-col'>
                                    <div className="relative w-full flex flex-row border rounded-lg focus:border items-center focus-visible:ring-0 my-4">
                                        <div
                                            className="inset-y-0 right-0 flex items-center px-3 gap-2 text-gray-500 hover:text-gray-700 focus:outline-none rounded-l-lg"
                                        >
                                            <Wallet className="h-4 w-4" />
                                            <p className='text-xs'>Price</p>
                                        </div>
                                        <Input id="name" defaultValue="" className=' border-none focus:border-none outline-none focus-visible:ring-0' />
                                        <span className='text-xs text-gray-500 px-2'>USD</span>
                                    </div>
                                    <div className="relative w-full flex flex-row border rounded-lg focus:border items-center focus-visible:ring-0 my-2">
                                        <div
                                            className="inset-y-0 right-0 flex items-center px-3 gap-2 text-gray-500 hover:text-gray-700 focus:outline-none rounded-l-lg"
                                        >
                                            <WalletCards className="h-4 w-4" />
                                            <p className='text-xs'>Price</p>
                                        </div>
                                        <Input id="name" defaultValue="" className=' border-none focus:border-none outline-none focus-visible:ring-0' />
                                        <span className='text-xs text-gray-500 px-2'>BTC</span>
                                    </div>
                                    <Button className='bg-blue-600 my-8 hover:bg-blue-900'>
                                        <p className='text-white font-bold text-sm'>Buy BTC</p>
                                    </Button>
                                    <div
                                        className='flex justify-between items-center my-4'
                                    >
                                        <p
                                            className='text-xs font-normal text-gray-200'
                                        >Crypto trading tutorials</p>
                                        <Link
                                            href={"#"}
                                            className=' flex flex-row items-center text-xs font-thin text-gray-500'
                                        >
                                            <p>Learn here</p>
                                            <ChevronRight className='h-4 w-4' />
                                        </Link>
                                    </div>
                                </form>
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="market">
                        <Card className='bg-[#181818]'>
                            <CardHeader>
                                <CardTitle>Password</CardTitle>
                                <CardDescription>
                                    Change your password here.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="space-y-1">
                                    <Label htmlFor="current">Current password</Label>
                                    <Input id="current" type="password" />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="new">New password</Label>
                                    <Input id="new" type="password" />
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button>Save password</Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
            <Separator className="my-5" />
            <div className='m-4'>
                <Tabs defaultValue="order" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 my-4">
                        <TabsTrigger value="order">Order History</TabsTrigger>
                        <TabsTrigger value="trade">Trade History</TabsTrigger>
                    </TabsList>
                    <TabsContent value="order" className='my-8 space-y-8'>
                        {
                            Array.from({ length: 7 }, (_, i) => {
                                return (
                                    <div key={i} className='flex flex-row h-5 w-full justify-between items-center px-4 '>
                                        <div 
                                            className="h-6 w-6 flex rounded-full border-4"
                                            style={{ 
                                                backgroundColor: cryptocurrencies[i].color 
                                            }} 
                                        />
                                        <p className='text-sm text-gray-300'>{cryptocurrencies[i].symbol}</p>
                                        <Separator orientation='vertical' />
                                        <p className='text-sm text-gray-300'>${cryptocurrencies[i].amount}</p>
                                        <Separator orientation='vertical' />
                                        <p className='text-sm text-gray-300'>{cryptocurrencies[i].total}</p>
                                    </div>
                                )
                            })
                        }
                    </TabsContent>
                    <TabsContent value="trade">

                    </TabsContent>
                </Tabs>
            </div>
        </Card>
    )
}

export default AllOrders