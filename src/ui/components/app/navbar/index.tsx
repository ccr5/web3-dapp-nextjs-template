import Link from "next/link"
import { ConnectButton } from "@rainbow-me/rainbowkit"

function Navbar() {

  return (
    <div className="flex flex-row w-full bg-white justify-between items-center pl-5 pr-5 pt-2 pb-2 gap-2 border-paletteOne border-b-[0.5px] border-solid shadow-xl shadow-paletteOne">
      <Link href="/" passHref>
        <div className="flex items-center w-[100px] h">
          Logo
        </div>
      </Link>
      <ConnectButton />
    </div>
  )
}

export { Navbar }