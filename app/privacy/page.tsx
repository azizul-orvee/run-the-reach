import { privacy } from "@/content/legal";
import { pageMetadata } from "@/lib/metadata";
import { LegalPage } from "@/components/legal-page";

export const metadata = pageMetadata({ ...privacy.meta, path: "/privacy" });

export default function PrivacyPage() {
  return <LegalPage doc={privacy} related={{ label: "Terms of use", href: "/terms" }} />;
}
