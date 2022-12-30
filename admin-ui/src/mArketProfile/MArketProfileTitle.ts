import { MArketProfile as TMArketProfile } from "../api/mArketProfile/MArketProfile";

export const MARKETPROFILE_TITLE_FIELD = "name";

export const MArketProfileTitle = (record: TMArketProfile): string => {
  return record.name || record.id;
};
