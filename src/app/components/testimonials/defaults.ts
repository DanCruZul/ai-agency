import type { TestimonialsProps } from './types';

export const testimonialsDefaults: TestimonialsProps = {
  heading: "Real results from real customers",
  description: "Discover how organizations are achieving measurable success with our AI platform",
  testimonials: [
    {
      quote: "After implementing the AI automation suite, we reduced our data processing time from 48 hours to just 2 hours. This 96% improvement allowed us to deliver insights to our clients in near real-time.",
      avatar: {
        src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&h=150",
        alt: "James Wilson",
      },
      name: "James Wilson",
      position: "Head of Operations",
      companyName: "Global Analytics Ltd",
      numberOfStars: 5,
    },
    {
      quote: "Our customer support team now handles 3x more inquiries without adding headcount. The AI-powered automation has increased our first-response time by 78% while maintaining a 98% satisfaction rate.",
      avatar: {
        src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=150&h=150",
        alt: "Maria Rodriguez",
      },
      name: "Maria Rodriguez",
      position: "Customer Experience Director",
      companyName: "TechServe Solutions",
      numberOfStars: 5,
    },
    {
      quote: "Within 6 months, we achieved a 42% reduction in operational costs and eliminated 1,200 hours of manual work monthly. The ROI has been exceptional - we broke even on our investment in just 4 months.",
      avatar: {
        src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&h=150",
        alt: "Robert Chen",
      },
      name: "Robert Chen",
      position: "CFO",
      companyName: "Innovation Corp",
      numberOfStars: 5,
    },
    {
      quote: "Security was paramount for our financial services. The platform's compliance features helped us achieve SOC 2 certification 60% faster, while processing 2M+ transactions daily with zero security incidents.",
      avatar: {
        src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&h=150",
        alt: "Sarah Mitchell",
      },
      name: "Sarah Mitchell",
      position: "Information Security Officer",
      companyName: "SecureFinance Group",
      numberOfStars: 5,
    },
    {
      quote: "The AI analytics engine identified $2.3M in potential cost savings within the first quarter. We've already implemented 70% of the recommendations, resulting in a 23% increase in profit margins.",
      avatar: {
        src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150",
        alt: "David Park",
      },
      name: "David Park",
      position: "VP of Strategy",
      companyName: "Quantum Industries",
      numberOfStars: 5,
    },
    {
      quote: "Our development team reduced deployment errors by 89% and cut release cycles from 2 weeks to 2 days. The automated testing suite now covers 95% of our codebase, up from 60%.",
      avatar: {
        src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150",
        alt: "Michael Foster",
      },
      name: "Michael Foster",
      position: "Engineering Director",
      companyName: "DevOps Masters",
      numberOfStars: 5,
    },
  ],
};