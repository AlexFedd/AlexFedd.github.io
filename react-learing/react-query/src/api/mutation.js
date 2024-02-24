import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTodo, deleteTodo, updateTodo } from "./api";

export function useCreateTodo() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => createTodo(data),
    onMutate: () => console.log("mutating"),
    onError: () => console.log("error"),
    onSuccess: () => console.log("success"),
    onSettled: async (_, error) => {
      if (error) {
        console.log("error");
      } else {
        await queryClient.invalidateQueries({ queryKey: ["todos"] });
      }
    },
  });
}

export function useUpdateTodo() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => {
      console.log(data);
      updateTodo(data);
    },
    onSettled: async (_, error, variables) => {
      if (error) {
        console.log(error.message + " gfdg");
      } else {
        await queryClient.invalidateQueries({ queryKey: ["todos"] });
        await queryClient.invalidateQueries({
          queryKey: ["todo", { id: variables.id }],
        });
      }
    },
  });
}

export function useDeleteTodo() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id) => deleteTodo(id),
        onSuccess: () => console.log('success deleting'),
        onSettled: async (_, error) => {
            if(error) {
                console.log('There is an error while deleting');
            } else {
                await queryClient.invalidateQueries({queryKey: ['todos']});
            }
        }
    })
}