import DomainHomePage from "../components/DomainHomePage";
import { domainHomeContent } from "../data/domains";

export default function NetworkHomePage() {
  return <DomainHomePage content={domainHomeContent.network} />;
}
