"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Mail, 
  Send, 
  Github, 
  Linkedin, 
  Facebook, 
  Instagram, 
  MessageSquare,
  MapPin,
  Phone,
  CheckCircle2,
  AlertCircle
} from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("loading");

    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Reset status after 3 seconds
      setTimeout(() => setFormStatus("idle"), 3000);
    }, 2000);
  };

  return (
    <section id="contacts" className="min-h-screen py-20 px-4 bg-dark-primary">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-sm font-fira text-light-secondary mb-4 tracking-widest">
            ... /Contacts ...
          </h2>
          <h3 className="text-4xl md:text-5xl font-fira font-bold text-light-primary mb-4">
            Let's Work Together
          </h3>
          <p className="text-light-secondary font-sans text-lg max-w-2xl mx-auto">
            Have a project in mind? Feel free to reach out. I'm always open to discussing new projects and opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Form */}
          <div className="animate-fadeIn">
            <div className="bg-dark-secondary/30 border border-dark-secondary rounded-3xl p-8 hover:border-light-secondary/30 transition-all duration-300">
              <h4 className="text-2xl font-fira font-semibold text-light-primary mb-6">
                Send Message
              </h4>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-light-secondary font-sans text-sm mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-primary border border-dark-secondary rounded-xl text-light-primary font-sans text-sm focus:outline-none focus:border-light-primary transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-light-secondary font-sans text-sm mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-primary border border-dark-secondary rounded-xl text-light-primary font-sans text-sm focus:outline-none focus:border-light-primary transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Subject Input */}
                <div>
                  <label htmlFor="subject" className="block text-light-secondary font-sans text-sm mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-primary border border-dark-secondary rounded-xl text-light-primary font-sans text-sm focus:outline-none focus:border-light-primary transition-colors"
                    placeholder="Project Inquiry"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label htmlFor="message" className="block text-light-secondary font-sans text-sm mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-dark-primary border border-dark-secondary rounded-xl text-light-primary font-sans text-sm focus:outline-none focus:border-light-primary transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  disabled={formStatus === "loading"}
                  className="w-full bg-light-primary text-dark-primary hover:bg-light-secondary transition-all duration-300 rounded-xl py-6 text-base font-sans font-semibold disabled:opacity-50"
                >
                  {formStatus === "loading" ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-dark-primary border-t-transparent mr-2"></div>
                      Sending...
                    </>
                  ) : formStatus === "success" ? (
                    <>
                      <CheckCircle2 className="mr-2 h-5 w-5" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>

                {/* Status Messages */}
                {formStatus === "success" && (
                  <div className="flex items-center gap-2 text-green-500 font-sans text-sm bg-green-500/10 border border-green-500/30 rounded-xl p-3">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Your message has been sent successfully!</span>
                  </div>
                )}

                {formStatus === "error" && (
                  <div className="flex items-center gap-2 text-red-500 font-sans text-sm bg-red-500/10 border border-red-500/30 rounded-xl p-3">
                    <AlertCircle className="h-4 w-4" />
                    <span>Something went wrong. Please try again.</span>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Right Side - Contact Info & Social */}
          <div className="space-y-8 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
            {/* Contact Info Cards */}
            <div className="space-y-4">
              <h4 className="text-2xl font-fira font-semibold text-light-primary mb-6">
                Contact Information
              </h4>

              <ContactInfoCard
                icon={<Mail className="h-5 w-5" />}
                label="Email"
                value="nik.khvat@gmail.com"
                link="mailto:nik.khvat@gmail.com"
              />

              <ContactInfoCard
                icon={<MapPin className="h-5 w-5" />}
                label="Location"
                value="Tbilisi, Georgia"
              />

              <ContactInfoCard
                icon={<Phone className="h-5 w-5" />}
                label="Phone"
                value="+995 XXX XXX XXX"
                link="tel:+995XXXXXXXXX"
              />
            </div>

            {/* Social Links */}
            <div className="bg-dark-secondary/30 border border-dark-secondary rounded-3xl p-8 hover:border-light-secondary/30 transition-all duration-300">
              <h4 className="text-xl font-fira font-semibold text-light-primary mb-6">
                Connect With Me
              </h4>

              <div className="grid grid-cols-2 gap-4">
                <SocialButton 
                  icon={<Github className="h-5 w-5" />}
                  label="Github"
                  href="https://github.com"
                />
                <SocialButton 
                  icon={<Linkedin className="h-5 w-5" />}
                  label="LinkedIn"
                  href="https://linkedin.com"
                />
                <SocialButton 
                  icon={<Facebook className="h-5 w-5" />}
                  label="Facebook"
                  href="https://facebook.com"
                />
                <SocialButton 
                  icon={<Instagram className="h-5 w-5" />}
                  label="Instagram"
                  href="https://instagram.com"
                />
                <SocialButton 
                  icon={<Send className="h-5 w-5" />}
                  label="Telegram"
                  href="https://t.me"
                />
                <SocialButton 
                  icon={<MessageSquare className="h-5 w-5" />}
                  label="Discord"
                  href="https://discord.com"
                />
              </div>
            </div>

            {/* Site Info */}
            <div className="bg-dark-secondary/30 border border-dark-secondary rounded-3xl p-8">
              <h4 className="text-xl font-fira font-semibold text-light-primary mb-3">
                Site
              </h4>
              <div className="space-y-2 text-light-secondary font-sans text-sm">
                <p>Handcrafted by me © 2024</p>
                <p>Designed in Figma</p>
                <p>Powered by Next.js</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Contact Info Card Component
const ContactInfoCard = ({ 
  icon, 
  label, 
  value,
  link 
}: { 
  icon: React.ReactNode; 
  label: string; 
  value: string;
  link?: string;
}) => {
  const content = (
    <div className="flex items-start gap-4 bg-dark-secondary/30 border border-dark-secondary rounded-2xl p-5 hover:border-light-secondary/30 transition-all duration-300 group">
      <div className="p-3 bg-dark-primary rounded-xl text-light-primary group-hover:text-light-primary group-hover:bg-light-primary/10 transition-colors">
        {icon}
      </div>
      <div className="flex-1">
        <p className="text-light-secondary font-sans text-xs mb-1">{label}</p>
        <p className="text-light-primary font-sans text-base font-semibold">{value}</p>
      </div>
    </div>
  );

  if (link) {
    return <a href={link} className="block">{content}</a>;
  }

  return content;
};

// Social Button Component
const SocialButton = ({ 
  icon, 
  label, 
  href 
}: { 
  icon: React.ReactNode; 
  label: string; 
  href: string;
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 p-4 bg-dark-primary border border-dark-secondary rounded-xl hover:border-light-primary hover:bg-dark-secondary/50 transition-all duration-300 group"
    >
      <span className="text-light-secondary group-hover:text-light-primary transition-colors">
        {icon}
      </span>
      <span className="text-light-secondary group-hover:text-light-primary font-sans text-sm font-semibold transition-colors">
        {label}
      </span>
    </a>
  );
};

export default ContactSection;