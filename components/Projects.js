import Image from "next/image";
import Section from "./Section";
import StackList from "./StackList";
import { featuredProject, projects } from "@/data/portfolio";

function CodeLink({ href, title }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:decoration-accent"
    >
      View the code<span className="sr-only"> for {title}</span> on GitHub
    </a>
  );
}

function DemoLink({ href, title }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center rounded-lg bg-accent px-4 py-2 font-medium text-paper transition-opacity hover:opacity-90"
    >
      Open the live demo<span className="sr-only"> of {title}</span>
    </a>
  );
}

function Featured() {
  const p = featuredProject;

  return (
    <article className="rounded-2xl border border-line bg-surface p-6 sm:p-9">
      <p className="font-medium text-accent">{p.context}</p>
      <h3 className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl">{p.title}</h3>
      <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted">{p.summary}</p>

      <h4 className="mt-9 font-display text-lg font-semibold">How it works</h4>
      <ol className="mt-4 grid gap-0 lg:grid-cols-4 lg:gap-4">
        {p.pipeline.map((item, i) => (
          <li key={item.step} className="relative flex gap-4 pb-6 lg:block lg:pb-0">
            {/* connector line between steps */}
            {i < p.pipeline.length - 1 && (
              <span
                aria-hidden="true"
                className="absolute top-9 bottom-0 left-[1.0625rem] w-px bg-line lg:top-[1.0625rem] lg:right-[-1rem] lg:bottom-auto lg:left-11 lg:h-px lg:w-auto"
              />
            )}
            <span
              aria-hidden="true"
              className="relative flex size-[2.125rem] shrink-0 items-center justify-center rounded-full border-2 border-saffron bg-surface font-display text-sm font-bold"
            >
              {i + 1}
            </span>
            <div className="lg:mt-4">
              <p className="font-medium leading-snug">{item.step}</p>
              <p className="mt-1 text-sm text-muted">{item.detail}</p>
            </div>
          </li>
        ))}
      </ol>
      <p className="mt-6 text-sm text-muted lg:mt-8">{p.pipelineNote}</p>

      <div className="mt-8 flex flex-col gap-5 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
        <StackList items={p.stack} />
        <div className="shrink-0">
          <CodeLink href={p.repo} title={p.title} />
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <Featured />

      <ul className="mt-6 divide-y divide-line">
        {projects.map((p) => (
          <li key={p.title} className="grid gap-4 py-9 md:grid-cols-[16rem_1fr] md:gap-10">
            <div>
              <h3 className="font-display text-2xl font-semibold tracking-tight">{p.title}</h3>
              <div className="mt-3 flex flex-col items-start gap-3">
                {p.demo && <DemoLink href={p.demo} title={p.title} />}
                <CodeLink href={p.repo} title={p.title} />
              </div>
            </div>
            <div>
              {p.image && (
                <Image
                  src={p.image}
                  alt={`Screenshot of the ${p.title}`}
                  width={1200}
                  height={750}
                  sizes="(min-width: 1024px) 640px, 100vw"
                  className="mb-5 w-full rounded-xl border border-line"
                />
              )}
              <p className="text-lg leading-relaxed text-muted">{p.summary}</p>
              <div className="mt-4">
                <StackList items={p.stack} />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}