import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { InstituteTypeServiceBase } from "./base/instituteType.service.base";

@Injectable()
export class InstituteTypeService extends InstituteTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
