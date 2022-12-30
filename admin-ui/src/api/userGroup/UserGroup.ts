import { Group } from "../group/Group";
import { User } from "../user/User";

export type UserGroup = {
  createdAt: Date;
  group?: Group | null;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
