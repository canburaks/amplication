import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GraduationTypeResolverBase } from "./base/graduationType.resolver.base";
import { GraduationType } from "./base/GraduationType";
import { GraduationTypeService } from "./graduationType.service";

@graphql.Resolver(() => GraduationType)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class GraduationTypeResolver extends GraduationTypeResolverBase {
  constructor(
    protected readonly service: GraduationTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
