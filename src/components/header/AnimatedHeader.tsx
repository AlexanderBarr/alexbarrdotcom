import AvatarHeader from "./AvatarHeader";
import MovingGridBackground from "./MovingGridBackground";
import ProfileHeaderContent from "./ProfileHeaderContent";
export default function AnimatedHeader() {
  return (
    <header className="relative h-[18rem] w-full bg-green-50 sm:h-[24rem] md:h-[30rem] lg:h-[36rem] xl:h-[42rem]">
      <MovingGridBackground />
      <ProfileHeaderContent />
      <AvatarHeader />
    </header>
  );
}
