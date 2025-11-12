import { source } from "@/lib/source";
import { Image } from "fumadocs-core/framework";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { BaseLayoutProps } from "fumadocs-ui/layouts/links";

const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <Image
          width="24"
          height="24"
          src="/logo.svg"
          alt="Logo"
          aria-label="Logo"
        />
        <h1>OpenMusic API</h1>
      </>
    ),
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

