import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: "Faxio Tech's privacy policy — how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="pt-32 pb-24 bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <span className="section-label mb-4">Legal</span>
            <h1 className="text-4xl sm:text-5xl font-bold font-display text-gray-900 mt-4 mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-500 text-sm">
              Last updated: <strong>January 1, 2026</strong>
            </p>
          </div>

          {/* Content */}
          <div className="prose max-w-none space-y-8">

            <div>
              <p>
                Faxio Tech ("Company," "we," "us," or "our") operates the website{' '}
                <strong>faxioit.com</strong> ("Site"). This Privacy Policy explains how we collect,
                use, disclose, and safeguard your information when you visit our Site or engage our
                services. By using the Site, you consent to the data practices described in this policy.
              </p>
            </div>

            <div>
              <h2>1. Information We Collect</h2>
              <h3>1.1 Information You Provide Directly</h3>
              <p>We collect information you voluntarily provide when you:</p>
              <ul>
                <li>Complete a contact or inquiry form</li>
                <li>Subscribe to our newsletter or blog updates</li>
                <li>Request a project consultation or quote</li>
                <li>Communicate with us by email, phone, or chat</li>
              </ul>
              <p>
                This may include your name, email address, phone number, company name, project
                details, and any other information you choose to provide.
              </p>

              <h3>1.2 Automatically Collected Information</h3>
              <p>
                When you visit our Site, we may automatically collect certain technical information,
                including your IP address, browser type and version, operating system, referring URLs,
                pages visited, time and date of your visit, and time spent on pages.
              </p>

              <h3>1.3 Cookies and Tracking Technologies</h3>
              <p>
                We use cookies and similar tracking technologies to enhance your browsing experience.
                You can control cookie settings through your browser preferences. Disabling certain
                cookies may affect the functionality of our Site.
              </p>
            </div>

            <div>
              <h2>2. How We Use Your Information</h2>
              <p>We use the information we collect for the following purposes:</p>
              <ul>
                <li>To respond to inquiries and communicate about potential or ongoing projects</li>
                <li>To send newsletters, updates, and marketing communications (with your consent)</li>
                <li>To improve our website, services, and user experience</li>
                <li>To analyze usage patterns and optimize our marketing efforts</li>
                <li>To comply with legal obligations and protect our rights</li>
                <li>To detect, prevent, and address technical issues or security breaches</li>
              </ul>
            </div>

            <div>
              <h2>3. Legal Basis for Processing (GDPR)</h2>
              <p>
                If you are located in the European Economic Area (EEA), our legal bases for
                processing personal data are:
              </p>
              <ul>
                <li><strong>Contract:</strong> Processing necessary to fulfill a service agreement with you.</li>
                <li><strong>Legitimate Interests:</strong> Processing for our business operations that does not override your rights.</li>
                <li><strong>Consent:</strong> Processing based on your explicit consent (e.g., marketing emails).</li>
                <li><strong>Legal Obligation:</strong> Processing required to comply with applicable laws.</li>
              </ul>
            </div>

            <div>
              <h2>4. Sharing of Information</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may
                share information with:
              </p>
              <ul>
                <li>
                  <strong>Service Providers:</strong> Trusted third parties who assist us in operating our website
                  and business (e.g., email platforms, analytics providers), bound by confidentiality agreements.
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by law or in response to valid legal process.
                </li>
                <li>
                  <strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets,
                  your information may be transferred as a business asset.
                </li>
              </ul>
            </div>

            <div>
              <h2>5. Data Retention</h2>
              <p>
                We retain personal information for as long as necessary to fulfill the purposes for
                which it was collected, including satisfying legal, accounting, or reporting
                requirements. When we no longer need your information, we securely delete or
                anonymize it.
              </p>
            </div>

            <div>
              <h2>6. Data Security</h2>
              <p>
                We implement appropriate technical and organizational security measures to protect
                your personal information against unauthorized access, alteration, disclosure, or
                destruction. However, no method of transmission over the Internet or electronic
                storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2>7. Your Rights</h2>
              <p>Depending on your location, you may have the right to:</p>
              <ul>
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate or incomplete data</li>
                <li>Request deletion of your personal data ("right to be forgotten")</li>
                <li>Object to or restrict certain processing activities</li>
                <li>Request portability of your data in a machine-readable format</li>
                <li>Withdraw consent at any time (without affecting prior processing)</li>
                <li>Lodge a complaint with a supervisory authority</li>
              </ul>
              <p>
                To exercise any of these rights, contact us at{' '}
                <a href="mailto:hello@faxio.in">hello@faxio.in</a>.
              </p>
            </div>

            <div>
              <h2>8. Third-Party Links</h2>
              <p>
                Our Site may contain links to third-party websites. We have no control over the
                content or privacy practices of those sites and are not responsible for their
                policies. We encourage you to review the privacy policies of any third-party site
                you visit.
              </p>
            </div>

            <div>
              <h2>9. Children's Privacy</h2>
              <p>
                Our Site is not directed to children under the age of 13. We do not knowingly
                collect personal information from children. If you believe we have inadvertently
                collected information from a child, please contact us immediately and we will
                take steps to delete it.
              </p>
            </div>

            <div>
              <h2>10. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. When we do, we will update
                the "Last updated" date at the top of this page. Material changes will be
                communicated via email or a prominent notice on our Site. Your continued use of
                the Site after any changes constitutes acceptance of the updated policy.
              </p>
            </div>

            <div>
              <h2>11. Contact Us</h2>
              <p>If you have questions or concerns about this Privacy Policy, please contact us:</p>
              <ul>
                <li><strong>Email:</strong> <a href="mailto:hello@faxio.in">hello@faxio.in</a></li>
                <li><strong>Phone:</strong> +1 (555) 000-0000</li>
                <li><strong>Address:</strong> Faxio Tech, San Francisco, CA, USA</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100 flex flex-wrap gap-4">
            <Link href="/" className="text-sm text-blue-600 hover:underline">← Back to Home</Link>
            <Link href="/terms-and-conditions" className="text-sm text-blue-600 hover:underline">
              Terms & Conditions →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
