import { Faq } from '@/components/faq';

const pricingFaqDefaults = {
  heading: "Frequently Asked Questions",
  description: "Get answers to common questions about our pricing and plans",
  questions: [
    {
      title: "How does the 14-day trial work?",
      answer: "Start with any plan free for 14 days. No credit card required. Test all features risk-free and upgrade, downgrade, or cancel anytime.",
    },
    {
      title: "Can I switch plans later?",
      answer: "Yes, you can upgrade, downgrade, or change your plan at any time. Changes take effect immediately and we'll prorate any payments.",
    },
    {
      title: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express) and offer invoicing for Enterprise plans.",
    },
    {
      title: "Is there a long-term contract?",
      answer: "No, all plans are month-to-month with no long-term commitment. Enterprise plans can opt for annual billing with a discount.",
    },
    {
      title: "What happens after the trial?",
      answer: "After 14 days, you'll be automatically switched to your chosen plan. We'll notify you before the trial ends and you can cancel anytime.",
    },
    {
      title: "Do you offer custom plans?",
      answer: "Yes, Enterprise customers can get custom plans tailored to their specific needs. Contact our sales team to learn more.",
    },
  ],
};

export const PricingFaq = () => <Faq {...pricingFaqDefaults} />;