import { PurchaseInterface } from 'interfaces/purchase';
import { PharmacyInterface } from 'interfaces/pharmacy';
import { GetQueryInterface } from 'interfaces';

export interface MedicineInterface {
  id?: string;
  name: string;
  description?: string;
  manufacturer?: string;
  expiry_date?: any;
  quantity?: number;
  pharmacy_id: string;
  created_at?: any;
  updated_at?: any;
  purchase?: PurchaseInterface[];
  pharmacy?: PharmacyInterface;
  _count?: {
    purchase?: number;
  };
}

export interface MedicineGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  manufacturer?: string;
  pharmacy_id?: string;
}
