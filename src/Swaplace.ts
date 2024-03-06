import { ponder } from "@/generated";

ponder.on("Swaplace:SwapAccepted", async ({ event, context }) => {
  const { SwapAccepted } = context.db;
  const { swapId, acceptee } = event.args;
  
  await SwapAccepted.create({
    id: `0x${swapId}` || null,
    data: {
      swapId,
      acceptee,
      blockNumber: event.block.number,
      blockTimestamp: event.block.timestamp,
      transactionHash: event.transaction.hash,
    },
  });
  console.log(event.args);
});

ponder.on("Swaplace:SwapCanceled", async ({ event, context }) => {
  const { SwapCanceled } = context.db;
  const { swapId, owner } = event.args;

  await SwapCanceled.create({
    id: `0x${swapId}` || null,
    data: {
      swapId,
      owner,
      blockNumber: event.block.number,
      blockTimestamp: event.block.timestamp,
      transactionHash: event.transaction.hash,
    },
  });
  console.log(event.args);
});

ponder.on("Swaplace:SwapCreated", async ({ event, context }) => {
  const { SwapCreated } = context.db;
  const { swapId, owner, expiry } = event.args;

  await SwapCreated.create({
    id: `0x${swapId}` || null,
    data: {
      swapId,
      owner,
      expiry,
      blockNumber: event.block.number,
      blockTimestamp: event.block.timestamp,
      transactionHash: event.transaction.hash,
    },
  });
  console.log(event.args);
});
