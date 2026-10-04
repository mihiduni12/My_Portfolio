import Image from "next/image";
import { profile } from "@/data/portfolio";

const secondaryLink =
  "inline-flex items-center rounded-lg border border-line bg-surface px-5 py-3 font-medium transition-colors hover:border-accent hover:text-accent";

export default function Hero() {
  const [firstName, ...rest] = profile.name.split(" ");

  return (
    <section id="top" className="mx-auto max-w-6xl px-5 pt-12 pb-20 sm:px-8 sm:pt-20 md:pb-28">
      <div className="grid items-end gap-10 md:grid-cols-[1fr_auto] md:gap-16">
        <div className="order-2 md:order-1">
          <h1 className="font-display text-[clamp(3.25rem,10vw,7.5rem)] font-bold leading-[0.9] tracking-[-0.035em]">
            {firstName}
            <br />
            {rest.join(" ")}
          </h1>
          <p className="mt-6 font-display text-xl font-medium sm:text-2xl">{profile.headline}</p>
          <p className="mt-1 text-muted">{profile.location}</p>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">{profile.intro}</p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center rounded-lg bg-accent px-5 py-3 font-medium text-paper transition-opacity hover:opacity-90"
            >
              Email me
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className={secondaryLink}>
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={secondaryLink}>
              LinkedIn
            </a>
            {profile.cv && (
              <a href={profile.cv} download className={secondaryLink}>
                Download CV
              </a>
            )}
          </div>
        </div>

        <div className="order-1 md:order-2">
          <div className="relative w-32 sm:w-40 md:w-64">
            <div
              aria-hidden="true"
              className="absolute inset-0 translate-x-3 translate-y-3 rounded-[1.75rem] bg-saffron md:translate-x-4 md:translate-y-4"
            />
            <Image
              src={profile.photo}
              alt={`Photo of ${profile.name}`}
              width={506}
              height={570}
              preload
              sizes="(min-width: 768px) 256px, 160px"
              className="relative aspect-[506/570] w-full rounded-[1.75rem] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}