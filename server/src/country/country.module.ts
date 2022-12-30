import { Module } from "@nestjs/common";
import { CountryModuleBase } from "./base/country.module.base";
import { CountryService } from "./country.service";
import { CountryResolver } from "./country.resolver";

@Module({
  imports: [CountryModuleBase],
  providers: [CountryService, CountryResolver],
  exports: [CountryService],
})
export class CountryModule {}
