import AvatarHeader from "./AvatarHeader";
import MovingGridBackground from "./MovingGridBackground";
import ProfileHeaderContent from "./ProfileHeaderContent";

export default function AnimatedHeader() {
  return (
    <div className="relative">
      {/* Header section with background */}
      <header className="bg-background relative min-h-[16rem] w-full overflow-hidden sm:h-[20rem] md:h-[24rem] lg:h-[28rem]">
        <MovingGridBackground />
        <ProfileHeaderContent />
      </header>

      {/* Avatar container that overlaps the header */}
      <div className="relative z-20">
        <AvatarHeader />
      </div>
    </div>
  );
}
