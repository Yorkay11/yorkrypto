'use client'

import { useState, useEffect } from 'react'
import { ethers } from 'ethers'

interface Transaction {
  hash: string
  amount: string
  blockNumber: number
}

export default function TransactionList({ address }: { address: string }) {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchTransactions(address: string) {
      if (typeof window.ethereum !== 'undefined' && address) {
        const provider = new ethers.BrowserProvider(window.ethereum)
        try {
          setIsLoading(true)
    
          const blockNumber: number = await provider.getBlockNumber()
    
          const block = await provider.getBlock(blockNumber, true)

          const transactionsInBlock = block?.transactions as unknown as ethers.TransactionResponse[]
    
          const addressTransactions = transactionsInBlock.filter(
            (tx: ethers.TransactionResponse) =>
              tx.from.toLowerCase() === address.toLowerCase() || tx.to?.toLowerCase() === address.toLowerCase()
          )
    
          const formattedTransactions: Transaction[] = addressTransactions.map((tx: ethers.TransactionResponse) => ({
            hash: tx.hash,
            amount: ethers.formatEther(tx.value),
            blockNumber: tx.blockNumber || 0,
          }))
    
          setTransactions(formattedTransactions)
        } catch (error) {
          console.error("An error occurred while fetching transactions:", error)
        } finally {
          setIsLoading(false)
        }
      }
    }

    fetchTransactions(address)
  }, [address])

  if (isLoading) {
    return <div>Chargement des transactions...</div>
  }

  if (transactions.length === 0) {
    return <div>Aucune transaction disponible</div>
  }

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hash</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Montant (ETH)</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Numéro de bloc</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {transactions.map((tx) => (
            <tr key={tx.hash}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{tx.hash.slice(0, 10)}...</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{parseFloat(tx.amount).toFixed(4)}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{tx.blockNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
