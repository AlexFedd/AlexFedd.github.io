import { useForm } from "react-hook-form";
import {
  useCreateTodo,
  useDeleteTodo,
  useUpdateTodo,
} from "../src/api/mutation";
import { useTodos, useTodosIds } from "../src/queries/queries";

function Todo() {
  const todosIdsQuery = useTodosIds();
  const todosQueries = useTodos(todosIdsQuery.data);
  const createMutation = useCreateTodo();
  const handleCreateTodoSubmit = (data) => {
    createMutation.mutate(data);
  };
  const updateTodoMutation = useUpdateTodo();
  const deleteTodoMutation = useDeleteTodo();

  const { register, handleSubmit } = useForm();

  const handleUpdateTodoSumbit = (data) => {
    if (data) {
      console.log({ ...data, checked: true });
      updateTodoMutation.mutate({ ...data, checked: true });
    }
  };
  const handleDeleteTodoSubmit = async (id) => {
    await deleteTodoMutation.mutateAsync(id);
    console.log('ololololo');
  };
  return (
    <div>
      <form onSubmit={handleSubmit(handleCreateTodoSubmit)}>
        <h4>New task</h4>
        <input placeholder="Title" {...register("title")} />
        <input placeholder="Description" {...register("description")} />
        <input
          type="submit"
          disabled={createMutation.isPending}
          value={createMutation.isPending ? "creating now" : "create new"}
        />
      </form>
      <ul>
        {todosQueries.map(({ data }) => {
          return (
            <li key={data?.id}>
              {data?.title}
              <button onClick={() => handleUpdateTodoSumbit(data)}>
                {data?.checked ? "Done" : "Mark"}
              </button>
              <button onClick={() => handleDeleteTodoSubmit(data?.id)}>
                {deleteTodoMutation.isPending
                  ? "Deleting..."
                  : "Click to delete"}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Todo;
