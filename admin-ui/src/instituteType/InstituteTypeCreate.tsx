import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { CountryTitle } from "../country/CountryTitle";
import { GraduationTypeTitle } from "../graduationType/GraduationTypeTitle";

export const InstituteTypeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="country.id" reference="Country" label="Country">
          <SelectInput optionText={CountryTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="graduationTypes"
          reference="GraduationType"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={GraduationTypeTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
