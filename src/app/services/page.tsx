import ServicesDisplay from '@/components/sections/ServicesDisplay';
import PriceList from '@/components/PriceList';

export default function ServicesPage() {
  return (
    <main className="flex-1">
      <div className="section-base">
        <div className="container-fluid">
          <ServicesDisplay />
        </div>
      </div>
      <div className="section-base bg-gray-50">
        <PriceList />
      </div>
    </main>
  );
}
