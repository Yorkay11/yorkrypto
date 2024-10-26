'use client'

import { useState, useEffect } from 'react'
import { ethers } from 'ethers'

export default function BalanceDisplay({ address }: { address: string }) {
  const [balance, setBalance] = useState<string | null>(null)

  useEffect(() => {
    async function fetchBalance() {
      if (typeof window.ethereum !== 'undefined' && address) {
        const provider = new ethers.BrowserProvider(window.ethereum)
        try {
          const balance = await provider.getBalance(address)
          setBalance(ethers.formatEther(balance))
        } catch (error) {
          console.error("An error occurred while fetching the balance:", error)
        }
      }
    }

    fetchBalance()
  }, [address])

  if (!balance) {
    return <div>Chargement du solde...</div>
  }

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">Solde ETH</h2>
      <p className="text-3xl font-bold text-blue-600">{parseFloat(balance).toFixed(4)} ETH</p>
    </div>
  )
}