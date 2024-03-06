import Image from "next/image";
import { Hero } from "@/components/Hero/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-800 overflow-x-hidden">
      <Hero />
    </main>
  );
}
