"use client";
import "./services.css";
import Copy from "@/components/Copy/Copy";
import BtnLink from "@/components/BtnLink/BtnLink";
import Footer from "@/components/Footer/Footer";

export default function Services() {
  const services = [
    {
      title: "Web Design & Development",
      description: "Custom website design and development using modern technologies like React, Next.js, and design systems.",
      features: ["Responsive Design", "Performance Optimization", "SEO Implementation", "CMS Integration"],
      price: "From £2,500"
    },
    {
      title: "UI/UX Design Services",
      description: "Complete digital product design from research and wireframing to high-fidelity prototypes and testing.",
      features: ["User Research", "Wireframing & Prototyping", "Design Systems", "Usability Testing"],
      price: "From £1,800"
    },
    {
      title: "Product Design Consulting",
      description: "Strategic design guidance for startups and established companies looking to improve their digital products.",
      features: ["Design Audits", "Strategy Sessions", "Team Training", "Design System Setup"],
      price: "From £150/hour"
    },
    {
      title: "Mobile App Design",
      description: "Native and cross-platform mobile app design with focus on user experience and platform guidelines.",
      features: ["iOS & Android Design", "React Native Development", "App Store Optimization", "User Testing"],
      price: "From £3,000"
    }
  ];

  return (
    <main className="services-page">
      <section className="services-hero">
        <Copy>
          <span>Freelance Design Services</span>
        </Copy>
        <div className="hero-content">
          <Copy>
            <h1>
              Professional web design, UI/UX design, and development services for startups and established businesses in London and worldwide.
            </h1>
          </Copy>
          <Copy delay={0.3}>
            <p>
              I help businesses create exceptional digital products through strategic design thinking, 
              user-centered research, and modern development practices. From initial concept to final launch, 
              I deliver comprehensive design solutions that drive results.
            </p>
          </Copy>
        </div>
      </section>

      <section className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <Copy delay={index * 0.1}>
              <div className="service-header">
                <h2>{service.title}</h2>
                <span className="price">{service.price}</span>
              </div>
            </Copy>
            <Copy delay={index * 0.1 + 0.2}>
              <p>{service.description}</p>
            </Copy>
            <Copy delay={index * 0.1 + 0.4}>
              <ul className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </Copy>
          </div>
        ))}
      </section>

      <section className="services-cta">
        <Copy>
          <h2>Ready to start your project?</h2>
        </Copy>
        <Copy delay={0.2}>
          <p>
            Get a free consultation and project quote. I'll review your requirements 
            and provide a detailed proposal within 24 hours.
          </p>
        </Copy>
        <Copy delay={0.4}>
          <div className="cta-buttons">
            <BtnLink href="/contact" text="Get Free Quote" />
            <BtnLink href="/case-studies" text="View Portfolio" />
          </div>
        </Copy>
      </section>

      <section className="why-choose">
        <Copy>
          <span>Why Choose Eric Manasse</span>
        </Copy>
        <div className="benefits-grid">
          <Copy>
            <div className="benefit">
              <h3>8+ Years Experience</h3>
              <p>Proven track record working with startups to Fortune 500 companies across fintech, mobility, and consumer sectors.</p>
            </div>
          </Copy>
          <Copy delay={0.2}>
            <div className="benefit">
              <h3>Design + Development</h3>
              <p>Unique combination of design expertise and technical development skills ensures seamless project execution.</p>
            </div>
          </Copy>
          <Copy delay={0.4}>
            <div className="benefit">
              <h3>London Based, Global Reach</h3>
              <p>Based in London with experience working remotely with international clients across different time zones.</p>
            </div>
          </Copy>
          <Copy delay={0.6}>
            <div className="benefit">
              <h3>End-to-End Solutions</h3>
              <p>From initial concept to final deployment, I handle every aspect of your digital product development.</p>
            </div>
          </Copy>
        </div>
      </section>

      <Footer />
    </main>
  );
}