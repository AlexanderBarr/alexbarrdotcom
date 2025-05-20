// app/page.tsx

import Navbar from "./_components/Navbar";
// import AboutSection from "./_components/AboutSection";
import AnimatedHeader from "./_components/header/AnimatedHeader";

export const metadata = {
  title: "My Portfolio",
  description: "My developer portfolio",
};

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-auto bg-gray-50 text-gray-900">
      <Navbar />
      <AnimatedHeader />
      {/* <AboutSection /> */}
    </main>
  );
}
