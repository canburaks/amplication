import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const UserList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Users"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
