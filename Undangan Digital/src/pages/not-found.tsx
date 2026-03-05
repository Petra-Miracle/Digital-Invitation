import { useTranslation } from "react-i18next";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white dark:bg-black px-6">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-500/10 to-violet-600/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-gradient-to-tl from-violet-500/10 to-blue-400/5 blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-lg">
        {/* 404 Number */}
        <div className="relative select-none mb-4">
          <span className="text-[140px] sm:text-[180px] font-black leading-none tracking-tighter bg-gradient-to-br from-blue-500 to-violet-600 bg-clip-text text-transparent drop-shadow-sm">
            404
          </span>
          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 w-32 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-violet-600 blur-sm opacity-60" />
        </div>

        {/* Envelope icon */}
        <div className="mb-6 w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600 shadow-xl shadow-blue-900/30">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8 text-white"
          >
            <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
            <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
          </svg>
        </div>

        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight">
          {t("notFound.heading")}
        </h1>

        {/* Description */}
        <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed mb-8">
          {t("notFound.description")}
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <Button
            as={Link}
            href="/"
            radius="none"
            className="px-8 py-3 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 transition-all duration-200 shadow-lg shadow-blue-900/30"
          >
            {t("notFound.backHome")}
          </Button>

          <Button
            variant="bordered"
            radius="none"
            className="px-8 py-3 text-sm font-semibold text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-violet-500 hover:text-blue-600 dark:hover:text-violet-400 transition-all duration-200"
            onPress={() => navigate(-1)}
          >
            {t("notFound.prevPage")}
          </Button>
        </div>
      </div>

      {/* Footer brand */}
      <div className="absolute bottom-6 flex items-center gap-2 opacity-50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-4 h-4 text-slate-400"
        >
          <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
          <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
        </svg>
        <span className="text-xs text-slate-400 font-medium">
          Undangan
          <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
            .Digital
          </span>
        </span>
      </div>
    </div>
  );
}
