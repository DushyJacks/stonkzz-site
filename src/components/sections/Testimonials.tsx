import { motion } from "framer-motion";
import { Star } from "lucide-react";
import TestimonialsComponent from "@/components/shadcn-studio/blocks/testimonials-component-01/testimonials-component-01";
import type { TestimonialItem } from "@/components/shadcn-studio/blocks/testimonials-component-01/testimonials-component-01";

const CAROUSEL_TESTIMONIALS: TestimonialItem[] = [
  {
    name: "Rahul M.",
    role: "Beginner Trader",
    company: "College Student",
    avatar: "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png?width=40&height=40&format=auto",
    rating: 5,
    content:
      "Stonkzz simplified technical analysis for me. I never thought I'd feel this confident reading candlestick patterns!",
  },
  {
    name: "Samantha D.",
    role: "Product Manager",
    company: "Fintech",
    avatar: "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png?width=40&height=40&format=auto",
    rating: 5,
    content:
      "The daily insights and charts feel like having a personal market analyst in my pocket. Love how clean the UI is.",
  },
  {
    name: "Naveen R.",
    role: "Software Engineer",
    company: "Bengaluru",
    avatar: "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png?width=40&height=40&format=auto",
    rating: 5,
    content:
      "I stopped following 5 different apps. Now I just check Stonkzz once in the morning — everything I need is there.",
  },
  {
    name: "Shweta N.",
    role: "Part-Time Trader",
    company: "Blogger",
    avatar: "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-4.png?width=40&height=40&format=auto",
    rating: 4,
    content:
      "I made back my subscription fee with one smart trade. That's how actionable their data is.",
  },
  {
    name: "Deepika S.",
    role: "Homemaker",
    company: "New Investor",
    avatar: "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png?width=40&height=40&format=auto",
    rating: 5,
    content:
      "I finally understand market sentiment. The way Stonkzz explains it with visuals and real data is just brilliant.",
  },
  {
    name: "Ajay K.",
    role: "Swing Trader",
    company: "Freelance Designer",
    avatar: "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png?width=40&height=40&format=auto",
    rating: 5,
    content:
      "In just 2 weeks, I've made smarter trades thanks to their analysis. Their NIFTY50 trends are on point!",
  },
];

export function Testimonials() {
  return (
    <section style={{ backgroundColor: "var(--color-paper-white)" }}>
      <div className="container-page py-12 md:py-16">
        {/* Shadcn testimonials carousel */}
        <TestimonialsComponent testimonials={CAROUSEL_TESTIMONIALS} />
      </div>
    </section>
  );
}
