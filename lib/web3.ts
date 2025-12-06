import { ethers } from 'ethers'

export interface WalletState {
  address: string | null
  isConnected: boolean
  provider: ethers.BrowserProvider | null
  signer: ethers.JsonRpcSigner | null
}

export async function connectWallet(): Promise<WalletState> {
  if (typeof window === 'undefined' || !window.ethereum) {
    throw new Error('MetaMask is not installed')
  }

  try {
    const provider = new ethers.BrowserProvider(window.ethereum)
    await provider.send('eth_requestAccounts', [])
    const signer = await provider.getSigner()
    const address = await signer.getAddress()

    return {
      address,
      isConnected: true,
      provider,
      signer,
    }
  } catch (error) {
    console.error('Error connecting wallet:', error)
    throw error
  }
}

export async function disconnectWallet(): Promise<void> {
  // Wallet disconnection logic
  return Promise.resolve()
}

export async function getBalance(address: string, provider: ethers.BrowserProvider): Promise<string> {
  try {
    const balance = await provider.getBalance(address)
    return ethers.formatEther(balance)
  } catch (error) {
    console.error('Error getting balance:', error)
    throw error
  }
}

