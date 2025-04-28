import MovingGridBackground from "./MovingGridBackground";
import ProfileHeaderContent from "./ProfileHeaderContent";

export default function AnimatedHeader() {
  return (
    <header className="relative w-full overflow-hidden bg-green-50 pb-24 md:pb-32 lg:pb-40">
      {/* Added `pb-*` padding-bottom to give space for the avatar */}

      <div className="relative h-[28rem] md:h-[32rem]">
        <MovingGridBackground />
        <ProfileHeaderContent />
      </div>
    </header>
  );
}
