const services = [
  {
    title: 'Complete Installation Services',
    description: 'Expert dismantling, packing, and reinstallation of all your furniture, electronics, and appliances. We handle everything from AC units to wardrobes.',
    icon: '🔧',
    features: [
      'AC Installation/Uninstallation',
      'TV & Electronics Setup',
      'Furniture Assembly',
      'Kitchen Appliances',
      'Wardrobe Installation',
      'Light Fixtures'
    ]
  },
  {
    title: 'Professional Packing & Unpacking',
    description: 'Systematic packing with premium materials and organized unpacking service. We label everything and place items exactly where you want them.',
    icon: '📦',
    features: [
      'Room-by-Room Packing',
      'Fragile Items Handling',
      'Organized Labeling',
      'Systematic Unpacking',
      'Debris Removal',
      'First-Day Box Setup'
    ]
  },
  {
    title: 'Safe Transportation',
    description: 'Secure transportation with specialized vehicles and equipment. Your items are properly secured and protected throughout the journey.',
    icon: '🚛',
    features: [
      'Specialized Vehicles',
      'GPS Tracking',
      'Professional Handling',
      'Insurance Coverage',
      'Real-time Updates',
      'Damage-free Guarantee'
    ]
  }
];

export default function ServicesDisplay({ className = '' }: { className?: string }) {
  return (
    <div className={className}>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="section-title">End-to-End Moving Services</h2>
        <p className="section-description">
          From dismantling to reinstallation, we handle everything in your move.
        </p>
      </div>
      <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {services.map((service) => (
          <div key={service.title} className="card-base">
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <ul className="space-y-2">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                  <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
