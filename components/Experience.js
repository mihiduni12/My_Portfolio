import Section from "./Section";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="relative space-y-12 border-l border-line pl-8">
        {experience.map((job) => (
          <li key={job.title + job.org} className="relative">
            <span
              aria-hidden="true"
              className="absolute top-2 -left-[38.5px] size-3 rounded-full border-2 border-paper bg-saffron ring-1 ring-saffron"
            />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <h3 className="font-display text-2xl font-semibold tracking-tight">{job.title}</h3>
              <p className="shrink-0 text-muted">{job.period}</p>
            </div>
            <p className="mt-1 font-medium text-accent">{job.org}</p>
            <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-5 text-lg leading-relaxed text-muted marker:text-line">
              {job.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
