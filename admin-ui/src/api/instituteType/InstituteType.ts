import { Country } from "../country/Country";
import { GraduationType } from "../graduationType/GraduationType";

export type InstituteType = {
  country?: Country | null;
  createdAt: Date;
  graduationTypes?: Array<GraduationType>;
  id: string;
  updatedAt: Date;
};
