'use client'

import React, { useState } from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Transaction {
  id: number
  accountName: string
  dataUsage: string
  extractedData: string
  currencyEarned: string
  details: string
}

const generateMockData = (count: number): Transaction[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    accountName: `Account ${i + 1}`,
    dataUsage: `${Math.floor(Math.random() * 1000)} MB`,
    extractedData: `${Math.floor(Math.random() * 100)} records`,
    currencyEarned: `$${(Math.random() * 100).toFixed(2)}`,
    details: `Additional details for transaction ${i + 1}. This could include more specific information about the data usage, extraction process, or currency calculations.`
  }))
}

const transactions = generateMockData(10)

export default function LatestTransactionsTable() {
  const [expandedRows, setExpandedRows] = useState<Set<number>>(new Set())

  const toggleRow = (id: number) => {
    const newExpandedRows = new Set(expandedRows)
    if (newExpandedRows.has(id)) {
      newExpandedRows.delete(id)
    } else {
      newExpandedRows.add(id)
    }
    setExpandedRows(newExpandedRows)
  }

  return (
    <Card className="w-full bg-[#181818]">
      <CardHeader>
        <CardTitle>Latest Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">#</TableHead>
              <TableHead>Name of Account</TableHead>
              <TableHead>Data Usage</TableHead>
              <TableHead>Extracted Data</TableHead>
              <TableHead>Currency Earned</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction) => (
              <React.Fragment key={transaction.id}>
                <TableRow>
                  <TableCell className='flex flex-row items-center'>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="p-2 bg-transparent hover:bg-transparent"
                      onClick={() => toggleRow(transaction.id)}
                    >
                      {expandedRows.has(transaction.id) ? (
                        <ChevronDown className="h-4 w-4" />
                      ) : (
                        <ChevronRight className="h-4 w-4" />
                      )}
                    </Button>
                    {transaction.id}
                  </TableCell>
                  <TableCell>{transaction.accountName}</TableCell>
                  <TableCell>{transaction.dataUsage}</TableCell>
                  <TableCell>{transaction.extractedData}</TableCell>
                  <TableCell>{transaction.currencyEarned}</TableCell>
                </TableRow>
                {expandedRows.has(transaction.id) && (
                  <TableRow>
                    <TableCell colSpan={5} className="bg-muted">
                      <div className="p-4">
                        <h4 className="font-semibold mb-2">Additional Details</h4>
                        <p>{transaction.details}</p>
                      </div>
                    </TableCell>
                  </TableRow>
                )}
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}