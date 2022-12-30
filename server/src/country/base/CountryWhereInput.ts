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
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { StringFilter } from "../../util/StringFilter";
import { InstituteListRelationFilter } from "../../institute/base/InstituteListRelationFilter";
import { InstituteTypeListRelationFilter } from "../../instituteType/base/InstituteTypeListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
@InputType()
class CountryWhereInput {
  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  countryCode?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => InstituteListRelationFilter,
  })
  @ValidateNested()
  @Type(() => InstituteListRelationFilter)
  @IsOptional()
  @Field(() => InstituteListRelationFilter, {
    nullable: true,
  })
  institutes?: InstituteListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => InstituteTypeListRelationFilter,
  })
  @ValidateNested()
  @Type(() => InstituteTypeListRelationFilter)
  @IsOptional()
  @Field(() => InstituteTypeListRelationFilter, {
    nullable: true,
  })
  instituteTypes?: InstituteTypeListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  name?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  phoneCode?: IntNullableFilter;
}
export { CountryWhereInput };
