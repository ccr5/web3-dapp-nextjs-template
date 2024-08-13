import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import merge from 'lodash.merge'

import '@rainbow-me/rainbowkit/styles.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider, http } from 'wagmi'
import { mainnet } from 'wagmi/chains'
import { lightTheme, RainbowKitProvider, Theme } from '@rainbow-me/rainbowkit'
import { getDefaultConfig } from '@rainbow-me/rainbowkit'

import { Navbar } from '@/ui/components/app/navbar';

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || ""

const config = getDefaultConfig({
  appName: 'Custom Dex',
  projectId: projectId,
  chains: [mainnet],
  transports: {
    [mainnet.id]: http(),
  },
})

const queryClient = new QueryClient()

const myTheme: Theme = merge(lightTheme(), {
  colors: {
    accentColor: '#000',
    accentColorForeground: '#fff'
  }
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <Navbar />
          <Component {...pageProps} />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
