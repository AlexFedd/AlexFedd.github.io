import { useQuery, useQueries, keepPreviousData } from "@tanstack/react-query";
import { getProjects, getTodoById, getTodosIds } from "../api/api";

export const useTodosIds = () => {
  return useQuery({
    queryKey: ["todos"],
    queryFn: getTodosIds,
  });
};

export function useTodos(ids) {
  return useQueries({
    queries: (ids ?? []).map((id) => {
      return {
        queryKey: ["todo", { id }],
        queryFn: () => getTodoById(id),
      };
    }),
  });
}

export function useProjects(page) {
  return useQuery({
    queryKey: ["projects", { page }],
    queryFn: () => getProjects(page),
    placeholderData: keepPreviousData,
  });
}
