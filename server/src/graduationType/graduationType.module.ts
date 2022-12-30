import { Module } from "@nestjs/common";
import { GraduationTypeModuleBase } from "./base/graduationType.module.base";
import { GraduationTypeService } from "./graduationType.service";
import { GraduationTypeResolver } from "./graduationType.resolver";

@Module({
  imports: [GraduationTypeModuleBase],
  providers: [GraduationTypeService, GraduationTypeResolver],
  exports: [GraduationTypeService],
})
export class GraduationTypeModule {}
