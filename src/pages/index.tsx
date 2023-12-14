import { Inika } from 'next/font/google'

const inika = Inika({ weight: '400', subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`flex flex-row min-w-screen ${inika.className} p-4`}>
      Hello Web3!
    </main>
  )
}
