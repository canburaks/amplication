/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, InstituteType, GraduationType, Country } from "@prisma/client";

export class InstituteTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.InstituteTypeFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.InstituteTypeFindManyArgs>
  ): Promise<number> {
    return this.prisma.instituteType.count(args);
  }

  async findMany<T extends Prisma.InstituteTypeFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.InstituteTypeFindManyArgs>
  ): Promise<InstituteType[]> {
    return this.prisma.instituteType.findMany(args);
  }
  async findOne<T extends Prisma.InstituteTypeFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.InstituteTypeFindUniqueArgs>
  ): Promise<InstituteType | null> {
    return this.prisma.instituteType.findUnique(args);
  }
  async create<T extends Prisma.InstituteTypeCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.InstituteTypeCreateArgs>
  ): Promise<InstituteType> {
    return this.prisma.instituteType.create<T>(args);
  }
  async update<T extends Prisma.InstituteTypeUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.InstituteTypeUpdateArgs>
  ): Promise<InstituteType> {
    return this.prisma.instituteType.update<T>(args);
  }
  async delete<T extends Prisma.InstituteTypeDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.InstituteTypeDeleteArgs>
  ): Promise<InstituteType> {
    return this.prisma.instituteType.delete(args);
  }

  async findGraduationTypes(
    parentId: string,
    args: Prisma.GraduationTypeFindManyArgs
  ): Promise<GraduationType[]> {
    return this.prisma.instituteType
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .graduationTypes(args);
  }

  async getCountry(parentId: string): Promise<Country | null> {
    return this.prisma.instituteType
      .findUnique({
        where: { id: parentId },
      })
      .country();
  }
}
