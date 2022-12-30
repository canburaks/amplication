import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
  BooleanField,
} from "react-admin";

import { GRADUATIONTYPE_TITLE_FIELD } from "../graduationType/GraduationTypeTitle";
import { INSTITUTE_TITLE_FIELD } from "../institute/InstituteTitle";
import { MARKETPROFILE_TITLE_FIELD } from "./MArketProfileTitle";

export const MArketProfileShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Group"
          target="MArketProfileId"
          label="Groups"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
