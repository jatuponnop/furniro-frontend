import "./globals.scss";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faUser, faCoffee } from "@fortawesome/free-solid-svg-icons";

export const metadata = {
  title: "Furniro",
  description: "E-commerce Furniture Website",
};

config.autoAddCss = false;
library.add(fab, faUser);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
