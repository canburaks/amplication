import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { COUNTRY_TITLE_FIELD } from "../country/CountryTitle";

export const InstituteTypeList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"InstituteTypes"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField label="Country" source="country.id" reference="Country">
          <TextField source={COUNTRY_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
