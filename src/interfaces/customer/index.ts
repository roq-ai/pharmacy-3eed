import { PurchaseInterface } from 'interfaces/purchase';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CustomerInterface {
  id?: string;
  first_name?: string;
  last_name?: string;
  phone_number?: string;
  address?: string;
  email?: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  purchase?: PurchaseInterface[];
  user?: UserInterface;
  _count?: {
    purchase?: number;
  };
}

export interface CustomerGetQueryInterface extends GetQueryInterface {
  id?: string;
  first_name?: string;
  last_name?: string;
  phone_number?: string;
  address?: string;
  email?: string;
  user_id?: string;
}
