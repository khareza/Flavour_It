export class ProfileDto {
  id: number;
  email: string;
  firstName: string | null;
  lastName: string | null;
  country: string | null;
  city: string | null;
  houseApartmentNumber: string | null;
  phone: string | null;
  avatarUrl: string | null;
  rate: number;
  votesUp: number;
  votesDown: number;
  offersAmount: number;
  finishedOffersAmount: number;
  activeOffersAmount: number;
  ordersAmount: number;
  finishedOrdersAmount: number;
  activeOrdersAmount: number;
}
