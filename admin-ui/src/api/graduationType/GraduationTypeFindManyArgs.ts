import { GraduationTypeWhereInput } from "./GraduationTypeWhereInput";
import { GraduationTypeOrderByInput } from "./GraduationTypeOrderByInput";

export type GraduationTypeFindManyArgs = {
  where?: GraduationTypeWhereInput;
  orderBy?: Array<GraduationTypeOrderByInput>;
  skip?: number;
  take?: number;
};
