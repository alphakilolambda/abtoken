'use client'

import { useState, useEffect } from 'react'
import { Wallet, Check } from 'lucide-react'
import { connectWallet, disconnectWallet, getBalance, type WalletState } from '@/lib/web3'

export default function WalletConnect() {
  const [walletState, setWalletState] = useState<WalletState>({
    address: null,
    isConnected: false,
    provider: null,
    signer: null,
  })
  const [balance, setBalance] = useState<string>('0')
  const [isConnecting, setIsConnecting] = useState(false)

  useEffect(() => {
    // Check if wallet is already connected
    if (typeof window !== 'undefined' && window.ethereum) {
      window.ethereum.request({ method: 'eth_accounts' }).then((accounts: unknown) => {
        if (Array.isArray(accounts) && accounts.length > 0) {
          handleConnect()
        }
      })
    }
  }, [])

  const handleConnect = async () => {
    setIsConnecting(true)
    try {
      const state = await connectWallet()
      setWalletState(state)
      
      if (state.provider && state.address) {
        const bal = await getBalance(state.address, state.provider)
        setBalance(bal)
      }
    } catch (error) {
      console.error('Failed to connect wallet:', error)
      alert('Failed to connect wallet. Please make sure MetaMask is installed.')
    } finally {
      setIsConnecting(false)
    }
  }

  const handleDisconnect = async () => {
    try {
      await disconnectWallet()
      setWalletState({
        address: null,
        isConnected: false,
        provider: null,
        signer: null,
      })
      setBalance('0')
    } catch (error) {
      console.error('Failed to disconnect wallet:', error)
    }
  }

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`
  }

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Connect your wallet
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Start staking, trading, and earning with $AB Token. Connect your wallet in seconds.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
            {!walletState.isConnected ? (
              <div className="text-center">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-black rounded-full mb-4">
                    <Wallet className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-2">
                    Connect Your Wallet
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Connect with MetaMask, WalletConnect, or other supported wallets
                  </p>
                </div>
                <button
                  onClick={handleConnect}
                  disabled={isConnecting}
                  className="bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isConnecting ? 'Connecting...' : 'Connect Wallet'}
                </button>
              </div>
            ) : (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Check className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Connected</p>
                      <p className="font-mono text-sm font-semibold text-black">
                        {walletState.address && formatAddress(walletState.address)}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={handleDisconnect}
                    className="px-4 py-2 border border-gray-300 text-gray-700 hover:border-black hover:text-black transition-colors text-sm"
                  >
                    Disconnect
                  </button>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Balance</span>
                      <span className="font-semibold text-black">{parseFloat(balance).toFixed(4)} ETH</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <button className="px-4 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                      Stake Tokens
                    </button>
                    <button className="px-4 py-3 border border-black text-black rounded-lg hover:bg-black hover:text-white transition-colors">
                      Buy $AB
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    ethereum?: {
      request: (args: { method: string; params?: unknown[] }) => Promise<unknown>
    }
  }
}

