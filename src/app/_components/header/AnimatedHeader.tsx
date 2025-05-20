import AvatarHeader from "./AvatarHeader";
import MovingGridBackground from "./MovingGridBackground";
import ProfileHeaderContent from "./ProfileHeaderContent";
export default function AnimatedHeader() {
  return (
    <header className="relative h-[18rem] w-full bg-green-50 sm:h-[24rem] md:h-[30rem] lg:h-[36rem] xl:h-[42rem]">
      {/* <div className="relative h-[32rem] sm:h-[16rem] md:h-[24rem]"> */}
      {/* <div className="relative"> do i even need this div */}
      <MovingGridBackground />
      {/* <ProfileHeaderContent />
        <AvatarHeader /> */}
      {/* </div> */}
    </header>
  );
}
