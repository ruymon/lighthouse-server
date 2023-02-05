import axios, { AxiosInstance } from "axios";
import { User } from "../entities/User";

export class LayersService {
  private axiosInstance: AxiosInstance;

  constructor(community: string) {
    this.axiosInstance = axios.create({
      baseURL: process.env.LAYERS_API_BASE_URL,
      headers: {
        Authorization: `Bearer ${process.env.LAYERS_TOKEN}`,
        'community-id': community,
      },
    });
  }

  /**
   * Get user information by id
   * @param userId - User's id
  **/
  public getUserById = async (userId: string): Promise<User | undefined> => {
    const response = await this.axiosInstance.get(`users/${userId}`);
    return response.data;
  };

  /**
   * Validate user's session inside Layers
   * @param session - User's session given by Layers
  **/
  public validateUser = async (userId: string, community: string, session: string): Promise<void> => {
    await this.axiosInstance.get(`/sso/session/validate`, {
      params: {
        userId,
        community,
        session,
      },
    });
  };
}