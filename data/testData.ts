import { User, Product, Payment } from './interfaces';

export const testUser: User = {
  name: 'Amit Chaurasiya',
  email: 'amit798dps6@test.com',
  password: 'Test@123',
  firstName: 'Amit',
  lastName: 'Chaurasiya',
  address: 'Mumbai Street 1',
  country: 'India',
  state: 'Maharashtra',
  city: 'Mumbai',
  zipcode: '400001',
  mobileNumber: '9876543210'
};

export const testProduct: Product = {
  name: 'Blue Top',
  category: 'Women > Tops',
  brand: 'Polo',
  price: '₹500'
};

export const testPayment: Payment = {
  nameOnCard: 'Amit Chaurasiya',
  cardNumber: '4242424242424242',
  cvc: '123',
  expiryMonth: '12',
  expiryYear: '2027'
};