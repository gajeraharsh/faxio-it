import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: "Faxio Tech's terms and conditions governing use of our website and services.",
};

export default function TermsPage() {
  return (
    <section className="pt-32 pb-24 bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <span className="section-label mb-4">Legal</span>
            <h1 className="text-4xl sm:text-5xl font-bold font-display text-gray-900 mt-4 mb-4">
              Terms & Conditions
            </h1>
            <p className="text-gray-500 text-sm">
              Last updated: <strong>January 1, 2026</strong>
            </p>
          </div>

          <div className="prose max-w-none space-y-8">

            <div>
              <p>
                These Terms and Conditions ("Terms") govern your access to and use of the Faxio Tech
                website at <strong>faxioit.com</strong> ("Site") and any services offered by Faxio Tech
                ("Company," "we," "us," or "our"). By accessing the Site or engaging our services,
                you agree to be bound by these Terms. If you do not agree, please do not use the Site.
              </p>
            </div>

            <div>
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing or using the Site, you confirm that you are at least 18 years of age,
                have read and understood these Terms, and agree to be legally bound by them. If you
                are using the Site on behalf of an organization, you represent that you have the
                authority to bind that organization to these Terms.
              </p>
            </div>

            <div>
              <h2>2. Use of the Site</h2>
              <h3>2.1 Permitted Use</h3>
              <p>
                You may use the Site for lawful purposes only and in accordance with these Terms.
                You may browse the Site, submit inquiries, and engage with publicly available content.
              </p>
              <h3>2.2 Prohibited Conduct</h3>
              <p>You agree not to:</p>
              <ul>
                <li>Use the Site in any way that violates applicable laws or regulations</li>
                <li>Attempt to gain unauthorized access to any part of the Site or its related systems</li>
                <li>Transmit any harmful, offensive, defamatory, or infringing content</li>
                <li>Use automated scripts, bots, or scrapers to collect data from the Site</li>
                <li>Impersonate any person or entity or misrepresent your affiliation</li>
                <li>Interfere with the proper operation of the Site or servers</li>
                <li>Attempt to reverse-engineer, decompile, or disassemble any part of the Site</li>
              </ul>
            </div>

            <div>
              <h2>3. Intellectual Property</h2>
              <p>
                All content on the Site — including but not limited to text, graphics, logos,
                design, code, and imagery — is the property of Faxio Tech or its licensors and is
                protected by copyright, trademark, and other intellectual property laws.
              </p>
              <p>
                You may not reproduce, distribute, modify, create derivative works from, publicly
                display, or exploit any content from the Site without our express written permission.
                Limited copying for personal, non-commercial use is permitted provided you retain all
                copyright notices.
              </p>
            </div>

            <div>
              <h2>4. Services and Client Agreements</h2>
              <p>
                These Terms govern your use of the Site only. Separate written agreements (Statements
                of Work, Service Agreements, or Master Service Agreements) govern any professional
                services engagements. In the event of conflict between these Terms and a signed
                service agreement, the service agreement will prevail.
              </p>
            </div>

            <div>
              <h2>5. Disclaimers</h2>
              <h3>5.1 No Warranty</h3>
              <p>
                THE SITE AND ITS CONTENT ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT
                WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING BUT
                NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
                AND NON-INFRINGEMENT.
              </p>
              <h3>5.2 Accuracy of Information</h3>
              <p>
                While we strive to keep information on the Site accurate and current, we make no
                representations or warranties about the completeness, accuracy, reliability, or
                suitability of the information. You should not rely on Site content as a substitute
                for professional advice.
              </p>
            </div>

            <div>
              <h2>6. Limitation of Liability</h2>
              <p>
                TO THE FULLEST EXTENT PERMITTED BY LAW, FAXIO IT AND ITS OFFICERS, DIRECTORS,
                EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
                CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO YOUR USE OF THE SITE
                OR THESE TERMS, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
              </p>
              <p>
                IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS EXCEED THE GREATER OF
                ONE HUNDRED US DOLLARS ($100) OR THE AMOUNT PAID BY YOU TO US IN THE TWELVE MONTHS
                PRECEDING THE CLAIM.
              </p>
            </div>

            <div>
              <h2>7. Third-Party Links and Services</h2>
              <p>
                The Site may contain links to third-party websites or services not operated by us.
                We have no control over and assume no responsibility for the content, privacy policies,
                or practices of any third-party sites. We encourage you to review the terms and privacy
                policies of any third-party sites you visit.
              </p>
            </div>

            <div>
              <h2>8. Indemnification</h2>
              <p>
                You agree to defend, indemnify, and hold harmless Faxio Tech and its affiliates,
                officers, directors, employees, and agents from any claims, damages, losses,
                liabilities, costs, and expenses (including attorneys' fees) arising from: (a) your
                use of the Site, (b) your violation of these Terms, or (c) your violation of any
                third-party rights.
              </p>
            </div>

            <div>
              <h2>9. Governing Law and Dispute Resolution</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the
                State of California, United States, without regard to its conflict of law provisions.
              </p>
              <p>
                Any disputes arising under or in connection with these Terms shall first be subject
                to good-faith negotiation. If unresolved, disputes shall be submitted to binding
                arbitration in San Francisco, California, under the rules of the American Arbitration
                Association. Each party bears its own costs unless the arbitrator rules otherwise.
              </p>
            </div>

            <div>
              <h2>10. Termination</h2>
              <p>
                We reserve the right to terminate or restrict your access to the Site at our sole
                discretion, without notice, for any conduct that we believe violates these Terms or
                is harmful to other users, us, or third parties.
              </p>
            </div>

            <div>
              <h2>11. Severability</h2>
              <p>
                If any provision of these Terms is found to be unenforceable or invalid, that
                provision shall be modified to the minimum extent necessary to make it enforceable,
                and the remaining provisions shall continue in full force and effect.
              </p>
            </div>

            <div>
              <h2>12. Entire Agreement</h2>
              <p>
                These Terms, together with our Privacy Policy, constitute the entire agreement
                between you and Faxio Tech with respect to your use of the Site, and supersede all
                prior agreements and understandings.
              </p>
            </div>

            <div>
              <h2>13. Changes to Terms</h2>
              <p>
                We may revise these Terms at any time by updating this page. The "Last updated"
                date will reflect the most recent revision. Your continued use of the Site after
                changes are posted constitutes your acceptance of the revised Terms.
              </p>
            </div>

            <div>
              <h2>14. Contact Information</h2>
              <p>Questions about these Terms? Contact us:</p>
              <ul>
                <li><strong>Email:</strong> <a href="mailto:hello@faxio.in">hello@faxio.in</a></li>
                <li><strong>Phone:</strong> +1 (555) 000-0000</li>
                <li><strong>Address:</strong> Faxio Tech, San Francisco, CA, USA</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100 flex flex-wrap gap-4">
            <Link href="/" className="text-sm text-blue-600 hover:underline">← Back to Home</Link>
            <Link href="/privacy-policy" className="text-sm text-blue-600 hover:underline">
              Privacy Policy →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
