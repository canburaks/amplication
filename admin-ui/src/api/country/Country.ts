import { Institute } from "../institute/Institute";
import { InstituteType } from "../instituteType/InstituteType";

export type Country = {
  countryCode: string | null;
  createdAt: Date;
  id: string;
  institutes?: Array<Institute>;
  instituteTypes?: Array<InstituteType>;
  name: string | null;
  phoneCode: number | null;
  updatedAt: Date;
};
