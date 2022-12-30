import { GroupWhereUniqueInput } from "../group/GroupWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserGroupUpdateInput = {
  group?: GroupWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
