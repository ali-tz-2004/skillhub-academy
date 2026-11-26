import DomainHomePage from "../components/DomainHomePage";
import { domainHomeContent } from "../data/domains";

export default function LawHomePage() {
  return <DomainHomePage content={domainHomeContent.law} />;
}
