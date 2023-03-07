import { LayersUser } from "../entities/LayersUser";
import { User } from "../entities/User";

declare global {
  namespace Express {
    export interface Request {
      layersUser: LayersUser,
      user: User
    }
  }
}
