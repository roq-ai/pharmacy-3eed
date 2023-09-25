interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: [],
  tenantRoles: ['Owner', 'Pharmacy Manager'],
  tenantName: 'Pharmacy',
  applicationName: 'Pharmacy',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage users',
    'Manage pharmacies',
    'Manage medicines',
    'Manage customers',
    'Manage purchases',
    'Manage suppliers',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/9fdd31c2-9fd5-4941-b7c5-6d2fd5ea3d19',
};
