import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
const Mainpage = () => {
  const [Todo, setTodo] = useState("");
  const [Todos, setTodos] = useState([]);
  const [showCompletedOnly, setShowCompletedOnly] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  const HandleAddChange = () => {
    if (!Todo.trim()) return;
    setTodos([...Todos, { Todo, iscomplete: false, id: uuidv4() }]);
    setTodo("");
  };

  const HandleChange = (e) => setTodo(e.target.value);

  const handleToggleComplete = (id) => {
    const updated = Todos.map((todo) =>
      todo.id === id ? { ...todo, iscomplete: !todo.iscomplete } : todo
    );
    setTodos(updated);
  };

  const startHandleEdit = (id) => {
    setIsEditing(!isEditing);
    const todoToEdit = Todos.find((todo) => todo.id === id);
    if (todoToEdit) {
      setEditingId(id);
      setEditText(todoToEdit.Todo);
    }
  };

  const handleChangeEdit = (e) => {
    setEditText(e.target.value);
  };

  const saveEdit = (id) => {
    setTodos(
      Todos.map((todo) => (todo.id === id ? { ...todo, Todo: editText } : todo))
    );
    setEditingId(null);
    setEditText("");
    setIsEditing(!isEditing);
  };
  const handleDelete = (id) => {
    setTodos(Todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <Navbar />
      {/* Aurora gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#e0f7fa] via-[#e1bee7] to-[#fce4ec] blur-sm"></div>

      <div className="min-h-[calc(100vh-158px)] text-gray-800">
        <div className="max-w-3xl mx-auto px-4 py-10">
          <h1 className="text-3xl font-bold text-center mb-8 text-purple-700">
            Todo Master
          </h1>

          {/* Input Area */}
          <div className="flex gap-3 mb-6">
            <input
              type="text"
              value={Todo}
              onChange={HandleChange}
              placeholder="Enter your task..."
              className="flex-1 px-5 py-3 rounded-xl bg-white/70 backdrop-blur-sm border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-gray-500 text-gray-800 transition-all duration-300 hover:shadow-lg"
            />
            <button
              onClick={HandleAddChange}
              className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 shadow-md"
            >
              Add
            </button>
            <button
              onClick={() => setShowCompletedOnly(!showCompletedOnly)}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
            >
              {showCompletedOnly ? "Show All" : "Show Done"}
            </button>
          </div>

          {/* Todo List */}
          <div className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl shadow-md p-5 space-y-4">
            {Todos.filter((todo) =>
              showCompletedOnly ? todo.iscomplete : true
            ).map((todo) => (
              <div
                key={todo.id}
                className="flex justify-between items-center border-b pb-3 last:border-b-0"
              >
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={todo.iscomplete}
                    onChange={() => handleToggleComplete(todo.id)}
                    className="accent-purple-600 w-5 h-5"
                  />
                  <span
                    className={`text-lg ${
                      todo.iscomplete ? "line-through text-gray-400" : ""
                    }`}
                  >
                    {isEditing && editingId === todo.id ? (
                      <input
                        type="text"
                        value={editText}
                        onChange={handleChangeEdit}
                        placeholder="Enter your task..."
                        className="flex-1 px-3 py-2 rounded-xl bg-white/70 backdrop-blur-sm border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-gray-500 text-gray-800 transition-all duration-300 hover:shadow-lg"
                      />
                    ) : (
                      <span>{todo.Todo}</span>
                    )}
                  </span>
                </div>
                <div className="flex gap-2 text-sm">
                  {isEditing ? (
                    <button
                      onClick={() => {
                        saveEdit(todo.id);
                      }}
                      className="text-blue-600 hover:underline cursor-pointer"
                    >
                      <lord-icon
                        src="https://cdn.lordicon.com/navborva.json"
                        trigger="hover"
                        stroke="bold"
                        colors="primary:#121331,secondary:#000000"
                      ></lord-icon>
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        startHandleEdit(todo.id);
                      }}
                      className="text-blue-600 hover:underline"
                    >
                      <lord-icon
                        src="https://cdn.lordicon.com/exymduqj.json"
                        trigger="hover"
                        stroke="bold"
                        colors="primary:#121331,secondary:#000000"
                      ></lord-icon>
                    </button>
                  )}

                  <button
                    onClick={() => {
                      handleDelete(todo.id);
                    }}
                    className="text-red-600 hover:underline cursor-pointer"
                  >
                    <lord-icon
                      src="https://cdn.lordicon.com/jzinekkv.json"
                      trigger="hover"
                      stroke="bold"
                      colors="primary:#121331,secondary:#000000"
                    ></lord-icon>
                  </button>
                </div>
              </div>
            ))}

            {Todos.filter((todo) =>
              showCompletedOnly ? todo.iscomplete : true
            ).length === 0 && (
              <p className="text-center text-gray-500 py-6">
                {showCompletedOnly
                  ? "No completed tasks."
                  : "Start adding your tasks!"}
              </p>
            )}
          </div>

          {/* Footer Stats */}
          <div className="mt-6 flex justify-around text-sm text-gray-600">
            <div className="text-center">
              <div className="font-bold text-purple-600">
                {Todos.filter((t) => !t.iscomplete).length}
              </div>
              <div>Active</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-green-600">
                {Todos.filter((t) => t.iscomplete).length}
              </div>
              <div>Completed</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-pink-600">{Todos.length}</div>
              <div>Total</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Mainpage;
