import { Eip1193Provider } from "ethers";
import { UTCTimestamp } from "lightweight-charts";

declare global {
    interface Window {
        ethereum: Eip1193Provider
    }
}

export interface Transaction {
    hash: string
    amount: string
    blockNumber: number
}

export interface FeatureCardProps {
    icon: any;
    title: string;
    description: string;
}

export interface BarDataProps {
    time: UTCTimestamp;
    volume: number;
    color: string;
}