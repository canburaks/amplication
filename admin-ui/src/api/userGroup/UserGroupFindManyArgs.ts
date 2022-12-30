import { UserGroupWhereInput } from "./UserGroupWhereInput";
import { UserGroupOrderByInput } from "./UserGroupOrderByInput";

export type UserGroupFindManyArgs = {
  where?: UserGroupWhereInput;
  orderBy?: Array<UserGroupOrderByInput>;
  skip?: number;
  take?: number;
};
