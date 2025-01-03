import type { FaqProps } from './types';

export const faqDefaults: FaqProps = {
  heading: "Common Questions",
  description: "Get straightforward answers to your most important questions",
  questions: [
    {
      title: "How long does it take to see results?",
      answer: "Most customers see initial results within the first week. Our onboarding process takes 24-48 hours, and the AI begins learning your workflows immediately. Typical customers achieve full optimization within 30 days, with ROI realized in the first quarter.",
    },
    {
      title: "What happens to our existing data and workflows?",
      answer: "Your existing data and workflows remain unchanged and fully accessible. We integrate alongside your current systems - nothing is replaced or removed. You maintain 100% ownership and control of your data, with the ability to export it at any time.",
    },
    {
      title: "Is the AI platform secure enough for sensitive data?",
      answer: "Yes. We maintain SOC 2 Type II, ISO 27001, and GDPR compliance. All data is encrypted at rest and in transit using bank-grade encryption. We perform regular security audits and penetration testing, with zero reported breaches since our inception.",
    },
    {
      title: "What if we need to customize the solution?",
      answer: "Our platform is fully customizable. You can adjust automation rules, create custom workflows, and integrate with any existing tools through our open API. Our team provides dedicated support for custom implementations at no additional cost.",
    },
    {
      title: "How reliable is the platform?",
      answer: "We maintain 99.99% uptime, backed by a formal SLA. Our system includes automatic failover and redundancy across multiple regions. All critical updates and maintenance are performed with zero downtime.",
    },
    {
      title: "What kind of support do you provide?",
      answer: "Every customer gets 24/7 technical support, a dedicated success manager, and access to our expert engineering team. We offer live chat, phone support, and guaranteed response times of under 1 hour for critical issues.",
    },
  ],
};