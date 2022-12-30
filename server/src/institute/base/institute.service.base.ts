/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, Institute, Group, Country } from "@prisma/client";

export class InstituteServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.InstituteFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.InstituteFindManyArgs>
  ): Promise<number> {
    return this.prisma.institute.count(args);
  }

  async findMany<T extends Prisma.InstituteFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.InstituteFindManyArgs>
  ): Promise<Institute[]> {
    return this.prisma.institute.findMany(args);
  }
  async findOne<T extends Prisma.InstituteFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.InstituteFindUniqueArgs>
  ): Promise<Institute | null> {
    return this.prisma.institute.findUnique(args);
  }
  async create<T extends Prisma.InstituteCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.InstituteCreateArgs>
  ): Promise<Institute> {
    return this.prisma.institute.create<T>(args);
  }
  async update<T extends Prisma.InstituteUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.InstituteUpdateArgs>
  ): Promise<Institute> {
    return this.prisma.institute.update<T>(args);
  }
  async delete<T extends Prisma.InstituteDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.InstituteDeleteArgs>
  ): Promise<Institute> {
    return this.prisma.institute.delete(args);
  }

  async findGroups(
    parentId: string,
    args: Prisma.GroupFindManyArgs
  ): Promise<Group[]> {
    return this.prisma.institute
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .groups(args);
  }

  async getCountry(parentId: string): Promise<Country | null> {
    return this.prisma.institute
      .findUnique({
        where: { id: parentId },
      })
      .country();
  }
}
