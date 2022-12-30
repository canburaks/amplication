import { Module } from "@nestjs/common";
import { GroupModuleBase } from "./base/group.module.base";
import { GroupService } from "./group.service";
import { GroupResolver } from "./group.resolver";

@Module({
  imports: [GroupModuleBase],
  providers: [GroupService, GroupResolver],
  exports: [GroupService],
})
export class GroupModule {}
