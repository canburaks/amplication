import { CountryWhereUniqueInput } from "../country/CountryWhereUniqueInput";
import { GroupCreateNestedManyWithoutInstitutesInput } from "./GroupCreateNestedManyWithoutInstitutesInput";

export type InstituteCreateInput = {
  city?: string | null;
  country?: CountryWhereUniqueInput | null;
  groups?: GroupCreateNestedManyWithoutInstitutesInput;
  internalId: string;
  isPrivate?: boolean | null;
  location?: string | null;
  name?: string | null;
  street?: string | null;
  zip?: string | null;
};
