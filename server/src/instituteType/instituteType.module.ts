import { Module } from "@nestjs/common";
import { InstituteTypeModuleBase } from "./base/instituteType.module.base";
import { InstituteTypeService } from "./instituteType.service";
import { InstituteTypeResolver } from "./instituteType.resolver";

@Module({
  imports: [InstituteTypeModuleBase],
  providers: [InstituteTypeService, InstituteTypeResolver],
  exports: [InstituteTypeService],
})
export class InstituteTypeModule {}
