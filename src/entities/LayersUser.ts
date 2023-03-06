export interface LayersUser {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  active: boolean;
  community: string;
  status: string;
  invitationCount: number;
  email: string;
  name: string;
  roles: string[];
  address: Address;
};

export interface Address {
  code: string;
  state: string;
  city: string;
  district: string;
  address: string;
  number: string;
};
