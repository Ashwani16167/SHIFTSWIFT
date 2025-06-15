'use client';

import { useState } from 'react';
import { furnitureItems } from '@/data/furniture';

export default function EstimatePage() {
  const [moveSize, setMoveSize] = useState('1bhk');
  const [distance, setDistance] = useState('local');
  const [selectedItems, setSelectedItems] = useState<Record<string, number>>({});

  const updateQuantity = (itemKey: string, quantity: number) => {
    setSelectedItems(prev => ({
      ...prev,
      [itemKey]: Math.max(0, quantity)
    }));
  };

  const calculateTotal = () => {
    return Object.entries(selectedItems).reduce((total, [itemId, quantity]) => {
      const item = furnitureItems
        .flatMap(category => category.items)
        .find(item => item.id === itemId);
      return total + (item?.price || 0) * quantity;
    }, 0);
  };

  const totalEstimate = calculateTotal();

  const moveSizes = [
    { id: '1bhk', label: '1 BHK' },
    { id: '2bhk', label: '2 BHK' },
    { id: '3bhk', label: '3 BHK' },
    { id: '4bhk', label: '4+ BHK' },
  ];

  const distances = [
    { id: 'local', label: 'Local Move' },
    { id: 'outstation', label: 'Outstation Move' },
  ];

  return (
    <main className="flex-1">
      <div className="section-base">
        <div className="container-fluid">
          <div className="mx-auto max-w-3xl space-y-12">
            {/* Move Size Selection */}
            <div>
              <label className="text-base font-semibold text-gray-900 block mb-4">
                Move Size
              </label>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {moveSizes.map((size) => (
                  <div key={size.id} 
                       onClick={() => setMoveSize(size.id)}
                       className={`select-card ${moveSize === size.id ? 'select-card-active' : ''}`}>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{size.label}</span>
                      <input
                        type="radio"
                        name="move-size"
                        value={size.id}
                        checked={moveSize === size.id}
                        onChange={(e) => setMoveSize(e.target.value)}
                        className="sr-only"
                      />
                      <span className={`select-check ${moveSize === size.id ? 'select-check-active' : ''}`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Distance Selection */}
            <div>
              <label className="text-base font-semibold text-gray-900 block mb-4">
                Distance
              </label>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {distances.map((option) => (
                  <div key={option.id}
                       onClick={() => setDistance(option.id)}
                       className={`select-card ${distance === option.id ? 'select-card-active' : ''}`}>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{option.label}</span>
                      <input
                        type="radio"
                        name="distance"
                        value={option.id}
                        checked={distance === option.id}
                        onChange={(e) => setDistance(e.target.value)}
                        className="sr-only"
                      />
                      <span className={`select-check ${distance === option.id ? 'select-check-active' : ''}`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Select Your Furniture</h3>
              {furnitureItems.map((category) => (
                <div key={category.category} className="mb-8">
                  <h4 className="text-md font-medium text-gray-900 mb-4">{category.category}</h4>
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                    {category.items.map((item) => (
                      <div key={item.id} className="furniture-item-card">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-2xl">{item.icon}</span>
                          <span className="text-sm font-medium">{item.name}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, (selectedItems[item.id] || 0) - 1)}
                            className="quantity-btn"
                          >
                            -
                          </button>
                          <span className="text-sm font-medium w-8 text-center">
                            {selectedItems[item.id] || 0}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, (selectedItems[item.id] || 0) + 1)}
                            className="quantity-btn"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <button type="submit" className="btn-primary w-full mt-8">
              Calculate Estimate
            </button>

            <div className="mt-16">
              {/* <PriceList /> */}
            </div>

            <div>
              {/* Only show selection UI, no prices displayed */}
              <div className="mt-8 text-lg font-semibold">
                Estimated Total: ₹{totalEstimate}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
