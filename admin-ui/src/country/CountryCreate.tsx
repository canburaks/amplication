import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { InstituteTitle } from "../institute/InstituteTitle";
import { InstituteTypeTitle } from "../instituteType/InstituteTypeTitle";

export const CountryCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Country Code" source="countryCode" />
        <ReferenceArrayInput
          source="institutes"
          reference="Institute"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={InstituteTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="instituteTypes"
          reference="InstituteType"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={InstituteTypeTitle} />
        </ReferenceArrayInput>
        <TextInput label="Name" source="name" />
        <NumberInput step={1} label="Phone Code" source="phoneCode" />
      </SimpleForm>
    </Create>
  );
};
