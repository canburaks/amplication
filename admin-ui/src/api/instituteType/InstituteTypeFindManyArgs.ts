import { InstituteTypeWhereInput } from "./InstituteTypeWhereInput";
import { InstituteTypeOrderByInput } from "./InstituteTypeOrderByInput";

export type InstituteTypeFindManyArgs = {
  where?: InstituteTypeWhereInput;
  orderBy?: Array<InstituteTypeOrderByInput>;
  skip?: number;
  take?: number;
};
