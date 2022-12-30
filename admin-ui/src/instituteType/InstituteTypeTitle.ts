import { InstituteType as TInstituteType } from "../api/instituteType/InstituteType";

export const INSTITUTETYPE_TITLE_FIELD = "id";

export const InstituteTypeTitle = (record: TInstituteType): string => {
  return record.id || record.id;
};
