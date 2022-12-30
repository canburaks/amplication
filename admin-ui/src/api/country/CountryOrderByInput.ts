import { SortOrder } from "../../util/SortOrder";

export type CountryOrderByInput = {
  countryCode?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  phoneCode?: SortOrder;
  updatedAt?: SortOrder;
};
