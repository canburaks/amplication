import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { InstituteTitle } from "../institute/InstituteTitle";
import { InstituteTypeTitle } from "../instituteType/InstituteTypeTitle";

export const CountryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
