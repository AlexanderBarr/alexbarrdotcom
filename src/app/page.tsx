// app/page.tsx


import Navbar from "./_components/Navbar";
import AnimatedHeader from "./_components/header/AnimatedHeader";
import Body from "./_components/body/Body";
export const metadata = {
  title: "My Portfolio",
  description: "My developer portfolio",
};

export default function Home() {
  return (
    <main className="min-h-screen min-w-screen overflow-hidden bg-gray-50 text-gray-900 ">
      <Navbar />
      <div className="flex flex-col space-y-20 md:space-y-40 lg:space-y-60">
        <AnimatedHeader />
        <Body />
      </div>
    </main>
  );
}
