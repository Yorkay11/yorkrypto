"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { Card, CardContent } from "../ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { useState } from "react";
import { TrendingDown, TrendingUp, TrendingUpDown } from "lucide-react";
import { Button } from "../ui/button";

const generateMockData = (count: number) => {
    return Array.from({ length: count }, (_, i) => {
        const price = Math.floor(Math.random() * 1000000);
        const amount = Math.floor(Math.random() * 10) + 1;
        return {
            id: i + 1,
            price: `${price}`,
            amount,
            total: price * amount,
            type: Math.random() > 0.5 ? 'buy' : 'sell',
        };
    });
};

const CustomTriangleBar = (props: { x?: number; y?: number; width?: number; height?: number; fill?: string; }) => {
    const { x, y, width, height, fill } = props;
    if (x && y && width && height && fill) {
        const points = [
            `${x},${y}`,
            `${x + width},${y + height / 2}`,
            `${x},${y + height}`,
        ].join(' ');
        return <polygon points={points} fill={fill} />;
    }
};


export default function RightSide() {
    const data = generateMockData(35);
    const [selected, setselected] = useState<number>(20);
    const [buttonSelected, setButtonSelected] = useState<string>('up');
    return (
        <Card className="w-full bg-[#181818] text-white border-none p-0 pb-3 h-full">
            <CardContent className="p-0">
                <div className="flex justify-between items-center mb-6 m-4">
                    <div className="flex items-center space-x-2">
                        <Button
                            className="rounded-md flex items-center justify-center"
                            size={'icon'}
                            variant={buttonSelected == "up" ? "outline" : "ghost"}
                            onClick={() => setButtonSelected('up')}
                        >
                            <TrendingUp className="h-4 w-4" color="red" />
                        </Button>
                        <Button
                            className="rounded-md flex items-center justify-center"
                            size={'icon'}
                            variant={buttonSelected == "down" ? "outline" : "ghost"}
                            onClick={() => setButtonSelected('down')}
                        >
                            <TrendingDown className="h-4 w-4" color="green" />
                        </Button>
                        <Button
                            className="rounded-md flex items-center justify-center"
                            size={'icon'}
                            variant={buttonSelected == "up-down" ? "outline" : "ghost"}
                            onClick={() => setButtonSelected('up-down')}
                        >
                            <TrendingUpDown className="h-4 w-4" color="violet" />
                        </Button>
                    </div>
                    <Select onValueChange={(e) => setselected(parseInt(e))}>
                        <SelectTrigger className="w-20 bg-gray-700 border-none">
                            <SelectValue placeholder="15" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="15">15</SelectItem>
                            <SelectItem value="20">20</SelectItem>
                            <SelectItem value="25">25</SelectItem>
                            <SelectItem value="30">30</SelectItem>
                            <SelectItem value="35">35</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="h-full">
                    <Table className="overflow-hidden">
                        <TableHeader>
                            <TableRow>
                                <TableHead className="text-right text-xs">Price (USDT)</TableHead>
                                <TableHead className="text-right text-xs">Amount (BTC)</TableHead>
                                <TableHead className="text-right text-xs">Total</TableHead>
                                <TableHead className="text-right text-xs"></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="overflow-hidden">
                            {data.slice(0, selected).map((row, index) => (
                                <TableRow key={index} className="relative overflow-hidden">
                                    <TableCell className="bg-transparent text-right h-12 relative z-10">{row.price}</TableCell>
                                    <TableCell className="bg-transparent text-right h-12 relative z-10">{row.amount / 10}</TableCell>
                                    <TableCell className="bg-transparent text-right h-12 relative z-10">{row.total}</TableCell>
                                    <TableCell
                                        className="h-full"
                                        style={{
                                            position: 'absolute',
                                            width: '80%',
                                            height: '100%',
                                            top: 0,
                                            right: 0,
                                        }}
                                    >
                                        <ResponsiveContainer style={{
                                            zIndex: -1
                                        }}>
                                            <BarChart
                                                data={[row]}
                                                layout="vertical"

                                            >
                                                <XAxis type="number" dataKey="total" orientation="top" hide reversed />
                                                <YAxis type="category" dataKey="amount" orientation="right" hide />
                                                <Tooltip />
                                                <Bar dataKey="total" isAnimationActive
                                                    shape={<CustomTriangleBar />}
                                                >
                                                    <Cell
                                                        key={`cell-${index}`}
                                                        fill={row.type === 'buy' ? '#22c55e' : '#ef4444'}
                                                    />

                                                </Bar>
                                            </BarChart>
                                        </ResponsiveContainer>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </CardContent>
        </Card>
    );
}
