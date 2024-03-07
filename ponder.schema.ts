import { createSchema } from "@ponder/core";

export default createSchema((p) => ({
  Status: p.createEnum(["CREATED", "ACCEPTED", "CANCELED"]),
  Database: p.createTable({
    id: p.hex(),
    status: p.enum("Status"),
    acceptee: p.hex(),
    owner: p.hex(),
    expiry: p.bigint(),
    bid: p.string(),
    ask: p.string(),
    swapId: p.bigint(),
    blockTimestamp: p.bigint(),
    transactionHash: p.hex(),
  }),
  // Status: p.createEnum(["CREATED", "ACCEPTED", "CANCELED"]),
  // Swaps: p.createTable({
  //   id: p.hex(),
  //   owner: p.hex(),
  //   swapId: p.bigint(),
  //   acceptee: p.hex(), 
  //   bid: p.bigint(),
  //   ask: p.bigint(),
  //   expiry: p.bigint(),
  //   status: p.enum("Status"),
  //   blockTimestamp: p.bigint(),
  //   transactionHash: p.hex(),
  // }),
}));
