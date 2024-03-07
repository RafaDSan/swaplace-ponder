import { ponder } from "@/generated";
//import { ethers } from "ethers";

// ponder.on("Swaplace:SwapAccepted", async ({ event, context }) => { //mudar para updated
//   const { Database } = context.db;
//   const { swapId, acceptee } = event.args;

//   await Database.create({
//     id: `0x${swapId}`,
//     data: {
//       swapId,
//       acceptee,
//       blockTimestamp: event.block.timestamp,
//       transactionHash: event.transaction.hash,  
//       status: "ACCEPTED",
//     },
    
    
//   });
//   console.log(event.args);
// });

ponder.on("Swaplace:SwapCanceled", async ({ event, context }) => { //mudar para updated
  const { Database } = context.db;
  const { swapId } = event.args;

  await Database.update({
    id: `0x${swapId}`,
    data: {
      blockTimestamp: event.block.timestamp,
      transactionHash: event.transaction.hash,
      status: "CANCELED",
    },
  });
});

ponder.on("Swaplace:SwapCreated", async ({ event, context }) => {
  const { client } = context;
  const { Swaplace } = context.contracts;
  const { Database } = context.db;
  const { swapId, owner, expiry } = event.args;

  const contractResponse = await client.readContract({
    abi: Swaplace.abi,
    address: Swaplace.address,
    functionName: "getSwap",
    args: [event.args.swapId],
  });
  

  // const provider = new ethers.providers.JsonRpcProvider("https://eth-sepolia.g.alchemy.com/v2/D4cZZW64N8gn71Xp8Vk5lr6CNlLMCdqr");
  // console.log("teste");
  // const network = (await provider.getNetwork()).chainId;
  // console.log("providerRPCLOG:", network);
  // const contract = new ethers.Contract(Swaplace.address, Swaplace.abi, provider);
  // const contractResponse = await contract.getSwap(event.args.swapId);
  
  await Database.create({
    id: `0x${swapId}`,
    data: {
      swapId,
      owner,
      acceptee: contractResponse.allowed,
      expiry,
      bid: JSON.stringify(contractResponse.biding),
      ask: JSON.stringify(contractResponse.asking),
      blockTimestamp: event.block.timestamp,
      transactionHash: event.transaction.hash,
      status: "CREATED",
    },

  });
});
