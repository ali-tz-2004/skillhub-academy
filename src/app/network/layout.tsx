import DomainTheme from "../components/DomainTheme";

export default function NetworkLayout({ children }: LayoutProps<"/network">) {
  return <DomainTheme domain="network">{children}</DomainTheme>;
}
