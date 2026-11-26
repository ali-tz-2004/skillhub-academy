import DomainTheme from "../components/DomainTheme";

export default function LawLayout({ children }: LayoutProps<"/law">) {
  return <DomainTheme domain="law">{children}</DomainTheme>;
}
