import AvatarHeader from "./AvatarHeader";
import MovingGridBackground from "./MovingGridBackground";
import ProfileHeaderContent from "./ProfileHeaderContent";

export default function AnimatedHeader() {
  return (
    <div className="relative">
      {/* Header section with background */}
      <header className="bg-background relative min-h-[20rem] w-full overflow-hidden sm:h-[24rem] md:h-[30rem] lg:h-[36rem] xl:h-[42rem]">
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
