import { LegalLayout } from "@/components/sections/legal/components/LegalLayout";
import { LegalHeader } from "@/components/sections/legal/components/LegalHeader";
import { LegalSection } from "@/components/sections/legal/components/LegalSection";

export default function TermsPage() {
  return (
    <LegalLayout>
      <LegalHeader 
        title="Terms of Service" 
        lastUpdated="April 15, 2024"
      />
      
      <LegalSection title="Agreement to Terms">
        <p>
          By accessing or using AI Platform, you agree to be bound by these Terms of Service 
          and all applicable laws and regulations.
        </p>
      </LegalSection>

      <LegalSection title="Use License">
        <p>We grant you a limited, non-exclusive, non-transferable license to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Access and use the platform for your internal business purposes</li>
          <li>Create and manage automation workflows</li>
          <li>Store and process data according to your subscription plan</li>
        </ul>
      </LegalSection>

      <LegalSection title="Restrictions">
        <p>You agree not to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Modify or copy the materials without explicit permission</li>
          <li>Use the materials for commercial purposes without a subscription</li>
          <li>Remove any copyright or proprietary notations</li>
          <li>Transfer the materials to another person or organization</li>
        </ul>
      </LegalSection>

      <LegalSection title="Account Terms">
        <p>
          You are responsible for maintaining the security of your account and password. 
          We cannot and will not be liable for any loss or damage from your failure to 
          comply with this security obligation.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}