import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="section-base bg-primary-600">
      <div className="container-fluid">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Move?
          </h2>
          <p className="mt-6 text-lg leading-8 text-primary-100">
            Get your instant estimate now
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/estimate"
              className="btn-primary bg-white text-primary-600 hover:bg-primary-50"
            >
              Get Free Estimate
            </Link>
            <Link
              href="tel:+918577036419"
              className="text-sm font-semibold text-white"
            >
              Call Now <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
