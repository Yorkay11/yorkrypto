'use client'

import { useState, useEffect } from 'react'
import { ethers } from 'ethers'
import BalanceDisplay from '../smallComponents/Balance'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Input } from '../ui/input'
import { portfolioData } from '@/assets/data'

export default function Dashboard() {
  const [walletAddress, setWalletAddress] = useState<string | null>(null)
  const [sendAmount, setSendAmount] = useState('')
  const [recipientAddress, setRecipientAddress] = useState('')


  useEffect(() => {
    async function checkWalletConnection() {
      if (typeof window.ethereum !== 'undefined') {
        const provider = new ethers.BrowserProvider(window.ethereum)
        try {
          const accounts = await provider.listAccounts()
          if (accounts.length > 0) {
            setWalletAddress(accounts[0].address)
          }
        } catch (error) {
          console.error("An error occurred while checking the wallet connection:", error)
        }
      }
    }

    checkWalletConnection()
  }, [])

  const handleSend = async () => {
    if (!walletAddress || !sendAmount || !recipientAddress) return

    try {
      const provider = new ethers.BrowserProvider(window.ethereum)
      const signer = provider.getSigner()
      const tx = await (await signer).sendTransaction({
        to: recipientAddress,
        value: ethers.parseEther(sendAmount)
      })
      await tx.wait()
      alert('Transaction sent successfully!')
      setSendAmount('')
      setRecipientAddress('')
    } catch (error) {
      console.error('Error sending transaction:', error)
      alert('Error sending transaction. Please try again.')
    }
  }

  return (
    <div className="min-h-screen bg-black dark:bg-black">
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Dashboard</h1>
          {walletAddress ? (
            <>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Bienvenue, {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Solde ETH</CardTitle>
                    <CardDescription>Votre solde Ethereum actuel</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BalanceDisplay address={walletAddress} />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Envoyer des ETH</CardTitle>
                    <CardDescription>Transférer des ETH à une autre adresse</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <Input
                        type="text"
                        placeholder="Adresse du destinataire"
                        value={recipientAddress}
                        onChange={(e) => setRecipientAddress(e.target.value)}
                      />
                      <Input
                        type="number"
                        placeholder="Montant en ETH"
                        value={sendAmount}
                        onChange={(e) => setSendAmount(e.target.value)}
                      />
                      <Button onClick={handleSend}>Envoyer</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <Tabs defaultValue="portfolio" className="w-full">
                <TabsList>
                  <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
                  <TabsTrigger value="activity">Activité récente</TabsTrigger>
                </TabsList>
                <TabsContent value="portfolio">
                  <Card>
                    <CardHeader>
                      <CardTitle>Répartition du Portfolio</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[400px]">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={portfolioData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="value" fill="#8884d8" />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="activity">
                  <Card>
                    <CardHeader>
                      <CardTitle>Activité récente</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-4">
                        <li className="flex justify-between items-center">
                          <span>Achat ETH</span>
                          <span className="text-green-500">+0.5 ETH</span>
                        </li>
                        <li className="flex justify-between items-center">
                          <span>Vente BTC</span>
                          <span className="text-red-500">-0.1 BTC</span>
                        </li>
                        <li className="flex justify-between items-center">
                          <span>Réception USDT</span>
                          <span className="text-green-500">+100 USDT</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>Connexion requise</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  Veuillez connecter votre portefeuille pour voir votre dashboard.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  )
}