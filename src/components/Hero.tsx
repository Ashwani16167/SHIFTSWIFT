import Image from 'next/image';

export default function Hero() {
  return (
    <div className="hero-wrapper">
      <div className="hero-background">
        <Image
          src="/hero-image.jpg"
          alt="Hero Background"
          className="object-cover object-center w-full h-full"
          fill
          priority
        />
        <div className="hero-overlay" />
      </div>
      <div className="hero-content">
        {/* Your content here */}
      </div>
    </div>
  )
}
