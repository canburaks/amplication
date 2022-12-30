import { Module } from "@nestjs/common";
import { MArketProfileModuleBase } from "./base/mArketProfile.module.base";
import { MArketProfileService } from "./mArketProfile.service";
import { MArketProfileResolver } from "./mArketProfile.resolver";

@Module({
  imports: [MArketProfileModuleBase],
  providers: [MArketProfileService, MArketProfileResolver],
  exports: [MArketProfileService],
})
export class MArketProfileModule {}
