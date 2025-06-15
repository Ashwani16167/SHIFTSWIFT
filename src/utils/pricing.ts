export const itemPrices = {
  sofa_3: { name: 'Sofa (3-seater)', price: 700 },
  bed_single: { name: 'Single Bed', price: 600 },
  bed_double: { name: 'Double Bed', price: 900 },
  dining_4: { name: 'Dining Table', price: 700 },
  fridge: { name: 'Refrigerator', price: 600 },
  washing: { name: 'Washing Machine', price: 600 },
  tv: { name: 'TV', price: 500 },
  wardrobe: { name: 'Wardrobe', price: 800 },
  microwave: { name: 'Microwave', price: 300 },
  study_table: { name: 'Study Table', price: 500 },
  chair: { name: 'Chair', price: 100 },
  ac: { name: 'AC', price: 900 },
  kitchen_box: { name: 'Kitchen Box', price: 700 },
  misc_box: { name: 'Misc Box', price: 300 },
  bike: { name: 'Bike', price: 900 },
  scooter: { name: 'Scooter', price: 700 }
} as const;

export const calculateEstimate = (items: Record<string, number>) => {
  return Object.entries(items).reduce((total, [key, quantity]) => {
    return total + (itemPrices[key as keyof typeof itemPrices]?.price || 0) * quantity;
  }, 0);
};
