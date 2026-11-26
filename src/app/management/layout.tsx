import DomainTheme from "../components/DomainTheme";

export default function ManagementLayout({
  children,
}: LayoutProps<"/management">) {
  return <DomainTheme domain="management">{children}</DomainTheme>;
}
