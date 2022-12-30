import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { MArketProfileServiceBase } from "./base/mArketProfile.service.base";

@Injectable()
export class MArketProfileService extends MArketProfileServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
