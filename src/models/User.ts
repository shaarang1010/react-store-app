type UserFullName = {
  firstname: string;
  lastname: string;
};

type UserAddress = {
  city: string;
  street: string;
  number: number;
  zipcode: string;
  geolocation: {
    lat: string;
    long: string;
  };
};

export type User = {
  id: number;
  email: string;
  username: string;
  password: string;
  name: UserFullName;
  address: UserAddress;
  phone: string;
};
