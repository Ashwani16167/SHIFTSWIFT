export default function WhyUsSection() {
  const features = [
    {
      title: 'Experienced Team',
      description: 'Skilled professionals with years of experience in handling moves of all sizes',
      icon: '👥'
    },
    {
      title: 'Full Service',
      description: 'Complete solution from uninstallation to reinstallation at new location',
      icon: '✨'
    },
    {
      title: 'Local Expertise',
      description: 'Deep understanding of Varanasi areas and requirements',
      icon: '🏠'
    }
  ];

  return (
    <section className="section-base bg-gray-50" id="why-us">
      <div className="container-fluid">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="section-title">Why Choose ShiftSwift Packers and Movers</h2>
          <p className="section-description">
            Experience the difference with our professional service
          </p>
        </div>
        <div className="mx-auto mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="card-base">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
