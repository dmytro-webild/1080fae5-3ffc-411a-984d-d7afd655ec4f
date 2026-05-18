"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroSplitKpi from '@/components/sections/hero/HeroSplitKpi';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import { Database, Mail, Map, Share2, Shield, ShoppingCart, Star, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="compact"
        sizing="largeSmall"
        background="blurBottom"
        cardStyle="soft-shadow"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="glass"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Services",
          id: "#features",
        },
        {
          name: "Testimonials",
          id: "#testimonials",
        },
        {
          name: "FAQ",
          id: "#faq",
        },
        {
          name: "Blog",
          id: "#blog",
        },
      ]}
      brandName="Outscraper"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitKpi
      background={{
        variant: "gradient-bars",
      }}
      title="Get any public data from the internet"
      description="Scrape Google Maps Places, Reviews, Photos, and more. Apply cutting-edge technologies to extract the data you need reliably."
      kpis={[
        {
          value: "100M+",
          label: "Records Extracted",
        },
        {
          value: "99.9%",
          label: "Data Accuracy",
        },
        {
          value: "24/7",
          label: "Active Support",
        },
      ]}
      enableKpiAnimation={true}
      imageSrc="http://img.b2bpic.net/free-photo/man-woman-collaborate-content-creation-media-industry_482257-126685.jpg"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/notorious-trader-constructing-dynasty-via-shifts-markets_482257-88025.jpg",
          alt: "Notorious trader",
        },
        {
          src: "http://img.b2bpic.net/free-photo/person-working-relation-innovation_53876-16535.jpg",
          alt: "Innovation specialist",
        },
        {
          src: "http://img.b2bpic.net/free-photo/two-developers-team-interact-with-virtual-ai-assistant-pc-design-game-hub-using-machine_482257-136127.jpg",
          alt: "AI developers",
        },
        {
          src: "http://img.b2bpic.net/free-photo/woman-typing-prompts-into-ai-powered-chat-system-her-computer_482257-124123.jpg",
          alt: "AI prompt engineer",
        },
        {
          src: "http://img.b2bpic.net/free-photo/sleepy-frustrated-woman-monitoring-locating-couriers-traffic_482257-89108.jpg",
          alt: "Data manager",
        },
      ]}
      avatarText="Trusted by 500+ developers"
      marqueeItems={[
        {
          type: "text-icon",
          text: "Google Maps",
          icon: Map,
        },
        {
          type: "text-icon",
          text: "Email Verification",
          icon: Mail,
        },
        {
          type: "text-icon",
          text: "E-commerce Insights",
          icon: ShoppingCart,
        },
        {
          type: "text-icon",
          text: "Social Media",
          icon: Share2,
        },
        {
          type: "text-icon",
          text: "Review Mining",
          icon: Star,
        },
      ]}
    />
  </div>

  <div id="metrics" data-section="metrics">
      <AboutMetric
      useInvertedBackground={false}
      title="Reliability at Scale"
      metrics={[
        {
          icon: Database,
          label: "Data sources",
          value: "50+",
        },
        {
          icon: Zap,
          label: "Request speed",
          value: "Fast",
        },
        {
          icon: Shield,
          label: "Uptime",
          value: "99.9%",
        },
      ]}
      metricsAnimation="blur-reveal"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardEight
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          title: "Google Maps Scraping",
          description: "Extract precise location data, reviews, and contact info instantly.",
          imageSrc: "http://img.b2bpic.net/free-photo/map-gps-location-direction-position-graphic_53876-132170.jpg",
        },
        {
          title: "Email Validation",
          description: "Ensure your outreach list is clean and verified for maximum deliverability.",
          imageSrc: "http://img.b2bpic.net/free-photo/freelancer-uses-virtual-assistant-via-artificial-intelligence-solutions_482257-123038.jpg",
        },
        {
          title: "E-commerce Insights",
          description: "Monitor product pricing and reviews from Amazon and other major platforms.",
          imageSrc: "http://img.b2bpic.net/free-photo/robot-with-screen_1048-4564.jpg",
        },
      ]}
      title="Powerful Scraping Services"
      description="We stand for our beliefs and apply cutting-edge technologies to provide the data you need."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSixteen
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Mihai Vinatoru",
          role: "Managing Partner",
          company: "Outscraper Client",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/company-worker-browsing-internet-research-project-using-computer-create-business-report-with-charts-data-analyzing-network-information-web-presentation-handheld-shot_482257-50935.jpg",
        },
        {
          id: "2",
          name: "Sarah Jenkins",
          role: "CTO",
          company: "Growth Agency",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-smiling-employee_1098-1210.jpg",
        },
        {
          id: "3",
          name: "Alex Chen",
          role: "Data Analyst",
          company: "Insights Corp",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-beautiful-middle-aged-business-woman_1262-3085.jpg",
        },
        {
          id: "4",
          name: "Maria Garcia",
          role: "Founder",
          company: "StartUp Pro",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/happy-business-woman-standing-outdoors_1262-20546.jpg",
        },
        {
          id: "5",
          name: "David Smith",
          role: "Lead Dev",
          company: "Web Solutions",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/cheerful-attractive-businesswoman-crossing-arms_1262-4724.jpg",
        },
      ]}
      kpiItems={[
        {
          value: "5.0",
          label: "Rating",
        },
        {
          value: "500+",
          label: "Happy Clients",
        },
        {
          value: "95%",
          label: "Retention",
        },
      ]}
      title="What Clients Say"
      description="We believe public data is for everybody. Here is why our clients trust our infrastructure."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "Is scraping legal?",
          content: "We extract only public data, adhering to strict ethical standards and industry guidelines.",
        },
        {
          id: "q2",
          title: "How fast is delivery?",
          content: "Our distributed architecture ensures lightning-fast data processing for any scale.",
        },
        {
          id: "q3",
          title: "Can I integrate APIs?",
          content: "Yes, our platform supports seamless integration with Zapier, Make.com, and custom webhooks.",
        },
      ]}
      sideTitle="Common Questions"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="blog" data-section="blog">
      <BlogCardOne
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      title="Latest Tutorials"
      description="Learn how to automate your workflows and maximize your data scraping results."
      blogs={[
        {
          id: "b1",
          category: "Tutorial",
          title: "Automate Google Maps Leads",
          excerpt: "Connect Outscraper to Make.com and turn data into Google Sheets rows.",
          imageSrc: "http://img.b2bpic.net/free-photo/cloud-computing-network-connection-perforated-paper_53876-14262.jpg",
          authorName: "Dev Team",
          authorAvatar: "http://img.b2bpic.net/free-photo/portrait-attractive-charming-brunette-glasses-blue-shirt-crossed-arms-listening-music-headphones-leaning-against-brick-wall-room-with-loft-design_613910-9173.jpg",
          date: "Feb 2026",
        },
        {
          id: "b2",
          category: "Tutorial",
          title: "Scraping Data at Scale",
          excerpt: "How to handle large volumes of business records effectively.",
          imageSrc: "http://img.b2bpic.net/free-photo/smart-photovoltaics-factory-expert-gathering-system-performance-metrics-with-ai_482257-125992.jpg",
          authorName: "Dev Team",
          authorAvatar: "http://img.b2bpic.net/free-photo/business-woman-green-suit-using-phone-outside-street_1303-29546.jpg",
          date: "Jan 2026",
        },
        {
          id: "b3",
          category: "Tutorial",
          title: "Data Ethics Guide",
          excerpt: "Best practices for respectful web scraping in 2026.",
          imageSrc: "http://img.b2bpic.net/free-photo/multiethnic-specialists-engineers-doing-teamwork-modern-production-line_482257-125956.jpg",
          authorName: "Dev Team",
          authorAvatar: "http://img.b2bpic.net/free-photo/confident-cheerful-businesswoman_1262-21021.jpg",
          date: "Dec 2025",
        },
      ]}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "glowing-orb",
      }}
      tag="Get Started"
      title="Ready to get public data?"
      description="Join thousands of businesses relying on our infrastructure for accurate data delivery."
      buttons={[
        {
          text: "Start Scraping",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Product",
          items: [
            {
              label: "Maps Scraper",
              href: "#",
            },
            {
              label: "Email Validator",
              href: "#",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#",
            },
            {
              label: "Blog",
              href: "#",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "Contact",
              href: "#",
            },
            {
              label: "Privacy Policy",
              href: "#",
            },
          ],
        },
      ]}
      logoText="Outscraper"
      copyrightText="© 2026 Outscraper | Public data for everybody"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
