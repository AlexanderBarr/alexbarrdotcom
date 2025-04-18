import Head from "next/head";
import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import AboutSection from "./_components/AboutSection";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-red-800 text-white">
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="My developer portfolio" />
      </Head>

      <main className="min-h-screen bg-gray-50 text-gray-900">
        <Navbar />
        <Hero />
        <AboutSection />
      </main>
    </main>
  );
}
