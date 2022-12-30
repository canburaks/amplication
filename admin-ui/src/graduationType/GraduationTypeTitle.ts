import { GraduationType as TGraduationType } from "../api/graduationType/GraduationType";

export const GRADUATIONTYPE_TITLE_FIELD = "name";

export const GraduationTypeTitle = (record: TGraduationType): string => {
  return record.name || record.id;
};
