interface SectionIntroProps {
  label: string;
  title: string;
  subtitle: string;
  className?: string;
}

// Label + heading + supporting copy used to introduce a section or a column
// within one. `title` may contain "\n" to force a manual line break.
export const SectionIntro = ({
  label,
  title,
  subtitle,
  className = "",
}: SectionIntroProps) => {
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      <p className="text-small font-body font-medium tracking-[0.15em] text-white/50 uppercase">
        {label}
      </p>
      <h3 className="text-heading font-heading font-semibold whitespace-pre-line text-white">
        {title}
      </h3>
      <p className="text-body font-body font-normal text-white/65">
        {subtitle}
      </p>
    </div>
  );
};
