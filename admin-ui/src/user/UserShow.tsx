import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { GROUP_TITLE_FIELD } from "../group/GroupTitle";
import { USER_TITLE_FIELD } from "./UserTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <BooleanField label="Email validated" source="emailValidated" />
        <TextField label="First Name" source="firstName" />
        <TextField label="Gender" source="gender" />
        <TextField label="ID" source="id" />
        <BooleanField label="Is active" source="isActive" />
        <BooleanField label="Is deleted" source="isDeleted" />
        <BooleanField label="Is superuser" source="isSuperuser" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Phone" source="phone" />
        <TextField label="Phone country code" source="phoneCountryCode" />
        <TextField label="Roles" source="roles" />
        <DateField source="updatedAt" label="Updated at" />
        <TextField label="Username" source="username" />
        <ReferenceManyField
          reference="UserGroup"
          target="UserId"
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
