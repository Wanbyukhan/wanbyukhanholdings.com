import { Link } from "react-router-dom";
import { Mail, MapPin, ArrowRight, Monitor, Globe, TrendingUp } from "lucide-react";

const Home = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5]" data-testid="home-page">
      {/* Noise overlay */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#FAF8F5]/80 border-b border-[#E6E4DE]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
          <Link to="/" className="text-[#1A1A1A] font-medium tracking-tight" data-testid="nav-logo">
            Wanbyukhan Holdings
          </Link>
          <button 
            onClick={scrollToContact}
            className="text-sm text-[#595959] hover:text-[#8DA399] transition-colors"
            data-testid="nav-contact-btn"
          >
            Contact
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-14" data-testid="hero-section">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 md:py-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="order-2 md:order-1">
              <h1 className="text-5xl md:text-7xl font-medium tracking-tight leading-[1.1] text-[#1A1A1A] mb-6" data-testid="hero-title">
                Wanbyukhan<br />Holdings,<br />LLC
              </h1>
              <p className="text-lg text-[#595959] mb-3 tracking-wide" data-testid="hero-subtitle">
                Internet Business Holdings
              </p>
              <p className="text-xl md:text-2xl text-[#4A4A4A] mb-4 font-serif italic" data-testid="hero-tagline">
                Strategic Investments. Long-Term Vision.
              </p>
              <p className="text-base text-[#595959] leading-relaxed mb-8 max-w-lg" data-testid="hero-description">
                Wanbyukhan Holdings, LLC is a private investment and asset management company focused on long-term value creation across technology, digital infrastructure, and emerging sectors.
              </p>
              <button 
                onClick={scrollToContact}
                className="btn-primary rounded-sm inline-flex items-center gap-2 group"
                data-testid="hero-cta"
              >
                Contact Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="order-1 md:order-2">
              <div className="aspect-[4/5] overflow-hidden rounded-sm">
                <img 
                  src="https://images.pexels.com/photos/14965740/pexels-photo-14965740.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Bouquet of eucalyptus and flowers in vase beside magazines on wooden table"
                  className="hero-image"
                  data-testid="hero-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="border-t border-[#E6E4DE]" />
      </div>

      {/* About Section */}
      <section className="py-24 md:py-32" id="about" data-testid="about-section">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-sm font-medium tracking-widest uppercase text-[#8DA399] mb-4 block" data-testid="about-label">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight leading-tight text-[#1A1A1A] mb-8" data-testid="about-headline">
              Our Mission
            </h2>
            <p className="text-lg text-[#595959] leading-relaxed mb-6" data-testid="about-text-1">
              Wanbyukhan Holdings, LLC is a privately held company engaged in strategic investments and digital initiatives. We focus on disciplined execution, sustainable growth, and long-term asset stewardship.
            </p>
            <p className="text-lg text-[#595959] leading-relaxed" data-testid="about-text-2">
              Our mission is to identify opportunities that align with innovation, operational excellence, and enduring value creation.
            </p>
          </div>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section className="py-24 md:py-32 bg-white" id="focus" data-testid="focus-section">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-sm font-medium tracking-widest uppercase text-[#8DA399] mb-4 block" data-testid="focus-label">
              What We Do
            </span>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight leading-tight text-[#1A1A1A]" data-testid="focus-headline">
              Focus Areas
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Technology & Software */}
            <div className="card-hover rounded-sm" data-testid="focus-card-tech">
              <div className="w-12 h-12 bg-[#FAF8F5] rounded-sm flex items-center justify-center mb-6">
                <Monitor className="w-6 h-6 text-[#8DA399]" />
              </div>
              <h3 className="text-2xl font-medium text-[#1A1A1A] mb-4">Technology & Software</h3>
              <p className="text-[#595959] leading-relaxed">
                Building and investing in innovative software solutions that drive digital transformation and create lasting value.
              </p>
            </div>
            
            {/* Digital Platforms */}
            <div className="card-hover rounded-sm" data-testid="focus-card-digital">
              <div className="w-12 h-12 bg-[#FAF8F5] rounded-sm flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-[#8DA399]" />
              </div>
              <h3 className="text-2xl font-medium text-[#1A1A1A] mb-4">Digital Platforms</h3>
              <p className="text-[#595959] leading-relaxed">
                Developing scalable digital platforms that connect users, enable commerce, and foster meaningful engagement.
              </p>
            </div>
            
            {/* Strategic Private Investments */}
            <div className="card-hover rounded-sm" data-testid="focus-card-investments">
              <div className="w-12 h-12 bg-[#FAF8F5] rounded-sm flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-[#8DA399]" />
              </div>
              <h3 className="text-2xl font-medium text-[#1A1A1A] mb-4">Strategic Private Investments</h3>
              <p className="text-[#595959] leading-relaxed">
                Identifying and nurturing high-potential private market opportunities aligned with our long-term investment thesis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 md:py-32 bg-[#FAF8F5]" id="contact" data-testid="contact-section">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-2xl">
            <span className="text-sm font-medium tracking-widest uppercase text-[#8DA399] mb-4 block" data-testid="contact-label">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight leading-tight text-[#1A1A1A] mb-8" data-testid="contact-headline">
              Contact
            </h2>
            <p className="text-lg text-[#595959] leading-relaxed mb-10">
              We welcome inquiries from potential partners, investors, and collaborators. Please reach out to discuss how we might work together.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4" data-testid="contact-email">
                <div className="w-10 h-10 bg-white rounded-sm flex items-center justify-center border border-[#E6E4DE]">
                  <Mail className="w-5 h-5 text-[#8DA399]" />
                </div>
                <div>
                  <p className="text-sm text-[#595959] mb-1">Email</p>
                  <a href="mailto:yun@wanbyukhanholdings.com" className="text-[#1A1A1A] hover:text-[#8DA399] transition-colors">
                    yun@wanbyukhanholdings.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4" data-testid="contact-location">
                <div className="w-10 h-10 bg-white rounded-sm flex items-center justify-center border border-[#E6E4DE]">
                  <MapPin className="w-5 h-5 text-[#8DA399]" />
                </div>
                <div>
                  <p className="text-sm text-[#595959] mb-1">Location</p>
                  <p className="text-[#1A1A1A]">United States</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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

export default Home;
