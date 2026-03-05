import { useState } from "react";
import { useTranslation } from "react-i18next";

import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/modal";

interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
  badge?: string;
}

const CheckIcon = () => (
  <svg
    className="w-4 h-4 shrink-0 text-blue-500"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    />
  </svg>
);

const WHATSAPP_NUMBER = "081236927067";
const EMAIL = "petra221106@gmail.com";

export default function PricingPage() {
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedTier, setSelectedTier] = useState<PricingTier | null>(null);
  const [catatan, setCatatan] = useState("");
  const [nama, setNama] = useState("");

  const pricingTiers: PricingTier[] = [
    {
      name: t("pricing.tiers.basic.name"),
      price: t("pricing.tiers.basic.price"),
      period: t("pricing.period"),
      description: t("pricing.tiers.basic.description"),
      features: t("pricing.tiers.basic.features", { returnObjects: true }) as string[],
      cta: t("pricing.tiers.basic.cta"),
      highlighted: false,
    },
    {
      name: t("pricing.tiers.professional.name"),
      price: t("pricing.tiers.professional.price"),
      period: t("pricing.period"),
      description: t("pricing.tiers.professional.description"),
      features: t("pricing.tiers.professional.features", { returnObjects: true }) as string[],
      cta: t("pricing.tiers.professional.cta"),
      highlighted: true,
      badge: t("pricing.badge"),
    },
    {
      name: t("pricing.tiers.premium.name"),
      price: t("pricing.tiers.premium.price"),
      period: t("pricing.period"),
      description: t("pricing.tiers.premium.description"),
      features: t("pricing.tiers.premium.features", { returnObjects: true }) as string[],
      cta: t("pricing.tiers.premium.cta"),
      highlighted: false,
    },
  ];

  const handlePilih = (tier: PricingTier) => {
    setSelectedTier(tier);
    setCatatan("");
    setNama("");
    onOpen();
  };

  const buildMessage = (format: "wa" | "email") => {
    const sep = format === "wa" ? "\n" : "%0A";
    const bold = (s: string) => format === "wa" ? `*${s}*` : s;
    const line = (s: string) => s + sep;

    let msg = "";
    msg += line(`Halo, saya ingin memesan undangan digital.`);
    msg += sep;
    msg += line(`📋 ${bold("Detail Pesanan:")}`);
    msg += line(`• Paket     : ${bold(selectedTier?.name ?? "")}`);
    msg += line(`• Harga     : ${selectedTier?.price}`);
    if (nama.trim()) msg += line(`• Nama      : ${nama.trim()}`);
    if (catatan.trim()) {
      msg += sep;
      msg += line(`📝 ${bold("Catatan Tambahan:")}`);
      msg += line(catatan.trim());
    }
    msg += sep;
    msg += `Mohon informasi lebih lanjut mengenai proses pemesanan. Terima kasih! 🙏`;
    return format === "wa" ? encodeURIComponent(msg) : msg;
  };

  const waUrl = `https://wa.me/62${WHATSAPP_NUMBER.replace(/^0/, "")}?text=${buildMessage("wa")}`;
  const mailUrl = `mailto:${EMAIL}?subject=Pemesanan Paket ${selectedTier?.name ?? ""}&body=${buildMessage("email")}`;

  return (
    <section id="harga" className="bg-white dark:bg-black py-20 px-4 sm:px-6 lg:px-8">
      {/* Background decoration */}
      <div className="absolute inset-x-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-100/60 dark:bg-blue-900/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-3 text-xs font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase mb-4">
            <span className="w-8 h-0.5 bg-blue-500 rounded-full" />
            {t("pricing.sectionBadge")}
            <span className="w-8 h-0.5 bg-blue-500 rounded-full" />
          </span>
          <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl">
            {t("pricing.title")}{" "}
            <span className="relative inline-block">
              <span className="text-blue-600 dark:text-blue-400">{t("pricing.titleHighlight")}</span>
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-800 rounded-full" />
            </span>{" "}
            {t("pricing.titleEnd")}
          </h2>
          <p className="mt-4 text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            {t("pricing.subtitle")}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-center">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl border flex flex-col transition-transform hover:-translate-y-1 ${
                tier.highlighted
                  ? "border-blue-500 bg-gradient-to-b from-blue-50 dark:from-blue-950/80 to-white dark:to-slate-950 shadow-2xl shadow-blue-200/50 dark:shadow-blue-900/40 scale-105"
                  : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm"
              }`}
            >
              {tier.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 text-xs font-bold bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full shadow-lg shadow-blue-900/50 whitespace-nowrap">
                    {tier.badge}
                  </span>
                </div>
              )}

              <div className="p-6 lg:p-8 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-4">
                  <h3
                    className={`text-lg font-bold ${
                      tier.highlighted
                        ? "text-blue-700 dark:text-blue-300"
                        : "text-slate-700 dark:text-slate-300"
                    }`}
                  >
                    {tier.name}
                  </h3>
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      tier.highlighted
                        ? "bg-blue-600 shadow-md shadow-blue-900"
                        : "bg-slate-100 dark:bg-slate-800"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className={`w-4 h-4 ${
                        tier.highlighted
                          ? "text-white"
                          : "text-slate-500 dark:text-slate-400"
                      }`}
                    >
                      <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                      <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                    </svg>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-3xl font-extrabold text-slate-900 dark:text-white">
                    {tier.price}
                  </p>
                  <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">{tier.period}</p>
                </div>

                <div
                  className={`h-px mb-5 ${
                    tier.highlighted
                      ? "bg-blue-200 dark:bg-blue-800/60"
                      : "bg-slate-100 dark:bg-slate-800"
                  }`}
                />

                <p className="text-sm text-slate-500 dark:text-slate-400 mb-5">{tier.description}</p>

                <ul className="space-y-3 flex-1 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <CheckIcon />
                      <span className="text-sm text-slate-700 dark:text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onPress={() => handlePilih(tier)}
                  className={
                    tier.highlighted
                      ? "bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold shadow-lg shadow-blue-900/50 hover:opacity-90 w-full"
                      : "bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold border border-slate-200 dark:border-slate-700 w-full"
                  }
                  radius="lg"
                  size="lg"
                >
                  {tier.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-slate-400 dark:text-slate-600 mt-10">
          {t("pricing.customNote")}{" "}
          <Link
            href="#kontak"
            className="text-blue-600 dark:text-blue-500 font-semibold hover:underline"
          >
            {t("pricing.customLink")}
          </Link>
        </p>
      </div>

      {/* ── Contact Modal ── */}
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        placement="center"
        backdrop="blur"
        classNames={{
          base: "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700",
          header: "border-b border-slate-100 dark:border-slate-800",
          footer: "border-t border-slate-100 dark:border-slate-800",
        }}
      >
        <ModalContent>
          {(onCloseModal) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <p className="text-base font-bold text-slate-900 dark:text-white">
                  {t("pricing.modal.title")}
                </p>
                <p className="text-xs font-normal text-slate-500 dark:text-slate-400">
                  {t("pricing.modal.packageLabel")}{" "}
                  <span className="text-blue-600 dark:text-blue-400 font-semibold">
                    {selectedTier?.name}
                  </span>{" "}
                  — {selectedTier?.price}
                </p>
              </ModalHeader>

              <ModalBody className="py-5 gap-4">

                {/* Nama */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wide">
                    {t("pricing.modal.nameLabel")}
                  </label>
                  <input
                    type="text"
                    placeholder={t("pricing.modal.namePlaceholder")}
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                    className="w-full px-3 py-2.5 text-sm rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>

                {/* Catatan */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wide">
                    {t("pricing.modal.noteLabel")}{" "}
                    <span className="normal-case font-normal text-slate-400">{t("pricing.modal.noteOptional")}</span>
                  </label>
                  <textarea
                    rows={3}
                    placeholder={t("pricing.modal.notePlaceholder")}
                    value={catatan}
                    onChange={(e) => setCatatan(e.target.value)}
                    className="w-full px-3 py-2.5 text-sm rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                  />
                </div>

                {/* Divider */}
                <div className="flex items-center gap-3">
                  <span className="flex-1 h-px bg-slate-100 dark:bg-slate-800" />
                  <span className="text-xs text-slate-400">{t("common.sendVia")}</span>
                  <span className="flex-1 h-px bg-slate-100 dark:bg-slate-800" />
                </div>

                {/* WhatsApp */}
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-green-200 dark:border-green-900/50 bg-green-50 dark:bg-green-950/30 hover:bg-green-100 dark:hover:bg-green-950/60 transition-colors group"
                >
                  <div className="w-11 h-11 rounded-full bg-green-500 flex items-center justify-center shrink-0 shadow-md shadow-green-900/20">
                    <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-green-700 dark:group-hover:text-green-400 transition-colors">
                      WhatsApp
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      0812-3692-7067 · {t("pricing.modal.quickReply")}
                    </p>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-slate-400 group-hover:text-green-500 transition-colors">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                  </svg>
                </a>

                {/* Email */}
                <a
                  href={mailUrl}
                  className="flex items-center gap-4 p-4 rounded-xl border border-blue-200 dark:border-blue-900/50 bg-blue-50 dark:bg-blue-950/30 hover:bg-blue-100 dark:hover:bg-blue-950/60 transition-colors group"
                >
                  <div className="w-11 h-11 rounded-full bg-blue-600 flex items-center justify-center shrink-0 shadow-md shadow-blue-900/20">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                      Email
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      {t("pricing.modal.emailDesc")}
                    </p>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                  </svg>
                </a>
              </ModalBody>

              <ModalFooter>
                <Button
                  variant="light"
                  onPress={onCloseModal}
                  className="text-slate-500 dark:text-slate-400"
                >
                  {t("common.cancel")}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </section>
  );
}
