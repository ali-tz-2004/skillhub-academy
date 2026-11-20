"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import styles from "./BackLink.module.scss";

type BackLinkProps = {
  href: string;
  children: React.ReactNode;
};

export default function BackLink({ href, children }: BackLinkProps) {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;

    const cameFromSameSite =
      document.referrer !== "" &&
      new URL(document.referrer).origin === window.location.origin;

    if (cameFromSameSite && window.history.length > 1) {
      e.preventDefault();
      router.back();
    }
  };

  return (
    <Link href={href} className={styles.back} onClick={handleClick}>
      <ArrowRight size={16} />
      {children}
    </Link>
  );
}
