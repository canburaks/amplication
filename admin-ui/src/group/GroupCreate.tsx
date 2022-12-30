import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  BooleanInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { GraduationTypeTitle } from "../graduationType/GraduationTypeTitle";
import { InstituteTitle } from "../institute/InstituteTitle";
import { MArketProfileTitle } from "../mArketProfile/MArketProfileTitle";
import { UserGroupTitle } from "../userGroup/UserGroupTitle";

export const GroupCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="graduationtype.id"
          reference="GraduationType"
          label="Graduation Type"
        >
          <SelectInput optionText={GraduationTypeTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="institute.id"
          reference="Institute"
          label="Institute"
        >
          <SelectInput optionText={InstituteTitle} />
        </ReferenceInput>
        <BooleanInput label="Is Active" source="isActive" />
        <ReferenceInput
          source="marketprofile.id"
          reference="MArketProfile"
          label="Market Profile"
        >
          <SelectInput optionText={MArketProfileTitle} />
        </ReferenceInput>
        <TextInput label="Name" source="name" />
        <ReferenceArrayInput
          source="userGroups"
          reference="UserGroup"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserGroupTitle} />
        </ReferenceArrayInput>
        <NumberInput step={1} label="Year" source="year" />
      </SimpleForm>
    </Create>
  );
};
