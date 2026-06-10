// WhatsApp deeplink helpers
export const WA_NUMBER = "919025569271"; // +91 90255 69271

export function waLink(message: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WA_DEFAULT = waLink(
  "Hi Stonkzz! I'd like to subscribe to the daily WhatsApp market report. Please share the plan options."
);

export function waPlan(plan: "Monthly" | "Half-Yearly" | "Annual", price: string) {
  return waLink(
    `Hi Stonkzz! I'd like to subscribe to the ${plan} plan (${price}). Please help me get started.`
  );
}
