import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { CountryTitle } from "../country/CountryTitle";
import { GraduationTypeTitle } from "../graduationType/GraduationTypeTitle";

export const InstituteTypeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
