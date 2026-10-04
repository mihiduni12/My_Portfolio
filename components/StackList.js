export default function StackList({ items, label = "Built with" }) {
  return (
    <ul aria-label={label} className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-md border border-line bg-paper px-2.5 py-1 text-sm text-muted"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
