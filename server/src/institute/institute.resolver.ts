import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { InstituteResolverBase } from "./base/institute.resolver.base";
import { Institute } from "./base/Institute";
import { InstituteService } from "./institute.service";

@graphql.Resolver(() => Institute)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class InstituteResolver extends InstituteResolverBase {
  constructor(
    protected readonly service: InstituteService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
