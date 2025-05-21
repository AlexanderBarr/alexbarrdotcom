"use client";

export default function ProfileHeaderContent() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      <h1 className="space-y-4 text-center">
        <div className="text-foreground text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
          Alex Barr
        </div>
        <div className="text-muted-foreground text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          I&apos;m a Full Stack Developer
        </div>
      </h1>
    </div>
  );
}
