import { MedicineInterface } from 'interfaces/medicine';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface PharmacyInterface {
  id?: string;
  description?: string;
  location?: string;
  contact_number?: string;
  opening_hours?: string;
  closing_hours?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  medicine?: MedicineInterface[];
  user?: UserInterface;
  _count?: {
    medicine?: number;
  };
}

export interface PharmacyGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  location?: string;
  contact_number?: string;
  opening_hours?: string;
  closing_hours?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
