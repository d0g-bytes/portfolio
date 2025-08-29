import React from "react";

import Header from "./header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="flex-1 p-6">{children}</main>

      {/* Footer */}
      <footer className="p-4 text-center border-t text-sm text-muted-foreground">
        © {new Date().getFullYear()} Lex's Portfolio
      </footer>
    </>
  );
};

export default Layout;
