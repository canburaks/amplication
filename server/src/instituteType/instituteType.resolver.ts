import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { InstituteTypeResolverBase } from "./base/instituteType.resolver.base";
import { InstituteType } from "./base/InstituteType";
import { InstituteTypeService } from "./instituteType.service";

@graphql.Resolver(() => InstituteType)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class InstituteTypeResolver extends InstituteTypeResolverBase {
  constructor(
    protected readonly service: InstituteTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
