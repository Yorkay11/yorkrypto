import Link from "next/link";
import FeaturedCard from "../smallComponents/FeaturedCard";
import Navbar from "../smallComponents/Navbar";
import WalletConnectButton from "../smallComponents/WalletConnect";
import { ArrowRight, BarChart3, Shield, Zap } from "lucide-react";
import { Button } from "../ui/button";
import CarouselBanner from "../smallComponents/CarouselBanner";
import TradingViewChart from "../smallComponents/Chart";
import Change from "../smallComponents/Change";
import LatestTransactionsTable from "../smallComponents/LatestTransactions";
import Feeling from "../smallComponents/Feeling";
import AllOrders from "../smallComponents/AllOrders";
import AllPairs from "../smallComponents/AllPairs";
import RighSide from "../smallComponents/RightSide";


export default function Landing() {
  return (
    <div className="h-full w-full">
      <div
        className="flex flex-col lg:flex-row w-full py-8 px-[5%] items-start bg-black gap-4 min-h-[150vh] flex-1 relative"
      >
        <aside className="w-full lg:w-[40%] h-full flex-col gap-4 flex min-h-[150vh] rounded-lg order-2 lg:order-none">
          <AllOrders /> 
          <AllPairs /> 
        </aside>
        <main className="relative to-black-600 h-full w-full space-y-4 min-h-[150vh] order-0 lg:order-none">
          <Change />
          <TradingViewChart />
          <LatestTransactionsTable />
          <Feeling />
        </main>
        <aside className="w-full lg:w-[40%] h-full flex-col gap-8 flex  rounded-lg order-1 lg:order-none">
          <RighSide />
        </aside> 
      </div>
    </div>
  )
}