'use client'

import React, { useState, useEffect, useRef, useMemo } from 'react'
import { createChart, ColorType, UTCTimestamp, ISeriesApi } from 'lightweight-charts'
import { subDays, subHours, subMinutes } from 'date-fns'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts'
import { BarDataProps } from '@/types/interfaces'

type TimeFrame = '15min' | '1h' | '4h' | '1d'
type Cryptocurrency = 'BTC' | 'ETH' | 'XRP' | 'LTC'

interface CandleData {
  time: UTCTimestamp
  open: number
  high: number
  low: number
  close: number
}

const timeFrames: TimeFrame[] = ['15min', '1h', '4h', '1d']
const cryptocurrencies: Cryptocurrency[] = ['BTC', 'ETH', 'XRP', 'LTC']

const generateMockData = (timeFrame: TimeFrame, count: number): CandleData[] => {
  const now = new Date()
  const data: CandleData[] = []

  let previousClose = 50000

  for (let i = count - 1; i >= 0; i--) {
    let time: Date
    switch (timeFrame) {
      case '15min':
        time = subMinutes(now, i * 15)
        break
      case '1h':
        time = subHours(now, i)
        break
      case '4h':
        time = subHours(now, i * 4)
        break
      case '1d':
        time = subDays(now, i)
        break
    }

    const priceChange = (Math.random() - 0.5) * 500

    const open = previousClose
    const close = open + priceChange
    const high = Math.max(open, close) + Math.random() * 100
    const low = Math.min(open, close) - Math.random() * 100

    data.push({
      time: (time.getTime() / 1000) as UTCTimestamp,
      open,
      high,
      low,
      close
    })

    previousClose = close
  }

  return data
}


export default function TradingViewChart() {
  const [timeFrame, setTimeFrame] = useState<TimeFrame>('1h')
  const [cryptocurrency, setCryptocurrency] = useState<Cryptocurrency>('BTC')
  const chartContainerRef = useRef<HTMLDivElement>(null)
  const chartRef = useRef<ReturnType<typeof createChart> | null>(null)
  const candleSeriesRef = useRef<ISeriesApi<'Candlestick'> | null>(null)
  const [barChartData, setBarChartData] = useState<BarDataProps[]>([])
  const [visibleRange, setVisibleRange] = useState<{ start: number; end: number } | null>(null);


  useEffect(() => {
    if (chartContainerRef.current) {
      chartRef.current = createChart(chartContainerRef.current, {
        width: chartContainerRef.current.clientWidth,
        height: 400,
        layout: {
          background: { type: ColorType.Solid, color: '#181818' },
          textColor: '#ffffff',
        },
        grid: {
          vertLines: { color: '#343434' },
          horzLines: { color: '#343434' },
        },
        rightPriceScale: {
          borderColor: '#343434',
        },
        timeScale: {
          borderColor: '#343434',
        },
        handleScale: {
          mouseWheel: false,
        }
      })

      candleSeriesRef.current = chartRef.current.addCandlestickSeries({
        upColor: '#22c55e',
        downColor: '#ef4444',
        borderDownColor: '#ef4444',
        borderUpColor: '#22c55e',
        wickDownColor: '#ef4444',
        wickUpColor: '#22c55e',
      })

      const newData = generateMockData(timeFrame, 1000)
      candleSeriesRef.current.setData(newData)



      const handleResize = () => {
        chartRef.current?.applyOptions({ width: chartContainerRef.current!.clientWidth })
      }
      window.addEventListener('resize', handleResize)

      return () => {
        window.removeEventListener('resize', handleResize)
        chartRef.current?.remove()
      }
    }
  }, [])

  useEffect(() => {
    if (candleSeriesRef.current) {
      const newData = generateMockData(timeFrame, 1000)
      candleSeriesRef.current.setData(newData)
      chartRef.current?.timeScale().fitContent()

      const barData = newData.map(item => ({
        time: item.time,
        volume: item.close - item.open,
        color: item.close > item.open ? '#22c55e' : '#ef4444',
      }))
      setBarChartData(barData)

      chartRef.current?.timeScale().setVisibleRange({
        from: newData[newData.length - 50].time,
        to: newData[newData.length - 1].time,
      })
    }
  }, [timeFrame, cryptocurrency])



  useEffect(() => {
    if (chartRef.current) {
      const timeScale = chartRef.current.timeScale();

      const onVisibleTimeRangeChange = () => {
        const visibleRange = timeScale.getVisibleRange();
        if (visibleRange) {
          const start = visibleRange.from;
          const end = visibleRange.to;


          if (typeof (start) == 'number' && typeof (end) == 'number') {
            setVisibleRange({ start, end });
          }

        }
      };

      timeScale.subscribeVisibleTimeRangeChange(onVisibleTimeRangeChange);

      return () => {
        timeScale.unsubscribeVisibleTimeRangeChange(onVisibleTimeRangeChange);
      };
    }
  }, []);


  const filteredBarData = useMemo(() => {
    if (!visibleRange) return barChartData;
    return barChartData.filter(item => item.time >= visibleRange.start && item.time <= visibleRange.end);
  }, [barChartData, visibleRange])


  const handleTimeFrameChange = (value: TimeFrame) => {
    setTimeFrame(value)
  }

  const handleCryptocurrencyChange = (value: Cryptocurrency) => {
    setCryptocurrency(value)
  }


  return (
    <Card className="w-full h-auto mx-auto bg-[#181818]">
      <CardHeader>
        <CardTitle>Charts</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between mb-4">
          <Select value={timeFrame} onValueChange={handleTimeFrameChange}>
            <SelectTrigger className="w-auto">
              <SelectValue placeholder="Select time frame" />
            </SelectTrigger>
            <SelectContent>
              {timeFrames.map((tf) => (
                <SelectItem key={tf} value={tf}>{tf}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={cryptocurrency} onValueChange={handleCryptocurrencyChange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select cryptocurrency" />
            </SelectTrigger>
            <SelectContent>
              {cryptocurrencies.map((crypto) => (
                <SelectItem key={crypto} value={crypto}>{crypto}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div ref={chartContainerRef} className="h-[400px]" />
        <div className="h-[200px] bottom-0 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={filteredBarData.slice(filteredBarData.length - 50)}>
              <YAxis orientation='right' tick={{ fill: '#181818' }} stroke="#181818" />
              <Tooltip />
              <Bar dataKey="volume" isAnimationActive={false}>
                {filteredBarData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
