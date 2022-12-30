import { Group } from "../group/Group";

export type MArketProfile = {
  createdAt: Date;
  groups?: Array<Group>;
  id: string;
  name: string | null;
  updatedAt: Date;
};
