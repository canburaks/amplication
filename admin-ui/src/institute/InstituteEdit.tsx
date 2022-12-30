import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  BooleanInput,
} from "react-admin";

import { CountryTitle } from "../country/CountryTitle";
import { GroupTitle } from "../group/GroupTitle";

export const InstituteEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="City" source="city" />
        <ReferenceInput source="country.id" reference="Country" label="Country">
          <SelectInput optionText={CountryTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="groups"
          reference="Group"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={GroupTitle} />
        </ReferenceArrayInput>
        <TextInput label="Internal ID" source="internalId" />
        <BooleanInput label="Is Private" source="isPrivate" />
        <TextInput label="Location" source="location" />
        <TextInput label="Name" source="name" />
        <TextInput label="Street" source="street" />
        <TextInput label="Zip" source="zip" />
      </SimpleForm>
    </Edit>
  );
};
