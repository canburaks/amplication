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
import { GroupWhereInput } from "./GroupWhereInput";
import { Type } from "class-transformer";
import { GroupOrderByInput } from "./GroupOrderByInput";

@ArgsType()
class GroupFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => GroupWhereInput,
  })
  @Field(() => GroupWhereInput, { nullable: true })
  @Type(() => GroupWhereInput)
  where?: GroupWhereInput;

  @ApiProperty({
    required: false,
    type: [GroupOrderByInput],
  })
  @Field(() => [GroupOrderByInput], { nullable: true })
  @Type(() => GroupOrderByInput)
  orderBy?: Array<GroupOrderByInput>;

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

export { GroupFindManyArgs };
