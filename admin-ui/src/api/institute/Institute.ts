import { Country } from "../country/Country";
import { Group } from "../group/Group";

export type Institute = {
  city: string | null;
  country?: Country | null;
  createdAt: Date;
  groups?: Array<Group>;
  id: string;
  internalId: string;
  isPrivate: boolean | null;
  location: string | null;
  name: string | null;
  street: string | null;
  updatedAt: Date;
  zip: string | null;
};
