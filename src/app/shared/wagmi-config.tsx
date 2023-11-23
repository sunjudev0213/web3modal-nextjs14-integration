'use client';

import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'

import { WagmiConfig } from 'wagmi'
import { arbitrum, mainnet } from 'viem/chains'

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = 'some-project-id'

// 2. Create wagmiConfig
const metadata = {
	name: 'Some Name',
	description: 'Some Name - Description',
	url: 'https://some-name-domain.domain',
	icons: ['https://some-name-domain.domain/images/icon.png']
}

const chains = [mainnet, arbitrum]
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })

// 3. Create modal
createWeb3Modal({
	wagmiConfig,
	projectId,
	chains,
	themeMode: 'dark',
})

export default function Web3Modal({ children }: React.PropsWithChildren) {
	return <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>;
}