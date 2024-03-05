import { createSchema } from "@ponder/core";

export default createSchema((p) => ({
  SwapAccepted: p.createTable({
    id: p.hex(),
    swapId: p.bigint(),
    owner: p.hex(),
    allowed: p.hex(),
    blockNumber: p.bigint(),
    blockTimestamp: p.bigint(),
    transactionHash: p.hex(),
  }),
  SwapCanceled: p.createTable({
    id: p.hex(),
    swapId: p.bigint(),
    owner: p.hex(),
    blockNumber: p.bigint(),
    blockTimestamp: p.bigint(),
    transactionHash: p.hex(),
  }),
  SwapCreated: p.createTable({
    id: p.hex(),
    swapId: p.bigint(),
    owner: p.hex(),
    allowed: p.hex(),
    blockNumber: p.bigint(),
    blockTimestamp: p.bigint(),
    transactionHash: p.hex(),
  }),
}));
