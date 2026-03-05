import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <footer className="w-full flex items-center justify-center py-4 border-t border-divider">
        <p className="text-sm text-default-400">
          © {new Date().getFullYear()} Undangan Digital. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
