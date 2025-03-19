import { useQuery } from "@tanstack/react-query";
import { PostService } from "../services/posts-service";

export const usePosts = () => {
  // using useQuery already has the loading, error, and data states
  const postLists = useQuery({
    queryKey: ["posts"],
    queryFn: PostService.getAll,
  });

  //   const usersQuery = useQuery({
  //     queryKey: ["users"],
  //     queryFn: async () =>
  //       (await axios.get<User[]>("https://jsonplaceholder.typicode.com/users"))
  //         .data,
  //   });

  return { postLists };
};
