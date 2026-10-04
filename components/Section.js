// Shared layout for each section: heading on the left on wide screens,
// content on the right. On phones the heading sits on top.
export default function Section({ id, title, children }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-8 md:grid-cols-[13rem_1fr] md:gap-12 md:py-24">
        <h2
          id={`${id}-title`}
          className="font-display text-3xl font-semibold tracking-tight md:sticky md:top-24 md:self-start md:text-4xl"
        >
          {title}
        </h2>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}
