export interface User {
  name: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  address: string;
  country: string;
  state: string;
  city: string;
  zipcode: string;
  mobileNumber: string;
}

export interface Product {
  name: string;
  category: string;
  brand: string;
  price: string;
}

export interface Payment {
  nameOnCard: string;
  cardNumber: string;
  cvc: string;
  expiryMonth: string;
  expiryYear: string;
}