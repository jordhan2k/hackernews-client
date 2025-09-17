import type { ReactNode } from "react";
import { Footer } from "./footer";
import { Header } from "./header";
import Sidebar from "./sidebar";

function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full h-screen fixed flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex-1 flex flex-col overflow-auto xl:px-16">
          <main className="w-full grow">{children}</main>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export { AppLayout };
