import AnimatedHeader from "../components/header/AnimatedHeader";
import Body from "../components/body/Body";
import Navbar from "~/components/navbar/Navbar";

export const metadata = {
  title: "My Portfolio",
  description: "My developer portfolio",
};

export default function Home() {
  return (
    <main className="bg-background text-foreground min-h-screen min-w-screen overflow-hidden">
      <Navbar />

      <AnimatedHeader />
      <div className="mt-16 md:mt-20 lg:mt-24">
        <Body />
      </div>
    </main>
  );
}
