// app/components/SectionLabel.tsx
interface SectionLabelProps {
  number: string;
  label: string;
}

export default function SectionLabel({ number, label }: SectionLabelProps) {
  return (
    <p className="font-mono text-[11px] text-brand-cyan tracking-[4px] uppercase mb-4">
      {number} / {label}
    </p>
  );
}
