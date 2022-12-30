import { GroupCreateNestedManyWithoutMArketProfilesInput } from "./GroupCreateNestedManyWithoutMArketProfilesInput";

export type MArketProfileCreateInput = {
  groups?: GroupCreateNestedManyWithoutMArketProfilesInput;
  name?: string | null;
};
