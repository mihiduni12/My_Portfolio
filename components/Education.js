import Section from "./Section";
import { education, certifications, beyondCode } from "@/data/portfolio";

function Subheading({ children }) {
  return <h3 className="font-display text-xl font-semibold">{children}</h3>;
}

export default function Education() {
  return (
    <Section id="education" title="Education">
      <ul className="space-y-6">
        {education.map((e) => (
          <li key={e.school} className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:gap-6">
            <div>
              <p className="font-display text-xl font-semibold tracking-tight">{e.school}</p>
              <p className="mt-1 text-lg text-muted">{e.detail}</p>
            </div>
            <p className="shrink-0 text-muted">{e.period}</p>
          </li>
        ))}
      </ul>

      <div className="mt-12 grid gap-10 sm:grid-cols-2">
        <div>
          <Subheading>Certifications</Subheading>
          <ul className="mt-4 space-y-3 text-lg">
            {certifications.map((c) => (
              <li key={c.name}>
                {c.name}
                <span className="block text-base text-muted">
                  {c.issuer}
                  {c.period && `, ${c.period}`}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Subheading>Leadership and communication</Subheading>
          <ul className="mt-4 list-disc space-y-3 pl-5 text-lg text-muted marker:text-line">
            {beyondCode.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
