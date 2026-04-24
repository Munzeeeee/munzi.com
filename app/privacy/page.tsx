import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Munzeer.com",
};

export default function PrivacyPage() {
  return (
    <section className="section">
      <div className="max-w-3xl mx-auto prose prose-zinc prose-sm sm:prose-base">
        <h1>Privacy Policy</h1>
        <p>Last updated: January 2025</p>

        <h2>Information We Collect</h2>
        <p>
          We collect information you provide directly to us, such as when you fill out a contact form, request a quote, or place an order. This includes your name, email address, phone number, and details about your project.
        </p>

        <h2>How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Respond to your enquiries and provide the services you request</li>
          <li>Send you project updates and communications related to your order</li>
          <li>Improve our services and website</li>
        </ul>

        <h2>Information Sharing</h2>
        <p>
          We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers (such as email delivery services) who assist us in operating our website and delivering services, subject to confidentiality agreements.
        </p>

        <h2>Data Security</h2>
        <p>
          We implement appropriate security measures to protect your information. However, no method of transmission over the internet is 100% secure.
        </p>

        <h2>Cookies</h2>
        <p>
          Our website uses cookies to improve your experience. You can disable cookies through your browser settings, though this may affect some functionality.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy, please email us at{" "}
          <a href="mailto:enquiry.munzeer@gmail.com">enquiry.munzeer@gmail.com</a>.
        </p>
      </div>
    </section>
  );
}
