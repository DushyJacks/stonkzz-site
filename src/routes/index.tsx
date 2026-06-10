import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/Layout";
import { Hero } from "@/components/sections/Hero";
import { StatRow } from "@/components/sections/StatRow";
import { ProblemSolution } from "@/components/sections/ProblemSolution";
import { Features } from "@/components/sections/Features";
import { ReportPreview } from "@/components/sections/ReportPreview";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FAQ, ALL_FAQS } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { CalculatorsTeaser } from "@/components/sections/CalculatorsTeaser";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Stonkzz — India's Cleanest Daily Stock Market Report" },
      { name: "description", content: "Replace 8 morning tabs with one curated PDF on WhatsApp. NIFTY, FII/DII, global indices, commodities and AI news before 8:00 AM IST. From ₹149/month." },
      { property: "og:title", content: "Stonkzz — India's Cleanest Daily Stock Market Report" },
      { property: "og:description", content: "One WhatsApp PDF before market open. NIFTY, FII/DII, global indices, commodities and AI news. From ₹149/month." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      {/* 1. Hook */}
      <Hero />
      {/* 2. Proof at a glance */}
      <StatRow />
      {/* 3. The problem we solve */}
      <ProblemSolution />
      {/* 4. How it works (3 steps) */}
      <HowItWorks />
      {/* 5. What's inside the report */}
      <Features />
      {/* 6. See it — sample report */}
      <ReportPreview />
      {/* 7. Free calculators teaser */}
      <CalculatorsTeaser />
      {/* 8. Social proof */}
      <Testimonials />
      {/* 9. Price */}
      <Pricing />
      {/* 10. Objections */}
      <FAQ items={ALL_FAQS.slice(0, 5)} withCta />
      {/* 11. Close */}
      <FinalCTA />
    </SiteLayout>
  );
}
