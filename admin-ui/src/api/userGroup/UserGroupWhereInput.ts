import { GroupWhereUniqueInput } from "../group/GroupWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserGroupWhereInput = {
  group?: GroupWhereUniqueInput;
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};
