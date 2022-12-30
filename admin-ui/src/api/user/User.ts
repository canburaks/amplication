import { JsonValue } from "type-fest";
import { UserGroup } from "../userGroup/UserGroup";

export type User = {
  createdAt: Date;
  email: string;
  emailValidated: boolean | null;
  firstName: string | null;
  gender?: "MALE" | "FEMALE" | "OTHER" | null;
  id: string;
  isActive: boolean | null;
  isDeleted: boolean | null;
  isSuperuser: boolean | null;
  lastName: string | null;
  phone: string | null;
  phoneCountryCode: string | null;
  roles: JsonValue;
  updatedAt: Date;
  userGroups?: Array<UserGroup>;
  username: string;
};
