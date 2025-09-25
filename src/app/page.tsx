"use client";
import Image from "next/image";
import { connect, timeline } from "@/lib/me";
import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/layout";
import { Accordion } from "@/components/ui";

export default function Home() {
  const [active, setActive] = useState<number | null>(0);
  const trunkExp = timeline.slice(0, 3);

  const handleToggle = (index: number) => {
    setActive((prev) => (prev === index ? null : index));
  };

  return (
    <Container className="pt-12 pb-24">
      <div className="flex items-start justify-between">
        <div className="w-full md:w-8/12 text-gray-700">
          <div className="intro">
            <h2 className="text-3xl font-medium md:text-3xl mb-4">
              Hi, I&apos;m <br /> Cornerstone Ephraim.
            </h2>
          </div>

          <div className="text-sm leading-loose space-y-3">
            <p>
              <span className="text-red-400">
                Your goto artist - a frontend engineer.
              </span>{" "}
              I channel my days (and often, moonlit nights) into painting the
              canvas of the internet. Through every project and intricately
              woven line of code, I weave &lt; and /&gt; into vibrant, immersive
              experiences that come alive across the digital canvas.
            </p>
            <p>
              When not immersed in coding, I&apos;m probably reading some
              bookmarked tech articles, leveling up my backend skills, or
              getting lost in hoop highlight reels. I love exploring the
              theoretical realm of CS almost as much as I love bringing ideas to
              life in code. Each feeds the other in an endless quest to satisfy
              my curiosity.
            </p>
          </div>

          <div className="flex items-center space-x-4 my-4">
            {connect.map((el, index) => {
              const Icon = el.icon;
              const isEmail = el.social === "Email";

              // 🔗 PLACEHOLDER: put your real links here
              // For email: replace the href below with: `mailto:YOUR_EMAIL_HERE`
              // For other socials: replace the href below with: `https://YOUR_LINK_HERE`
              const placeholderHref = isEmail ? "#" : "#";

              return (
                <Link
                  key={`connect-${index}`}
                  href={placeholderHref} // PUT LINK HERE
                  target="_blank"
                  className="text-red-900 pointer-events-none opacity-60" // disabled until you add real links
                  rel="noopener noreferrer"
                  title={
                    isEmail
                      ? "PUT EMAIL LINK HERE (e.g., mailto:you@example.com)"
                      : "PUT SOCIAL LINK HERE (e.g., https://twitter.com/you)"
                  }
                >
                  <Icon size={36} />
                </Link>
              );
            })}
          </div>
        </div>

        <div className="w-3/12 hidden md:block">
          <Image
            src="/images/pic.jpg"
            className="rounded-full"
            alt="Cornerstone Ephraim avatar"
            width={140}
            height={158}
          />
        </div>
      </div>

      <div className="my-4">
        <h3>Recent experiences</h3>
        <div className="my-4">
          {trunkExp.map((exp, index) => (
            <Accordion
              key={index}
              active={active === index}
              handleToggle={() => handleToggle(index)}
              exp={exp}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}
