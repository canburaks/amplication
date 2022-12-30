import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { GRADUATIONTYPE_TITLE_FIELD } from "../graduationType/GraduationTypeTitle";
import { INSTITUTE_TITLE_FIELD } from "./InstituteTitle";
import { MARKETPROFILE_TITLE_FIELD } from "../mArketProfile/MArketProfileTitle";
import { COUNTRY_TITLE_FIELD } from "../country/CountryTitle";

export const InstituteShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="City" source="city" />
        <ReferenceField label="Country" source="country.id" reference="Country">
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
        <ReferenceManyField
          reference="Group"
          target="InstituteId"
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
