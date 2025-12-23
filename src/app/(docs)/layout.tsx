import { source } from "@/src/lib/source";
import { Image } from "fumadocs-core/framework";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <Image
          width="32"
          height="32"
          src="/logo.svg"
          alt="Logo"
          aria-label="Logo"
        />
        <h1>Docs</h1>
      </>
    ),
    url: "https://vleer.app",
  },
};

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <DocsLayout
      themeSwitch={{ enabled: false }}
      tree={source.pageTree}
      {...baseOptions}>
      {children}
    </DocsLayout>
  );
}
