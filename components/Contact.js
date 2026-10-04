import { profile } from "@/data/portfolio";

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="border-t border-line bg-accent-soft">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <h2 id="contact-title" className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Get in touch
        </h2>
        <p className="mt-4 max-w-xl text-lg text-muted">
          I&apos;m looking for software engineering roles. Email is the quickest way to reach me.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-8 inline-block break-all font-display text-[clamp(1.4rem,4.5vw,3rem)] font-semibold tracking-tight text-accent underline decoration-2 underline-offset-8 hover:decoration-saffron"
        >
          {profile.email}
        </a>
        <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-lg">
          <li>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-accent">
              GitHub
            </a>
          </li>
          <li>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-accent">
              LinkedIn
            </a>
          </li>
          {profile.cv && (
            <li>
              <a href={profile.cv} download className="underline underline-offset-4 hover:text-accent">
                Download CV
              </a>
            </li>
          )}
        </ul>
      </div>
    </section>
  );
}
