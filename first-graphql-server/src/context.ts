import { PrismaClient } from "@prisma/client";
import { GhibliAPI } from "./datasources/ghibliAPI";
import { TrackAPI } from "./datasources/TrackAPI";
import { AuthenticatedUser } from "./modules/auth";

export type Context = {
  dataSources: {
    ghibliAPI: GhibliAPI;
    trackAPI: TrackAPI;
    db: PrismaClient,
  };
  user:AuthenticatedUser | null
};