import {
  ClockIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Fast & Efficient',
    description: 'Our experienced team ensures quick and efficient moves without compromising on quality.',
    icon: ClockIcon,
  },
  {
    name: 'Safe & Secure',
    description: 'We treat your belongings with utmost care, using premium packing materials and secure handling.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Competitive Pricing',
    description: 'Get the best value for your money with our transparent and competitive pricing structure.',
    icon: CurrencyDollarIcon,
  },
  {
    name: '24/7 Support',
    description: 'Our dedicated support team is always available to assist you throughout your moving journey.',
    icon: ChatBubbleLeftRightIcon,
  },
];

export default function WhyChooseUsSection() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Why Choose Us</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            The ShiftSwift Advantage
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We combine experience, dedication, and modern technology to provide you with the best moving experience possible.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col items-center text-center">
                <dt className="flex flex-col items-center gap-y-4">
                  <div className="rounded-lg bg-primary-100 p-3">
                    <feature.icon className="h-6 w-6 text-primary-600" aria-hidden="true" />
                  </div>
                  <span className="text-base font-semibold leading-7 text-gray-900">{feature.name}</span>
                </dt>
                <dd className="mt-4 flex flex-auto flex-col">
                  <p className="flex-auto text-base leading-7 text-gray-600">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
