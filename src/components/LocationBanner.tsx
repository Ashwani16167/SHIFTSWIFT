import { LOCATION } from '@/constants/location';

export default function LocationBanner() {
  return (
    <div className="bg-primary-50 px-6 py-2.5 text-center sm:px-3.5">
      <p className="text-sm leading-6 text-primary-900">
        Now serving in <strong>{LOCATION.city}</strong> and surrounding areas
      </p>
    </div>
  );
}
