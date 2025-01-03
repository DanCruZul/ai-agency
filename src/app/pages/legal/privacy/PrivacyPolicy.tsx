import { LegalLayout } from '../components/LegalLayout';
import { LegalHeader } from '../components/LegalHeader';
import { LegalSection } from '../components/LegalSection';

export const PrivacyPolicy = () => (
  <LegalLayout>
    <LegalHeader 
      title="Privacy Policy" 
      lastUpdated="April 15, 2024"
    />
    
    <LegalSection title="Introduction">
      <p>
        At AI Platform, we take your privacy seriously. This Privacy Policy explains how we collect, 
        use, disclose, and safeguard your information when you use our service.
      </p>
    </LegalSection>

    <LegalSection title="Information We Collect">
      <p>We collect information that you provide directly to us, including:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Account information (name, email, password)</li>
        <li>Profile information</li>
        <li>Payment information</li>
        <li>Usage data and analytics</li>
      </ul>
    </LegalSection>

    <LegalSection title="How We Use Your Information">
      <p>We use the information we collect to:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Provide and maintain our services</li>
        <li>Process your transactions</li>
        <li>Send you technical notices and updates</li>
        <li>Respond to your comments and questions</li>
        <li>Analyze usage patterns and improve our services</li>
      </ul>
    </LegalSection>

    <LegalSection title="Data Security">
      <p>
        We implement appropriate technical and organizational security measures to protect 
        your personal information. However, no method of transmission over the Internet is 
        100% secure.
      </p>
    </LegalSection>
  </LegalLayout>
);