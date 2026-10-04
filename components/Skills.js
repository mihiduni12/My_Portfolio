import Section from "./Section";
import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <dl className="grid gap-x-10 gap-y-7 sm:grid-cols-2">
        {skills.map((s) => (
          <div key={s.group} className="border-t border-line pt-4">
            <dt className="font-display text-lg font-semibold">{s.group}</dt>
            <dd className="mt-1 text-lg leading-relaxed text-muted">{s.items.join(", ")}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
