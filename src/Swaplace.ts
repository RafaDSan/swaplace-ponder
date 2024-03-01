import { ponder } from "@/generated";

ponder.on("Swaplace:SwapAccepted", async ({ event, context }) => {
  console.log(event.args);
});

ponder.on("Swaplace:SwapCanceled", async ({ event, context }) => {
  console.log(event.args);
});

ponder.on("Swaplace:SwapCreated", async ({ event, context }) => {
  console.log(event.args);
});
