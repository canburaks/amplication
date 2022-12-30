import { SortOrder } from "../../util/SortOrder";

export type InstituteOrderByInput = {
  city?: SortOrder;
  countryId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  internalId?: SortOrder;
  isPrivate?: SortOrder;
  location?: SortOrder;
  name?: SortOrder;
  street?: SortOrder;
  updatedAt?: SortOrder;
  zip?: SortOrder;
};
