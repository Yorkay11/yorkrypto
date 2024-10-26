import Link from 'next/link'
import WalletConnectButton from './WalletConnect'
// import { ModeToggle } from './ThemeToggle'

export default function Navbar() {
  return (
    <nav className="shadow-md text-gray-900 dark:text-white bg-[#181818] py-4 px-[5%] rounded-t-md">
      <div className="">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-gray-900 dark:text-white font-bold text-2xl">
              YorKrypto
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <Link href="/" className="border-transparent text-gray-500 dark:text-gray-200 hover:border-blue-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
              Home
            </Link>
            <Link href="/dashboard" className="border-transparent text-gray-500 dark:text-gray-200 hover:border-blue-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
              Dashboard
            </Link>
            <Link href="/transactions" className="border-transparent text-gray-500 dark:text-gray-200 hover:border-blue-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
              Transactions
            </Link>
          </div>
          <div className=" sm:flex sm:items-center gap-2">
            <WalletConnectButton />
            {/* <ModeToggle /> */}
          </div>
        </div>
      </div>
    </nav>
  )
}