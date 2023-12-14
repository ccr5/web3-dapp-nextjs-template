import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import merge from 'lodash.merge'

import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, lightTheme, RainbowKitProvider, Theme } from '@rainbow-me/rainbowkit';
import { polygonMumbai } from 'viem/chains';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { Navbar } from '@/ui/components/app/navbar';

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || ""

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [polygonMumbai],
  [alchemyProvider({apiKey: process.env.NEXT_PUBLIC_ALCHEMY_KEY!})],
)

const { connectors } = getDefaultWallets({
  appName: 'Custom Dex',
  projectId: projectId!,
  chains
})

const config = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
})

const myTheme: Theme = merge(lightTheme(), {
  colors: {
    accentColor: '#000',
    accentColorForeground: '#fff'
  }
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={config}>
      <RainbowKitProvider chains={chains} theme={myTheme}>
        <Navbar />
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
