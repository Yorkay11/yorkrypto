"use client"

import { Eip1193Provider, ethers } from 'ethers'
import { useEffect, useState } from 'react'
import { Button } from '../ui/button'



export default function WalletConnectButton() {
  const [walletAddress, setWalletAddress] = useState<string | null>(null)
  const [isConnecting, setIsConnecting] = useState(false)

  useEffect(() => {
    checkIfWalletIsConnected()
  }, [])

  async function checkIfWalletIsConnected() {
    if (window.ethereum) {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum)
        const accounts = await provider.listAccounts()
        if (accounts.length > 0) {
          setWalletAddress(accounts[0].address);
        }
      } catch (error) {
        console.error("An error occurred while checking the wallet connection:", error)
      }
    }
  }

  async function connectWallet() {
    if (window.ethereum) {
      try {
        setIsConnecting(true)
        await window.ethereum.request({ method: 'eth_requestAccounts' })
        const provider = new ethers.BrowserProvider(window.ethereum)
        const signer = provider.getSigner()
        const address = await (await signer).getAddress()
        setWalletAddress(address)
      } catch (error) {
        console.error("An error occurred while connecting the wallet:", error)
      } finally {
        setIsConnecting(false)
      }
    } else {
      alert("Please install MetaMask!")
    }
  }

  function disconnectWallet() {
    setWalletAddress(null)
  }

  if (walletAddress) {
    return (
      <div className="flex items-center">
        <Button
          onClick={disconnectWallet}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
        >
          Logout
        </Button>
      </div>
    )
  }

  return (
    <Button
      onClick={connectWallet}
      disabled={isConnecting}
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-2 rounded-md"
    >
      {isConnecting ? 'Connexion...' : 'Connect Wallet'}
    </Button>
  )
}
