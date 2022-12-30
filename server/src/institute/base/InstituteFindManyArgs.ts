/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { InstituteWhereInput } from "./InstituteWhereInput";
import { Type } from "class-transformer";
import { InstituteOrderByInput } from "./InstituteOrderByInput";

@ArgsType()
class InstituteFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => InstituteWhereInput,
  })
  @Field(() => InstituteWhereInput, { nullable: true })
  @Type(() => InstituteWhereInput)
  where?: InstituteWhereInput;

  @ApiProperty({
    required: false,
    type: [InstituteOrderByInput],
  })
  @Field(() => [InstituteOrderByInput], { nullable: true })
  @Type(() => InstituteOrderByInput)
  orderBy?: Array<InstituteOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { InstituteFindManyArgs };
