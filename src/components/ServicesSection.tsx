import { TruckIcon, BuildingOfficeIcon, GlobeAltIcon, HomeIcon } from '@heroicons/react/24/outline';

const services = [
  {
    name: 'Local Moving',
    description: 'Expert moving services within your city, handling everything from packing to unpacking.',
    icon: HomeIcon,
  },
  {
    name: 'Long Distance Moving',
    description: 'Safe and reliable transportation of your belongings across states with real-time tracking.',
    icon: TruckIcon,
  },
  {
    name: 'Office Relocation',
    description: 'Specialized commercial moving services with minimal business disruption.',
    icon: BuildingOfficeIcon,
  },
  {
    name: 'International Moving',
    description: 'Comprehensive international relocation services with customs clearance assistance.',
    icon: GlobeAltIcon,
  },
];

export default function ServicesSection() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Comprehensive Solutions</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Moving Services Tailored to Your Needs
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            From local moves to international relocations, we offer a full range of professional moving services to make your transition smooth and stress-free.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {services.map((service) => (
              <div key={service.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <service.icon className="h-5 w-5 flex-none text-primary-600" aria-hidden="true" />
                  {service.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{service.description}</p>
                  <p className="mt-6">
                    <a href="/estimate" className="text-sm font-semibold leading-6 text-primary-600">
                      Get a quote <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
