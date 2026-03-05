import { useTranslation } from "react-i18next";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

const skills = [
  "React.js",
  "TypeScript",
  "Tailwind CSS",
  "Next.js",
  "Framer Motion",
  "HeroUI",
  "Node.js",
  "Figma",
];

export default function AboutPage() {
  const { t } = useTranslation();

  const highlights = [
    { number: "3+", label: t("about.highlights.experience") },
    { number: "100+", label: t("about.highlights.clients") },
    { number: "500+", label: t("about.highlights.projects") },
  ];

  return (
    <section id="tentang" className="bg-slate-50 dark:bg-slate-950 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-3 text-xs font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase mb-4">
            <span className="w-8 h-0.5 bg-blue-500 rounded-full" />
            {t("about.sectionBadge")}
            <span className="w-8 h-0.5 bg-blue-500 rounded-full" />
          </span>
          <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl">
            {t("about.title")}{" "}
            <span className="relative">
              <span className="text-blue-600 dark:text-blue-400">{t("about.titleHighlight")}</span>
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-800 rounded-full" />
            </span>
          </h2>
          <p className="mt-4 text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            {t("about.subtitle")}
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* ── Photo Column ── */}
          <div className="relative flex justify-center">
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-900/10 rounded-3xl blur-3xl scale-90 -z-10" />

            <div className="relative w-full max-w-md">
              <div className="relative rounded-3xl overflow-hidden border border-blue-200 dark:border-blue-900/40 shadow-2xl shadow-blue-200/50 dark:shadow-blue-950/50 bg-white dark:bg-slate-900 min-h-[420px] flex items-center justify-center">
                <img
                  src="/img/About me.jpeg"
                  alt="Foto Developer"
                  className="w-full h-full object-cover absolute inset-0" style={{ objectPosition: "center top" }}
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                {/* Bottom fade */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-white/80 dark:from-slate-950/80 to-transparent pointer-events-none" />
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-5 -right-5 bg-white dark:bg-slate-900 border border-blue-200 dark:border-blue-900/50 rounded-2xl shadow-xl px-5 py-3">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                  <p className="text-sm font-bold text-slate-900 dark:text-white">{t("about.available")}</p>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{t("about.openProject")}</p>
              </div>
            </div>
          </div>

          {/* ── Info Column ── */}
          <div>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
              Petra Miracle
            </h3>
            <p className="text-blue-600 dark:text-blue-400 font-medium mt-1">
              {t("about.role")}
            </p>

            <p className="mt-5 text-slate-600 dark:text-slate-400 leading-7">
              {t("about.description1")}
            </p>

            <p className="mt-3 text-slate-600 dark:text-slate-400 leading-7">
              {t("about.description2")}
            </p>

            

            {/* Skills */}
            <div className="mt-8">
              <p className="text-xs font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase mb-3">
                {t("about.skillsLabel")}
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-semibold bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800/50 text-blue-700 dark:text-blue-300 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                as={Link}
                href="#kontak"
                className="bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg shadow-blue-900/40"
                radius="lg"
              >
                {t("common.contactMe")}
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
