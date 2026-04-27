import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Refund Policy — Munzeer.com",
  description: "Refund and cancellation policy for Munzeer.com services.",
};

export default function RefundPage() {
  return (
    <section className="section">
      <div className="max-w-3xl mx-auto prose prose-zinc prose-sm sm:prose-base">
        <h1>Refund Policy</h1>
        <p>Last updated: April 2025</p>

        <h2>Our Commitment</h2>
        <p>
          At Munzeer.com, we stand behind the quality of our work. This policy outlines when refunds are available and how to request them.
        </p>

        <h2>Project Deposits</h2>
        <p>
          All projects require a deposit (typically 50% of the total) before work begins. This deposit is <strong>non-refundable</strong> once the project scope has been confirmed and work has commenced, as it covers planning, research, and initial development costs.
        </p>

        <h2>Milestone Payments</h2>
        <p>
          For larger projects broken into milestones, payments made for a completed milestone are non-refundable. If you cancel mid-project, you are liable only for milestones already delivered — we will not bill for future milestones.
        </p>

        <h2>Final Payments</h2>
        <p>
          Final payments are due upon project completion and prior to final delivery of files or access credentials. Once final delivery is made and accepted, no refund is available.
        </p>

        <h2>Eligible Refunds</h2>
        <p>You may be eligible for a partial or full refund in the following circumstances:</p>
        <ul>
          <li>We are unable to deliver the agreed scope within the agreed timeline due to our own failure (not due to late client feedback or missing assets).</li>
          <li>The delivered work materially deviates from the agreed written scope and we are unable to remedy it within 14 days of written notice.</li>
          <li>The project has not yet started and you cancel within 48 hours of placing the deposit.</li>
        </ul>

        <h2>Non-Refundable Services</h2>
        <p>The following are not eligible for refunds under any circumstances:</p>
        <ul>
          <li>Physical products (NFC cards, printed business cards) once dispatched.</li>
          <li>Ad spend or third-party platform fees paid on your behalf.</li>
          <li>Domain registrations, hosting fees, or third-party software licences purchased for your project.</li>
          <li>Monthly retainer fees for the current billing period.</li>
          <li>Work already delivered and signed off by the client.</li>
        </ul>

        <h2>Cancellation of Monthly Services</h2>
        <p>
          Monthly services (SEO, ads management, retainers) may be cancelled with <strong>14 days' written notice</strong> before the next billing cycle. Cancellations after that date will take effect from the following cycle. We do not pro-rate partial months.
        </p>

        <h2>How to Request a Refund</h2>
        <p>
          To request a refund, email us at{" "}
          <a href="mailto:info@munzeer.com">info@munzeer.com</a> with the subject line <em>Refund Request — [Your Project Name]</em>. Include your project details and the reason for the request. We aim to respond within 3 business days.
        </p>

        <h2>Dispute Resolution</h2>
        <p>
          If we cannot reach an agreement, disputes will be handled through good-faith negotiation first. We genuinely want every client to be satisfied — please talk to us before escalating.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about this policy?{" "}
          <Link href="/contact">Contact us here</Link> or email{" "}
          <a href="mailto:info@munzeer.com">info@munzeer.com</a>.
        </p>
      </div>
    </section>
  );
}
