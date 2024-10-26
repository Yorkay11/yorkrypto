import { UTCTimestamp } from "lightweight-charts";

export interface Window {
    ethereum?: any
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