import styles from "./DomainTheme.module.scss";

type DomainThemeProps = {
  domain: "network" | "law" | "management";
  children: React.ReactNode;
};

export default function DomainTheme({ domain, children }: DomainThemeProps) {
  return <div className={styles[domain]}>{children}</div>;
}
