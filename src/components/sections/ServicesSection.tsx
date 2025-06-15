import ServicesDisplay from './ServicesDisplay';

export default function ServicesSection() {
  const services = [
    {
      title: 'Professional Installation',
      description: 'Complete uninstallation and reinstallation services at both locations',
      features: [
        'AC Units (Window & Split)',
        'Geysers & Water Heaters',
        'All Types of Furniture',
        'TV & Electronics Setup',
        'Kitchen Equipment',
        'Bathroom Fittings'
      ],
      icon: '🔧'
    },
    {
      title: 'Expert Packing',
      description: 'Systematic packing and unpacking with quality materials',
      features: [
        'Room by Room Packing',
        'Fragile Items Protection',
        'Kitchen Items Packing',
        'Wardrobe & Clothes',
        'Electronics & Gadgets',
        'Systematic Labeling'
      ],
      icon: '📦'
    },
    {
      title: 'Complete Moving',
      description: 'End-to-end moving solution with professional team',
      features: [
        'Safe Transportation',
        'Experienced Team',
        'Loading & Unloading',
        'Furniture Handling',
        'Time Management',
        'Quality Assurance'
      ],
      icon: '🚛'
    }
  ];

  const features = [
    {
      title: 'Professional Team',
      description: 'Experienced and trained staff for safe and efficient moving',
      icon: '👥'
    },
    {
      title: 'Full Service',
      description: 'Complete solution from packing to installation at new location',
      icon: '✨'
    },
    {
      title: 'Reliable Service',
      description: 'Trusted by hundreds of families across Varanasi',
      icon: '🌟'
    }
  ];

  return (
    <section className="section-base bg-gray-50" id="services">
      <div className="container-fluid">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="section-title">Our Services</h2>
          <p className="section-description">
            From uninstallation to reinstallation, we handle everything in your move
          </p>
          <div className="mt-4 text-center">
            <span className="inline-flex items-center rounded-md bg-primary-50 px-4 py-2 text-sm font-medium text-primary-700">
              ✨ Professional Installation Service for Every Item
            </span>
          </div>
        </div>
        <div className="mx-auto mt-16 grid grid-cols-1 gap-8 sm:mt-20 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="card-base">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-x-3 text-sm text-gray-600">
                    <svg className="h-5 w-5 text-primary-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <h2 className="text-4xl font-extrabold text-center mb-16 mt-24 tracking-tight">
            Why Choose Us?
          </h2>
          <div className="container-fluid py-2">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature) => (
                <div key={feature.title} className="feature-card">
                  <div className="feature-background" />
                  <div className="feature-icon">{feature.icon}</div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
