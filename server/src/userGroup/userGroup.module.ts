import { Module } from "@nestjs/common";
import { UserGroupModuleBase } from "./base/userGroup.module.base";
import { UserGroupService } from "./userGroup.service";
import { UserGroupResolver } from "./userGroup.resolver";

@Module({
  imports: [UserGroupModuleBase],
  providers: [UserGroupService, UserGroupResolver],
  exports: [UserGroupService],
})
export class UserGroupModule {}
