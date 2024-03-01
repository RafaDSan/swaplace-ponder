import { createConfig } from "@ponder/core";
import { http } from "viem";

import { SwaplaceAbi } from "./abis/SwaplaceAbi";

export default createConfig({
  networks: {
    sepolia: {
      chainId: 11155111,
      transport: http(process.env.PONDER_RPC_URL_11155111),
    },
  },
  contracts: {
    Swaplace: {
      abi: SwaplaceAbi,
      address: "0x24809b2b374c5d70c2BdA6d65290e3fa3a2b378d",
      network: "sepolia",
      startBlock: 5206960,
    },
  },
});
