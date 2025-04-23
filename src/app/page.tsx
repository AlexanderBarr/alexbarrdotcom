import Head from "next/head";
import Navbar from "./_components/Navbar";
import AboutSection from "./_components/AboutSection";
import AnimatedHeader from "./_components/header/animated-header";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-red-800 text-white">
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="My developer portfolio" />
      </Head>

      <main className="min-h-screen w-screen bg-gray-50 text-gray-900">
        <Navbar />
        <AnimatedHeader />
        <AboutSection />
      </main>
    </main>
  );
}
