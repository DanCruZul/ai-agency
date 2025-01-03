import { Cpu, BarChart3, Shield, Layers } from 'lucide-react';
import type { SolutionsProps } from './types';

export const solutionsDefaults: SolutionsProps = {
  tagline: "See it in action",
  heading: "Experience the power of AI automation",
  description: "Watch how our platform transforms complex workflows into streamlined processes",
  tabs: [
    {
      icon: Cpu,
      label: "Smart Automation",
      content: {
        title: "AI-Powered Workflow Automation",
        description: "Reduce manual work by 80% with intelligent process automation that learns and adapts.",
        features: [
          "Automated document processing with 99% accuracy",
          "Smart task prioritization and routing",
          "Real-time workflow optimization",
          "Custom automation rules engine"
        ],
        preview: {
          type: "interactive",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2000&q=80",
          alt: "AI-powered workflow automation dashboard showing real-time task processing",
          metrics: [
            { label: "Time Saved", value: "80%", suffix: "avg" },
            { label: "Error Reduction", value: "95%", suffix: "" },
            { label: "ROI", value: "3.5", prefix: "", suffix: "x" }
          ]
        }
      }
    },
    {
      icon: BarChart3,
      label: "Predictive Analytics",
      content: {
        title: "Data-Driven Intelligence",
        description: "Transform raw data into actionable insights with real-time analytics and forecasting.",
        features: [
          "Predictive trend analysis with 92% accuracy",
          "Automated report generation",
          "Custom KPI dashboards",
          "Anomaly detection"
        ],
        preview: {
          type: "dashboard",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2000&q=80",
          alt: "Real-time analytics dashboard showing business metrics and predictions",
          metrics: [
            { label: "Accuracy", value: "92%", suffix: "" },
            { label: "Processing Time", value: "0.5", suffix: "ms" },
            { label: "Cost Savings", value: "45%", suffix: "avg" }
          ]
        }
      }
    },
    {
      icon: Shield,
      label: "Enterprise Security",
      content: {
        title: "Bank-Grade Security",
        description: "Protect your data with advanced encryption and comprehensive compliance monitoring.",
        features: [
          "End-to-end 256-bit encryption",
          "Real-time threat detection",
          "Automated compliance checks",
          "Access control management"
        ],
        preview: {
          type: "dashboard",
          image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=2000&q=80",
          alt: "Security dashboard showing real-time threat monitoring",
          metrics: [
            { label: "Uptime", value: "99.99%", suffix: "" },
            { label: "Threat Detection", value: "100%", suffix: "" },
            { label: "Response Time", value: "<1", suffix: "min" }
          ]
        }
      }
    },
    {
      icon: Layers,
      label: "Seamless Integration",
      content: {
        title: "Connect Everything",
        description: "Integrate with your existing tools through our powerful API and pre-built connectors.",
        features: [
          "500+ pre-built integrations",
          "Custom API endpoints",
          "Real-time data sync",
          "No-code integration builder"
        ],
        preview: {
          type: "interactive",
          image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=2000&q=80",
          alt: "Integration dashboard showing connected systems and data flow",
          metrics: [
            { label: "Setup Time", value: "<2", suffix: "hrs" },
            { label: "Success Rate", value: "99.9%", suffix: "" },
            { label: "API Uptime", value: "100%", suffix: "" }
          ]
        }
      }
    }
  ]
};