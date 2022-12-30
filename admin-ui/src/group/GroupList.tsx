import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  DateField,
  ReferenceField,
  TextField,
  BooleanField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { GRADUATIONTYPE_TITLE_FIELD } from "../graduationType/GraduationTypeTitle";
import { INSTITUTE_TITLE_FIELD } from "../institute/InstituteTitle";
import { MARKETPROFILE_TITLE_FIELD } from "../mArketProfile/MArketProfileTitle";

export const GroupList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Groups"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="Graduation Type"
          source="graduationtype.id"
          reference="GraduationType"
        >
          <TextField source={GRADUATIONTYPE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Institute"
          source="institute.id"
          reference="Institute"
        >
          <TextField source={INSTITUTE_TITLE_FIELD} />
        </ReferenceField>
        <BooleanField label="Is Active" source="isActive" />
        <ReferenceField
          label="Market Profile"
          source="marketprofile.id"
          reference="MArketProfile"
        >
          <TextField source={MARKETPROFILE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Year" source="year" />
      </Datagrid>
    </List>
  );
};
