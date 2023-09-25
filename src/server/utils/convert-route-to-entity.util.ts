const mapping: Record<string, string> = {
  customers: 'customer',
  medicines: 'medicine',
  pharmacies: 'pharmacy',
  purchases: 'purchase',
  suppliers: 'supplier',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
