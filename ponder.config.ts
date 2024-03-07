import { createConfig } from "@ponder/core";
import { http } from "viem";
import { Alchemy } from "alchemy-sdk";

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
      address: "0xD8E3580C1b6f117c5b35DdD01dd9e50d9487501D",
      network: "sepolia",
      startBlock: 4926698,
    },
  },
});
