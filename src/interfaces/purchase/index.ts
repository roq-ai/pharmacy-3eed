import { MedicineInterface } from 'interfaces/medicine';
import { CustomerInterface } from 'interfaces/customer';
import { GetQueryInterface } from 'interfaces';

export interface PurchaseInterface {
  id?: string;
  medicine_id: string;
  customer_id: string;
  quantity?: number;
  purchase_date?: any;
  total_price?: number;
  created_at?: any;
  updated_at?: any;

  medicine?: MedicineInterface;
  customer?: CustomerInterface;
  _count?: {};
}

export interface PurchaseGetQueryInterface extends GetQueryInterface {
  id?: string;
  medicine_id?: string;
  customer_id?: string;
}
