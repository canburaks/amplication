import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { MArketProfileResolverBase } from "./base/mArketProfile.resolver.base";
import { MArketProfile } from "./base/MArketProfile";
import { MArketProfileService } from "./mArketProfile.service";

@graphql.Resolver(() => MArketProfile)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class MArketProfileResolver extends MArketProfileResolverBase {
  constructor(
    protected readonly service: MArketProfileService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
