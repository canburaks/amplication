import { CountryWhereUniqueInput } from "../country/CountryWhereUniqueInput";
import { GroupUpdateManyWithoutInstitutesInput } from "./GroupUpdateManyWithoutInstitutesInput";

export type InstituteUpdateInput = {
  city?: string | null;
  country?: CountryWhereUniqueInput | null;
  groups?: GroupUpdateManyWithoutInstitutesInput;
  internalId?: string;
  isPrivate?: boolean | null;
  location?: string | null;
  name?: string | null;
  street?: string | null;
  zip?: string | null;
};
