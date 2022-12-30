import { MArketProfileWhereInput } from "./MArketProfileWhereInput";
import { MArketProfileOrderByInput } from "./MArketProfileOrderByInput";

export type MArketProfileFindManyArgs = {
  where?: MArketProfileWhereInput;
  orderBy?: Array<MArketProfileOrderByInput>;
  skip?: number;
  take?: number;
};
