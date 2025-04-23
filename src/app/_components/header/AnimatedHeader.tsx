// components/AnimatedHeader.tsx
import MovingGridBackground from "./MovingGridBackground";
import ProfileHeaderContent from "./ProfileHeaderContent";

export default function AnimatedHeader() {
  return (
    <header className="relative h-128 w-full overflow-hidden bg-green-50 md:h-80 lg:h-96">
      <MovingGridBackground />
      <ProfileHeaderContent />
    </header>
  );
}
