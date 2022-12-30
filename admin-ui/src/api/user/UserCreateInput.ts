import { InputJsonValue } from "../../types";
import { UserGroupCreateNestedManyWithoutUsersInput } from "./UserGroupCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email: string;
  emailValidated?: boolean | null;
  firstName?: string | null;
  gender?: "MALE" | "FEMALE" | "OTHER" | null;
  isActive?: boolean | null;
  isDeleted?: boolean | null;
  isSuperuser?: boolean | null;
  lastName?: string | null;
  password: string;
  phone?: string | null;
  phoneCountryCode?: string | null;
  roles: InputJsonValue;
  userGroups?: UserGroupCreateNestedManyWithoutUsersInput;
  username: string;
};
