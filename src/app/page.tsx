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
import { Database, Mail, Map, Share2, Shield, ShoppingCart, Star, Zap, MapPin, Phone } from "lucide-react";

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
        { name: "Services", id: "#features" },
        { name: "Testimonials", id: "#testimonials" },
        { name: "FAQ", id: "#faq" },
        { name: "Blog", id: "#blog" },
      ]}
      brandName="Top Top Business Consultants Pty Ltd"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitKpi
      background={{
        variant: "gradient-bars"}}
      title="Top Top Business Consultants Pty Ltd"
      description="Professional consulting services located at 337 Surrey Ave, Ferndale, Randburg. We provide expert business guidance tailored to your specific needs."
      kpis={[
        { value: "4.1/5", label: "Customer Rating" },
        { value: "8", label: "Total Reviews" },
        { value: "011 568 1493", label: "Contact Us" },
      ]}
      enableKpiAnimation={true}
      imageSrc="http://img.b2bpic.net/free-photo/man-woman-collaborate-content-creation-media-industry_482257-126685.jpg"
      mediaAnimation="slide-up"
      avatarText="Trusted by our local community"
      marqueeItems={[
        { type: "text-icon", text: "337 Surrey Ave, Ferndale", icon: MapPin },
        { type: "text-icon", text: "011 568 1493", icon: Phone },
        { type: "text-icon", text: "Expert Consulting", icon: Shield },
      ]}
    />
  </div>

  <div id="metrics" data-section="metrics">
      <AboutMetric
      useInvertedBackground={false}
      title="Business Excellence"
      metrics={[
        { icon: Star, label: "Rating", value: "4.1" },
        { icon: Database, label: "Reviews", value: "8" },
        { icon: MapPin, label: "Location", value: "Randburg" },
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
          title: "Business Strategy",          description: "Comprehensive consulting services tailored to the needs of local businesses in Randburg.",          imageSrc: "http://img.b2bpic.net/free-photo/map-gps-location-direction-position-graphic_53876-132170.jpg"},
        {
          title: "Professional Advice",          description: "Expert guidance from our experienced team to help your business reach new heights.",          imageSrc: "http://img.b2bpic.net/free-photo/freelancer-uses-virtual-assistant-via-artificial-intelligence-solutions_482257-123038.jpg"},
        {
          title: "Location Focused",          description: "Conveniently situated at 337 Surrey Ave, we are accessible to support your operations locally.",          imageSrc: "http://img.b2bpic.net/free-photo/robot-with-screen_1048-4564.jpg"},
      ]}
      title="Expert Business Consulting"
      description="We combine local knowledge with professional consulting standards to assist companies in the Randburg area."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSixteen
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",          name: "Client Feedback",          role: "Local Business",          company: "Randburg",          rating: 4.1,
          imageSrc: "http://img.b2bpic.net/free-photo/company-worker-browsing-internet-research-project-using-computer-create-business-report-with-charts-data-analyzing-network-information-web-presentation-handheld-shot_482257-50935.jpg"},
      ]}
      kpiItems={[
        { value: "4.1", label: "Rating" },
        { value: "8", label: "Reviews" },
        { value: "Active", label: "Consulting" },
      ]}
      title="Client Satisfaction"
      description="Our commitment to quality is reflected in the feedback from our valued clients."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",          title: "Where are you located?",          content: "We are located at 337 Surrey Ave, Ferndale, Randburg."},
        {
          id: "q2",          title: "How can I reach you?",          content: "You can call us directly at 011 568 1493."},
        {
          id: "q3",          title: "What is your focus?",          content: "We focus on high-quality business consulting to help local companies thrive."},
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
      title="Business Insights"
      description="Read about our latest consulting methodologies and local business updates."
      blogs={[
        {
          id: "b1",          category: "News",          title: "Ferndale Business Growth",          excerpt: "Explore how local firms are leveraging professional guidance to expand in Randburg.",          imageSrc: "http://img.b2bpic.net/free-photo/cloud-computing-network-connection-perforated-paper_53876-14262.jpg",          authorName: "Consulting Team",          authorAvatar: "http://img.b2bpic.net/free-photo/portrait-attractive-charming-brunette-glasses-blue-shirt-crossed-arms-listening-music-headphones-leaning-against-brick-wall-room-with-loft-design_613910-9173.jpg",          date: "Feb 2026"},
      ]}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "sparkles-gradient"}}
      tag="Contact Us"
      title="Get Professional Guidance"
      description="Located in the heart of Randburg at 337 Surrey Ave. Let's discuss how we can help your business."
      buttons={[
        {
          text: "Call 011 568 1493",          href: "tel:0115681493"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Services",          items: [
            { label: "Business Consulting", href: "#" },
          ],
        },
        {
          title: "Information",          items: [
            { label: "337 Surrey Ave", href: "#" },
            { label: "Ferndale, Randburg", href: "#" },
          ],
        },
        {
          title: "Support",          items: [
            { label: "011 568 1493", href: "tel:0115681493" },
            { label: "Privacy Policy", href: "#" },
          ],
        },
      ]}
      logoText="Top Top Business Consultants"
      copyrightText="© 2026 Top Top Business Consultants Pty Ltd"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}