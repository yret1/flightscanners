"use client"
import Image from "next/image";
import { Hero } from "@/components/Hero/Hero";
import { Reco } from "@/components/Recomended/Reco";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-800 overflow-x-hidden">
      <Hero />
      <section className="h-40 bg-purple-500"></section>
      <Reco />
    </main>
  );
}
