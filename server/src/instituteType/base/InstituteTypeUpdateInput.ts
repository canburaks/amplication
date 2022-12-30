/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CountryWhereUniqueInput } from "../../country/base/CountryWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { GraduationTypeUpdateManyWithoutInstituteTypesInput } from "./GraduationTypeUpdateManyWithoutInstituteTypesInput";
@InputType()
class InstituteTypeUpdateInput {
  @ApiProperty({
    required: false,
    type: () => CountryWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CountryWhereUniqueInput)
  @IsOptional()
  @Field(() => CountryWhereUniqueInput, {
    nullable: true,
  })
  country?: CountryWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => GraduationTypeUpdateManyWithoutInstituteTypesInput,
  })
  @ValidateNested()
  @Type(() => GraduationTypeUpdateManyWithoutInstituteTypesInput)
  @IsOptional()
  @Field(() => GraduationTypeUpdateManyWithoutInstituteTypesInput, {
    nullable: true,
  })
  graduationTypes?: GraduationTypeUpdateManyWithoutInstituteTypesInput;
}
export { InstituteTypeUpdateInput };
