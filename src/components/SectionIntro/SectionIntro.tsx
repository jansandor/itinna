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
    <div className={`flex flex-col ${className}`}>
      <p className="text-body font-body mb-3 font-semibold tracking-widest text-white/45 uppercase">
        {label}
      </p>
      <h3 className="text-heading font-heading mb-3 text-[40px] leading-11 font-semibold whitespace-pre-line text-white">
        {title}
      </h3>
      <p className="text-title font-body text-[20px] font-light text-white/65">
        {subtitle}
      </p>
    </div>
  );
};
