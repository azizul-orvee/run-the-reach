import { terms } from "@/content/legal";
import { pageMetadata } from "@/lib/metadata";
import { LegalPage } from "@/components/legal-page";

export const metadata = pageMetadata({ ...terms.meta, path: "/terms" });

export default function TermsPage() {
  return <LegalPage doc={terms} related={{ label: "Privacy policy", href: "/privacy" }} />;
}
