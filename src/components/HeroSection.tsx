import Link from 'next/link';

export default function HeroSection() {
  return (
    <div className="relative isolate">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Your Trusted Moving Partner for a Seamless Relocation
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Experience stress-free moving with ShiftSwift. We handle everything from packing to transportation, ensuring your belongings reach safely and on time.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Link
              href="/estimate"
              className="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
            >
              Get Instant Estimate
            </Link>
            <Link href="/services" className="text-sm font-semibold leading-6 text-gray-900">
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mt-0 lg:mr-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">          <div 
              className="w-[76rem] h-[40rem] rounded-md bg-gradient-to-r from-primary-100 to-primary-50 flex flex-col items-center justify-center text-primary-600 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/50"></div>
              <div className="relative">
                <svg className="w-24 h-24 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h8a1 1 0 001-1zM4 6h8M4 10h8M4 14h8M16 16V6m0 0l3-3m-3 3l-3-3" />
                </svg>
                Professional Moving Services
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
