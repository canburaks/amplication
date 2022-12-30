import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { GraduationTypeServiceBase } from "./base/graduationType.service.base";

@Injectable()
export class GraduationTypeService extends GraduationTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
