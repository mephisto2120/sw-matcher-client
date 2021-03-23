export interface Person {
  personId: number;
  customerId: number;
  firstName: string;
  lastName: string;
  birthDate: string;
  city: string;
  zipCode: string;
  street: string;
  houseNumber: string;
  email: string;
  createdDate: string;
  lastModified: string;
}

export interface Company {
  companyId: number;
  customerId: number;
  name: string;
  city: string;
  zipCode: string;
  street: string;
  localNumber: string;
  email: string;
  createdDate: string;
  lastModified: string;
}
