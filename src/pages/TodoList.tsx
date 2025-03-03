/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import Todo from "../../types";
import {
  createTodo,
  deleteTodo,
  fetchToDos,
  updateTodo,
} from "../services/todoService";

const TodoList: React.FC = () => {
  const [newTask, setNewTask] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const data = await fetchToDos();
      setTodos(data.slice(0, 10));
      setLoading(false);

    } catch (error) {
      setError("Error fetching data");
      setLoading(false);
    }
  };

  const handleAdd = async () => {
    if (!newTask.trim()) return;
    try {
      const newTodo = await createTodo(newTask);
      setTodos([...todos, newTodo]);
      setNewTask("");
    } catch (error) {
      console.error("Error creating todo:", error);
    }
  };

  const handleUpdate = async (id: number, completed: boolean) => {
    try {
      const updatedTodo = await updateTodo(id, completed);
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, ...updatedTodo } : todo
        )
      );
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  const handleDelete = async (id: number) => {
    await deleteTodo(id);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <section className="p-2">
      <header className="flex m-4">
        <form
          className="flex w-full"
          onSubmit={(e) => {
            e.preventDefault();
            handleAdd();
          }}
        >
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="flex-grow p-2 border rounded-l"
            placeholder="Enter a new task..."
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-r"
          >
            Add
          </button>
        </form>
      </header>

      {/* Table for large screens */}
      <article className="hidden lg:block">
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="border px-4 py-2">ID</th>
              <th className="border px-4 py-2">Title</th>
              <th className="border px-4 py-2">Completed</th>
              <th className="border px-4 py-2">Update</th>
              <th className="border px-4 py-2">Delete</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id}>
                <td className="border px-4 py-2">{todo.id}</td>
                <td className="border px-4 py-2">{todo.title}</td>
                <td className="border px-4 py-2">
                  {todo.completed ? "Yes" : "No"}
                </td>
                <td>
                  <button
                    onClick={() => handleUpdate(todo.id, todo.completed)}
                    className={`px-3 py-1 rounded ${
                      todo.completed ? "bg-green-500 text-white" : "bg-gray-300"
                    }`}
                  >
                    {todo.completed ? "Ready" : "Not ready"}
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(todo.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>

      {/* List for mobile devices and tablets */}
      <article className="lg:hidden">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="flex justify-between items-center border-b py-2"
          >
            <div className="flex flex-col">
              <span className="font-semibold">ID: {todo.id}</span>
              <span>Title: {todo.title}</span>
              <span>Completed: {todo.completed ? "Yes" : "No"}</span>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => handleUpdate(todo.id, todo.completed)}
                className={`px-3 py-1 rounded ${
                  todo.completed ? "bg-green-500 text-white" : "bg-gray-300"
                }`}
              >
                {todo.completed ? "Ready" : "Not ready"}
              </button>
              <button
                onClick={() => handleDelete(todo.id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
};

export default TodoList;
