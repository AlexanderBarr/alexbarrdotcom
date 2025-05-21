import AnimatedHeader from "../components/header/AnimatedHeader";
import Body from "../components/body/Body";
import Navbar from "~/components/navbar/Navbar";
export const metadata = {
  title: "My Portfolio",
  description: "My developer portfolio",
};

export default function Home() {
  return (
    <main className="min-h-screen min-w-screen overflow-hidden bg-gray-50 text-gray-900">
      <Navbar />
      <div className="flex flex-col space-y-20 md:space-y-40 lg:space-y-60">
        <AnimatedHeader />
        <Body />
      </div>
    </main>
  );
}
