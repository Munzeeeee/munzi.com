import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Munzeer.com",
};

export default function TermsPage() {
  return (
    <section className="section">
      <div className="max-w-3xl mx-auto prose prose-zinc prose-sm sm:prose-base">
        <h1>Terms of Service</h1>
        <p>Last updated: January 2025</p>

        <h2>Services</h2>
        <p>
          Munzeer.com provides digital services including web development, digital marketing, AI automation, marketplace listing optimisation, and related services. All services are subject to a separate written agreement or quote.
        </p>

        <h2>Payment</h2>
        <p>
          Payment terms are specified in each project proposal. We typically require a deposit before commencing work. Final payment is due upon project completion and before final delivery. All prices are in USD unless otherwise stated.
        </p>

        <h2>Intellectual Property</h2>
        <p>
          Upon final payment, clients receive full ownership of all deliverables created specifically for their project. We retain the right to showcase work in our portfolio unless otherwise agreed.
        </p>

        <h2>Revisions</h2>
        <p>
          Each project includes a specified number of revision rounds as detailed in the project proposal. Additional revisions beyond the agreed scope are charged at our standard hourly rate.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          Munzeer.com's liability is limited to the amount paid for the specific service in question. We are not liable for indirect, incidental, or consequential damages.
        </p>

        <h2>Governing Law</h2>
        <p>
          These terms are governed by the laws of the United Arab Emirates. Any disputes shall be resolved through good-faith negotiation first.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about these terms? Email{" "}
          <a href="mailto:info@munzeer.com">info@munzeer.com</a>.
        </p>
      </div>
    </section>
  );
}
