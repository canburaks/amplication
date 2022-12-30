import { UserGroup as TUserGroup } from "../api/userGroup/UserGroup";

export const USERGROUP_TITLE_FIELD = "id";

export const UserGroupTitle = (record: TUserGroup): string => {
  return record.id || record.id;
};
