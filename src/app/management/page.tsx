import DomainHomePage from "../components/DomainHomePage";
import { domainHomeContent } from "../data/domains";

export default function ManagementHomePage() {
  return <DomainHomePage content={domainHomeContent.management} />;
}
