import { JSX } from "react";
import { assets } from "./images/assets"
import { FaArrowDown, FaArrowUp, FaBitcoin, FaChartLine, FaEthereum, FaTimes } from "react-icons/fa";
import { IconBaseProps } from "react-icons/lib";
import { SiBinance, SiCardano, SiChainlink, SiDogecoin, SiLitecoin, SiMonero, SiPolkadot, SiRipple, SiSolana, SiStellar } from "react-icons/si";


export const portfolioData = [
  { name: 'ETH', value: 5000 },
  { name: 'BTC', value: 8000 },
  { name: 'USDT', value: 3000 },
  { name: 'LINK', value: 1500 },
  { name: 'UNI', value: 1000 },
]


export const images = [
  {
    id: 1,
    image: assets.first
  },
  {
    id: 2,
    image: assets.second
  },
  {
    id: 3,
    image: assets.third
  },
  {
    id: 4,
    image: assets.fourth
  },
  {
    id: 5,
    image: assets.fifth
  },
]

export const inflations = [
  {
    icon: <FaTimes className="h-4 w-4" color="gray" />,
    amount: "670.11",
    taux: 1.23,
  },
  {
    icon: <FaArrowDown className="h-4 w-4" color="gray" />,
    amount: "602.11",
    taux: -1.30,
  },
  {
    icon: <FaArrowUp className="h-4 w-4" color="gray" />,
    amount: "409.11",
    taux: -1.98,
  },
  {
    icon: <FaChartLine className="h-4 w-4" color="gray" />,
    amount: "401.11",
    taux: 1.30,
  },
]


export const cryptocurrencies = [
  {
    name: 'Bitcoin',
    symbol: 'BTC',
    icon: (props: JSX.IntrinsicAttributes & IconBaseProps) => <FaBitcoin className="h-4 w-4" color="#F7931A" {...props} />,
    amount: '4,238209',
    total: '10,21092',
    color: '#F7931A'
  },
  {
    name: 'Ethereum',
    symbol: 'ETH',
    icon: (props: JSX.IntrinsicAttributes & IconBaseProps) => <FaEthereum className="h-4 w-4" color="#627EEA" {...props} />,
    amount: '4,238209',
    total: '10,21092',
    color: "#627EEA"
  },
  {
    name: 'Ripple',
    symbol: 'XRP',
    icon: (props: JSX.IntrinsicAttributes & IconBaseProps) => <SiRipple className="h-4 w-4" color="#00AAE4" {...props} />,
    amount: '4,238209',
    total: '10,21092',
    color:"#00AAE4"  },
  {
    name: 'Litecoin',
    symbol: 'LTC',
    icon: (props: JSX.IntrinsicAttributes & IconBaseProps) => <SiLitecoin className="h-4 w-4" color="#BEBEBE" {...props} />,
    amount: '4,238209',
    total: '10,21092',
    color:"#BEBEBE"
  },
  {
    name: 'Cardano',
    symbol: 'ADA',
    icon: (props: JSX.IntrinsicAttributes & IconBaseProps) => <SiCardano className="h-4 w-4" color="#0033AD" {...props} />,
    amount: '4,238209',
    total: '10,21092',
    color:"#0033AD"
  },
  {
    name: 'Polkadot',
    symbol: 'DOT',
    icon: (props: JSX.IntrinsicAttributes & IconBaseProps) => <SiPolkadot className="h-4 w-4" color="#E6007A" {...props} />,
    amount: '4,238209',
    total: '10,21092',
    color:"#E6007A"
  },
  {
    name: 'Binance Coin',
    symbol: 'BNB',
    icon: (props: JSX.IntrinsicAttributes & IconBaseProps) => <SiBinance className="h-4 w-4" color="#F3BA2F" {...props} />,
    amount: '4,238209',
    total: '10,21092',
    color:"#F3BA2F"
  },
  {
    name: 'Solana',
    symbol: 'SOL',
    icon: (props: JSX.IntrinsicAttributes & IconBaseProps) => <SiSolana className="h-4 w-4" color="#3A3A3A" {...props} />,
    amount: '4,238209',
    total: '10,21092',
    color:"#3A3A3A"
  },
  {
    name: 'Dogecoin',
    symbol: 'DOGE',
    icon: (props: JSX.IntrinsicAttributes & IconBaseProps) => <SiDogecoin className="h-4 w-4" color="#C2A633" {...props} />,
    amount: '4,238209',
    total: '10,21092',
    color:"#C2A633"
  },
  {
    name: 'Chainlink',
    symbol: 'LINK',
    icon: (props: JSX.IntrinsicAttributes & IconBaseProps) => <SiChainlink className="h-4 w-4" color="#375BD2" {...props} />,
    amount: '4,238209',
    total: '10,21092',
    color:"#375BD2"
  },
  {
    name: 'Stellar',
    symbol: 'XLM',
    icon: (props: JSX.IntrinsicAttributes & IconBaseProps) => <SiStellar className="h-4 w-4" color="#14B6E7" {...props} />,
    amount: '4,238209',
    total: '10,21092',
    color:"#14B6E7"
  },
  {
    name: 'Monero',
    symbol: 'XMR',
    icon: (props: JSX.IntrinsicAttributes & IconBaseProps) => <SiMonero className="h-4 w-4" color="#FF6600" {...props} />,
    amount: '4,238209',
    total: '10,21092',
    color:"#FF6600"
  }
];
