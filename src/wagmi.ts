import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import {
  arbitrum,
  base,
  mainnet,
  optimism,
  polygon,
  polygonAmoy,
  sepolia,
} from "wagmi/chains";

export const config = getDefaultConfig({
  appName: "Web3 Swap APP",
  projectId: "YOUR_PROJECT_ID",
  chains: [
    polygon,
    mainnet,
    optimism,
    arbitrum,
    base,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true"
      ? [polygonAmoy, sepolia]
      : []),
  ],
  ssr: true,
});
