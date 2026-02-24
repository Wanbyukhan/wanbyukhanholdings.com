import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Terms = () => {
  return (
    <div className="min-h-screen bg-[#FAF8F5]" data-testid="terms-page">
      {/* Noise overlay */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#FAF8F5]/80 border-b border-[#E6E4DE]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
          <Link to="/" className="text-[#1A1A1A] font-medium tracking-tight" data-testid="nav-logo">
            Wanbyukhan Holdings
          </Link>
          <Link 
            to="/"
            className="text-sm text-[#595959] hover:text-[#8DA399] transition-colors inline-flex items-center gap-2"
            data-testid="nav-back-btn"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </nav>

      {/* Content */}
      <main className="pt-32 pb-24 md:pb-32">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight leading-tight text-[#1A1A1A] mb-4" data-testid="terms-title">
            Terms of Use
          </h1>
          <p className="text-sm text-[#595959] mb-12">Last Updated: January 2026</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-medium text-[#1A1A1A] mb-4">Agreement to Terms</h2>
              <p className="text-[#595959] leading-relaxed mb-4">
                By accessing or using the website of Wanbyukhan Holdings, LLC ("Company," "we," "us," or "our"), you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our website.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-medium text-[#1A1A1A] mb-4">Use of Website</h2>
              <p className="text-[#595959] leading-relaxed mb-4">
                You may use our website for lawful purposes only. You agree not to:
              </p>
              <ul className="list-disc pl-6 text-[#595959] space-y-2 mb-4">
                <li>Use the website in any way that violates applicable laws or regulations</li>
                <li>Attempt to gain unauthorized access to any part of the website</li>
                <li>Interfere with or disrupt the website or servers</li>
                <li>Transmit any viruses, malware, or harmful code</li>
                <li>Collect information about other users without their consent</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-medium text-[#1A1A1A] mb-4">Intellectual Property</h2>
              <p className="text-[#595959] leading-relaxed mb-4">
                All content on this website, including text, graphics, logos, images, and software, is the property of Wanbyukhan Holdings, LLC or its licensors and is protected by intellectual property laws. You may not reproduce, distribute, modify, or create derivative works without our express written permission.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-medium text-[#1A1A1A] mb-4">Disclaimer of Warranties</h2>
              <p className="text-[#595959] leading-relaxed mb-4">
                This website is provided "as is" and "as available" without any warranties of any kind, express or implied. We do not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-medium text-[#1A1A1A] mb-4">Limitation of Liability</h2>
              <p className="text-[#595959] leading-relaxed mb-4">
                To the fullest extent permitted by law, Wanbyukhan Holdings, LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of the website.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-medium text-[#1A1A1A] mb-4">Indemnification</h2>
              <p className="text-[#595959] leading-relaxed mb-4">
                You agree to indemnify and hold harmless Wanbyukhan Holdings, LLC and its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising out of your use of the website or violation of these Terms.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-medium text-[#1A1A1A] mb-4">Governing Law</h2>
              <p className="text-[#595959] leading-relaxed mb-4">
                These Terms of Use shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-medium text-[#1A1A1A] mb-4">Changes to Terms</h2>
              <p className="text-[#595959] leading-relaxed mb-4">
                We reserve the right to modify these Terms of Use at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website constitutes acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-[#1A1A1A] mb-4">Contact Us</h2>
              <p className="text-[#595959] leading-relaxed mb-4">
                If you have questions about these Terms of Use, please contact us at:
              </p>
              <p className="text-[#1A1A1A]">
                <a href="mailto:contact@wanbyukhanholdings.com" className="hover:text-[#8DA399] transition-colors">
                  contact@wanbyukhanholdings.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 bg-[#FAF8F5] border-t border-[#E6E4DE]" data-testid="footer">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-[#1A1A1A] font-medium mb-1">Wanbyukhan Holdings, LLC</p>
              <p className="text-sm text-[#595959]">© 2026 All Rights Reserved</p>
            </div>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="text-sm text-[#595959] hover:text-[#8DA399] transition-colors" data-testid="footer-privacy-link">
                Privacy Policy
              </Link>
              <span className="text-[#E6E4DE]">|</span>
              <Link to="/terms" className="text-sm text-[#8DA399] font-medium" data-testid="footer-terms-link">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Terms;
