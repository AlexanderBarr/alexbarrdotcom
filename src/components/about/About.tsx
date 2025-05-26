"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "~/components/ui/button";

const About = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isResetting, setIsResetting] = useState(false);

  // Extract project images for slideshow
  const projectImages = [
    { src: "/alex/alexbarr2.jpg", alt: "Alex Barr Portrait 1" },
    { src: "/alex/alexbarr3.jpg", alt: "Alex Barr Portrait 2" },
    { src: "/alex/alexbarr4.jpg", alt: "Alex Barr Portrait 3" },
    { src: "/alex/alexbarr5.jpg", alt: "Alex Barr Portrait 4" },
  ];

  // Auto-advance slideshow with slide animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => {
        if (prev === projectImages.length - 1) {
          // When reaching last image, prepare to reset
          setIsResetting(true);

          // After transition, reset to first image
          setTimeout(() => {
            setCurrentImageIndex(0);
            setIsResetting(false);
          }, 1000);

          return prev;
        }
        return prev + 1;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [projectImages.length]);

  const contactLinks = [
    {
      icon: Github,
      href: "https://github.com/AlexanderBarr",
      label: "GitHub Profile",
      text: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/alex-b-950725113/",
      label: "LinkedIn Profile",
      text: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:business@alexbarr.com.au",
      label: "Email Contact",
      text: "Email",
    },
  ];

  return (
    <section id="about" className="py-12 md:py-16 lg:py-20">
      <div className="container mx-auto max-w-7xl space-y-8">
        <h2 className="text-foreground text-2xl font-bold sm:text-3xl">
          About Me
        </h2>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
          {/* Content Section */}
          <div className="space-y-6">
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-muted-foreground text-base leading-relaxed">
                I&apos;m Alex, a passionate Full Stack Developer based in
                Sydney, Australia, with extensive experience in building
                scalable web and mobile applications. My expertise spans from
                enterprise payroll systems to innovative gardening apps,
                showcasing versatility across diverse industries.
              </p>

              <p className="text-muted-foreground text-base leading-relaxed">
                Over the years, I&apos;ve worked with cutting-edge technologies
                including TypeScript, React, Next.js, and various database
                systems. My experience ranges from developing comprehensive
                business solutions with complex rostering and performance
                monitoring systems to creating user-friendly educational and
                design websites.
              </p>

              <p className="text-muted-foreground text-base leading-relaxed">
                I specialise in modern web technologies, cloud platforms like
                Azure, and have a strong background in both frontend and backend
                development. Whether it&apos;s building React Native mobile apps
                or implementing complex database architectures with SAP HANA and
                PostgreSQL, I bring technical excellence to every project.
              </p>

              <div className="bg-primary/10 border-primary/20 mt-10 rounded-lg border p-4">
                <p className="text-primary font-medium">
                  Currently seeking new opportunities to contribute to
                  innovative projects and collaborate with forward-thinking
                  teams.
                </p>
              </div>
            </div>

            {/* Contact Links */}
            <div className="space-y-4">
              <h3 className="text-foreground text-lg font-semibold">
                Let&apos;s Connect
              </h3>
              <div className="flex flex-wrap gap-3">
                {contactLinks.map(({ icon: Icon, href, label, text }) => (
                  <Button
                    key={href}
                    variant="outline"
                    size="sm"
                    className="gap-2"
                    onClick={() => window.open(href, "_blank")}
                    aria-label={label}
                  >
                    <Icon className="h-4 w-4" />
                    {text}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Image Slideshow Section */}
          <div className="flex-start hidden justify-center lg:flex">
            <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-lg">
              <div
                className="absolute inset-0 flex transition-transform duration-1000 ease-in-out"
                style={{
                  transform: `translateX(-${currentImageIndex * 100}%)`,
                  transitionProperty: isResetting ? "none" : "transform",
                }}
              >
                {projectImages.map((image, index) => (
                  <div
                    key={index}
                    className="relative h-full w-full flex-shrink-0"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      priority={index === 0}
                      className="rounded-lg object-cover shadow-md"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
