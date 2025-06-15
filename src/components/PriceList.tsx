import { priceList } from '@/data/prices';

export default function PriceList() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Minimum Charges by Item
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Local Move – up to 20 km
          </p>
        </div>
        <div className="mt-8 space-y-8">
          {priceList.map((category) => (
            <div key={category.category}>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {category.category}
              </h3>
              <div className="overflow-hidden bg-white border border-gray-200 rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <tbody className="divide-y divide-gray-200">
                    {category.items.map((item) => (
                      <tr key={item.name}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          {item.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                          ₹{item.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-gray-500 text-center">
          * Prices are starting from and may vary based on specific requirements and conditions
        </p>
      </div>
    </div>
  );
}
