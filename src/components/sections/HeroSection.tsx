import Link from 'next/link';

export default function HeroSection() {
  return (
    <div className="hero-wrapper">
      <div className="hero-content">
        <h1 className="hero-title">
          ShiftSwift Packers and Movers - Your Trusted Moving Partner
        </h1>
        <p className="hero-description">
          Experience stress-free moving with ShiftSwift Packers and Movers. We handle everything from packing to transportation, 
          ensuring your belongings reach safely and on time.
        </p>
        <div className="hero-cta-container">
          <Link href="/estimate" className="btn-primary">Get Instant Estimate</Link>
          <Link href="/contact" className="text-sm font-semibold leading-6 text-gray-900">
            Learn more <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
