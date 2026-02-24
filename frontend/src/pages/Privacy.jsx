import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-[#FAF8F5]" data-testid="privacy-page">
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
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight leading-tight text-[#1A1A1A] mb-4" data-testid="privacy-title">
            Privacy Policy
          </h1>
          <p className="text-sm text-[#595959] mb-12">Last Updated: January 2026</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-medium text-[#1A1A1A] mb-4">Introduction</h2>
              <p className="text-[#595959] leading-relaxed mb-4">
                Wanbyukhan Holdings, LLC ("Company," "we," "us," or "our") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-medium text-[#1A1A1A] mb-4">Information We Collect</h2>
              <p className="text-[#595959] leading-relaxed mb-4">
                We collect minimal information necessary for legitimate business purposes. This may include:
              </p>
              <ul className="list-disc pl-6 text-[#595959] space-y-2 mb-4">
                <li>Contact information you voluntarily provide (name, email address)</li>
                <li>Communications you send to us</li>
                <li>Basic analytics data about website usage</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-medium text-[#1A1A1A] mb-4">How We Use Your Information</h2>
              <p className="text-[#595959] leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-[#595959] space-y-2 mb-4">
                <li>Respond to your inquiries and communications</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
                <li>Protect against fraudulent or illegal activity</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-medium text-[#1A1A1A] mb-4">Information Sharing</h2>
              <p className="text-[#595959] leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-[#595959] space-y-2 mb-4">
                <li>With service providers who assist in our operations</li>
                <li>To comply with legal requirements or respond to lawful requests</li>
                <li>To protect our rights, privacy, safety, or property</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-medium text-[#1A1A1A] mb-4">Data Security</h2>
              <p className="text-[#595959] leading-relaxed mb-4">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-medium text-[#1A1A1A] mb-4">Your Rights</h2>
              <p className="text-[#595959] leading-relaxed mb-4">
                Depending on your jurisdiction, you may have rights regarding your personal information, including the right to access, correct, delete, or port your data. To exercise these rights, please contact us using the information below.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-medium text-[#1A1A1A] mb-4">Changes to This Policy</h2>
              <p className="text-[#595959] leading-relaxed mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-[#1A1A1A] mb-4">Contact Us</h2>
              <p className="text-[#595959] leading-relaxed mb-4">
                If you have questions about this Privacy Policy or our privacy practices, please contact us at:
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
              <Link to="/privacy" className="text-sm text-[#8DA399] font-medium" data-testid="footer-privacy-link">
                Privacy Policy
              </Link>
              <span className="text-[#E6E4DE]">|</span>
              <Link to="/terms" className="text-sm text-[#595959] hover:text-[#8DA399] transition-colors" data-testid="footer-terms-link">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Privacy;
