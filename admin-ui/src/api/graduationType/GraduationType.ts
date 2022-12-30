import { Group } from "../group/Group";
import { InstituteType } from "../instituteType/InstituteType";

export type GraduationType = {
  createdAt: Date;
  groups?: Array<Group>;
  id: string;
  instituteTypes?: Array<InstituteType>;
  name: string | null;
  updatedAt: Date;
};
