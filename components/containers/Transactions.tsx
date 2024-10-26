'use client'

import { useState, useEffect } from 'react'
import { ethers } from 'ethers'
import TransactionList from '../smallComponents/TransactionList'
import Navbar from '../smallComponents/Navbar'

export default function Transactions() {
  const [walletAddress, setWalletAddress] = useState<string | null>(null)

  useEffect(() => {
    async function checkWalletConnection() {
      if (typeof window.ethereum !== 'undefined') {
        const provider = new ethers.BrowserProvider(window.ethereum)
        try {
          const accounts = await provider.listAccounts()
          if (accounts.length > 0) {
            setWalletAddress(accounts[0].toString())
          }
        } catch (error) {
          console.error("An error occurred while checking the wallet connection:", error)
        }
      }
    }

    checkWalletConnection()
  }, [])

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Transactions</h1>
          {walletAddress ? (
            <TransactionList address={walletAddress} />
          ) : (
            <p className="text-xl text-gray-600">
              Veuillez connecter votre portefeuille pour voir vos transactions.
            </p>
          )}
        </div>
      </main>
    </div>
  )
}