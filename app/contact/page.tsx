import type { Metadata } from "next";
import { ContactForm } from "./ContactForm";
import { Mail, Phone, Clock, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Munzeer.com — book a free strategy call, ask a question, or start a project.",
};

const contactInfo = [
  {
    icon: Phone,
    label: "WhatsApp",
    value: "+971 56 979 3494",
    href: "https://wa.me/971569793494",
  },
  {
    icon: Mail,
    label: "Email",
    value: "enquiry.munzeer@gmail.com",
    href: "mailto:enquiry.munzeer@gmail.com",
  },
  {
    icon: Clock,
    label: "Response time",
    value: "Within 2 hours",
    href: null,
  },
  {
    icon: Globe,
    label: "Availability",
    value: "Mon–Sat, 9am–9pm GST",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="section">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-violet-600 text-sm font-semibold uppercase tracking-widest mb-3">
              Get in touch
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-zinc-950 mb-4">
              Let's talk about your project
            </h1>
            <p className="text-zinc-500 text-lg max-w-xl mx-auto">
              Book a free 30-minute strategy call, ask a question, or just say hello. We reply within 2 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Contact info */}
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <div key={item.label} className="card">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-violet-100 rounded-xl flex items-center justify-center shrink-0">
                      <item.icon className="w-4 h-4 text-violet-600" />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-400">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className="text-sm font-semibold text-zinc-950 hover:text-violet-600 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm font-semibold text-zinc-950">{item.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              <a
                href="https://wa.me/971569793494?text=Hi%2C+I%27d+like+to+book+a+free+strategy+call"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full justify-center"
              >
                WhatsApp us directly
              </a>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-2">
              <div className="card">
                <h2 className="text-lg font-bold text-zinc-950 mb-6">Send us a message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
