interface PageHeroProps {
  eyebrow?: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
}

export default function PageHero({
  eyebrow,
  title,
  titleAccent,
  subtitle,
}: PageHeroProps) {
  return (
    <section className="relative pt-40 pb-20 px-6 md:px-12 overflow-hidden">
      {/* Mesh background */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 70% at 20% 60%, rgba(0,229,204,0.12) 0%, transparent 60%),
            radial-gradient(ellipse 60% 80% at 80% 30%, rgba(255,45,120,0.15) 0%, transparent 55%),
            radial-gradient(ellipse 50% 50% at 50% 50%, rgba(139,0,255,0.08) 0%, transparent 70%),
            var(--negro)
          `,
        }}
      />
      {/* Grid overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,229,204,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,229,204,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
      <div className="relative max-w-[1200px] mx-auto">
        {eyebrow && (
          <p className="section-label mb-4 animate-[fadeUp_0.8s_0.2s_forwards] opacity-0">
            {eyebrow}
          </p>
        )}
        <h1 className="font-display text-[clamp(3rem,8vw,6rem)] leading-[0.92] tracking-[0.02em] animate-[fadeUp_0.9s_0.4s_forwards] opacity-0">
          {title}{" "}
          {titleAccent && (
            <span className="text-magenta text-glow-magenta">
              {titleAccent}
            </span>
          )}
        </h1>
        {subtitle && (
          <p className="mt-6 text-lg opacity-50 max-w-xl leading-relaxed animate-[fadeUp_0.9s_0.6s_forwards] opacity-0">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
