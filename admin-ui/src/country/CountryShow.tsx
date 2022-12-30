import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
  BooleanField,
} from "react-admin";

import { COUNTRY_TITLE_FIELD } from "./CountryTitle";

export const CountryShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Country Code" source="countryCode" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Phone Code" source="phoneCode" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Institute"
          target="CountryId"
          label="Institutes"
        >
          <Datagrid rowClick="show">
            <TextField label="City" source="city" />
            <ReferenceField
              label="Country"
              source="country.id"
              reference="Country"
            >
              <TextField source={COUNTRY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Internal ID" source="internalId" />
            <BooleanField label="Is Private" source="isPrivate" />
            <TextField label="Location" source="location" />
            <TextField label="Name" source="name" />
            <TextField label="Street" source="street" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Zip" source="zip" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="InstituteType"
          target="CountryId"
          label="InstituteTypes"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Country"
              source="country.id"
              reference="Country"
            >
              <TextField source={COUNTRY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
