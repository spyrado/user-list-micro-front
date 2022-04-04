export interface IUser {
  id: number;
  name: string;
  address: {
    street: string;    
  },
  phone: string;
}