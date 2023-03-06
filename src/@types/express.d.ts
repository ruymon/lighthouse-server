import { LayersUser } from "entities/LayersUser";

declare global {
  namespace Express {
    export interface Request {
      user: LayersUser
    }
  }
}
