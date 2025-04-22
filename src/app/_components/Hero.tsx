const Hero = () => {
    return (
      <section className="flex flex-col items-center justify-center text-center py-24 bg-gradient-to-b from-white to-blue-100">
        <h2 className="text-4xl font-extrabold mb-4">I love you unconditionally👋</h2>
        <p className="text-lg max-w-xl mb-6">I&apos;m a fussll-stack developer passionate about building web apps with modern tools like the T3 stack.</p>
        <a href="/cv.pdf" className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">Download CV</a>
      </section>
    );
  };
  
  export default Hero;
  