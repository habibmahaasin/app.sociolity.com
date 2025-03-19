import { IPost } from "../types/posts-types";
import api from "./api";

export const PostService = {
  getAll: async (): Promise<IPost[]> => {
    const response = await api.get("/posts");
    return response.data;
  },
};
