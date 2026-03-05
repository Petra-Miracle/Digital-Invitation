import { useTranslation } from "react-i18next";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Banknote } from "lucide-react";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-black min-h-[calc(100vh-64px)] flex items-center">
      <div className="px-4 mx-auto max-w-4xl sm:px-6 lg:px-8 w-full text-center">

        <p className="text-sm font-semibold tracking-widest text-blue-600 dark:text-blue-400 uppercase mb-6">
          {t("hero.badge")}
        </p>

        <h1 className="text-4xl font-bold text-slate-900 dark:text-white sm:text-6xl lg:text-7xl leading-tight">
          {t("hero.headline1")}{" "}
          <span className="relative inline-flex">
            <span className="absolute inset-x-0 bottom-0 border-b-[28px] border-blue-600/30 dark:border-blue-600/50" />
            <span className="relative text-4xl font-bold text-slate-900 dark:text-white sm:text-6xl lg:text-7xl">
              {t("hero.headline2")}
            </span>
          </span>
        </h1>

        <p className="mt-8 text-base text-slate-600 dark:text-slate-400 sm:text-xl leading-relaxed max-w-2xl mx-auto">
          {t("hero.description")}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
          <Button
            as={Link}
            href="#harga"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-all duration-200 rounded-none shadow-lg shadow-blue-900/30"
            radius="none"
            size="lg"
          >
            {t("common.orderNow")}
          </Button>

          <Link
            href="#harga"
            className="inline-flex items-center gap-3 text-base font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all duration-200"
          >
            <span className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-blue-500 shrink-0 text-blue-500">
              <Banknote className="w-5 h-5" />
            </span>
            {t("common.viewPrice")}
          </Link>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
