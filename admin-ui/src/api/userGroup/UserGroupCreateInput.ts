import { GroupWhereUniqueInput } from "../group/GroupWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserGroupCreateInput = {
  group?: GroupWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
