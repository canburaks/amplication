import { GroupUpdateManyWithoutGraduationTypesInput } from "./GroupUpdateManyWithoutGraduationTypesInput";
import { InstituteTypeUpdateManyWithoutGraduationTypesInput } from "./InstituteTypeUpdateManyWithoutGraduationTypesInput";

export type GraduationTypeUpdateInput = {
  groups?: GroupUpdateManyWithoutGraduationTypesInput;
  instituteTypes?: InstituteTypeUpdateManyWithoutGraduationTypesInput;
  name?: string | null;
};
