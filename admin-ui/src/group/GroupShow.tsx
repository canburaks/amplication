import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { GROUP_TITLE_FIELD } from "./GroupTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { GRADUATIONTYPE_TITLE_FIELD } from "../graduationType/GraduationTypeTitle";
import { INSTITUTE_TITLE_FIELD } from "../institute/InstituteTitle";
import { MARKETPROFILE_TITLE_FIELD } from "../mArketProfile/MArketProfileTitle";

export const GroupShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="UserGroup"
          target="GroupId"
          label="UserGroups"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField label="Group" source="group.id" reference="Group">
              <TextField source={GROUP_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
