import { GroupCreateNestedManyWithoutGraduationTypesInput } from "./GroupCreateNestedManyWithoutGraduationTypesInput";
import { InstituteTypeCreateNestedManyWithoutGraduationTypesInput } from "./InstituteTypeCreateNestedManyWithoutGraduationTypesInput";

export type GraduationTypeCreateInput = {
  groups?: GroupCreateNestedManyWithoutGraduationTypesInput;
  instituteTypes?: InstituteTypeCreateNestedManyWithoutGraduationTypesInput;
  name?: string | null;
};
