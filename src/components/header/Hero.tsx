const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-gradient-to-b from-white to-blue-100 py-24 text-center">
      <h2 className="mb-4 text-4xl font-extrabold">Hi, I&apos;m John 👋</h2>
      <p className="mb-6 max-w-xl text-lg">
        I&apos;m a change made full-stack developer passionate about building
        web apps with modern tools like the T3 stack.
      </p>
      <a
        href="/cv.pdf"
        className="rounded-full bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700"
      >
        Download CV
      </a>
    </section>
  );
};

export default Hero;
