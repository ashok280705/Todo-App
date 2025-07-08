import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

const Mainpage = () => {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState([]);
  const [showCompletedOnly, setShowCompletedOnly] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");
  const username = localStorage.getItem("username"); // ensure you stored this

  // 📥 Fetch todos on mount
  useEffect(() => {
    fetch(`http://localhost:3000/todo/${username}`)
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setTodos(data.passwords.map(item => ({ Todo: item.todo, iscomplete: !!item.iscomplete, id: item.id || uuidv4() })));
        }
      })
      .catch(console.error);
  }, [username]);

  // 🆕 Add new todo
  const HandleAddChange = async () => {
    if (!todoText.trim()) return;
    const payload = { owner: username, todo: todoText };

    const res = await fetch("http://localhost:3000/todo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const result = await res.json();

    if (result.success) {
      setTodos(prev => [...prev, { Todo: todoText, iscomplete: false, id: uuidv4() }]);
      setTodoText("");
    } else {
      alert(result.message);
    }
  };

  const handleToggleComplete = async (id) => {
    const todo = todos.find(t => t.id === id);
    const newStatus = !todo.iscomplete;
    const updatedText = todo.Todo;

    const res = await fetch("http://localhost:3000/todo", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        owner: username,
        oldTodo: todo.Todo,
        newTodo: updatedText
      }),
    });
    const result = await res.json();

    if (result.success) {
      setTodos(prev => prev.map(t => t.id === id ? { ...t, iscomplete: newStatus } : t));
    } else {
      alert(result.message);
    }
  };

  const saveEdit = async (id) => {
    const oldTodo = todos.find(t => t.id === id).Todo;
    const res = await fetch("http://localhost:3000/todo", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ owner: username, oldTodo, newTodo: editText }),
    });
    const result = await res.json();
    if (result.success) {
      setTodos(prev => prev.map(t => t.id === id ? { ...t, Todo: editText } : t));
      cancelEdit();
    } else {
      alert(result.message);
    }
  };

  const handleDelete = async (id) => {
    const todo = todos.find(t => t.id === id);
    const res = await fetch("http://localhost:3000/todo", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ owner: username, todo: todo.Todo }),
    });
    const result = await res.json();

    if (result.success) {
      setTodos(prev => prev.filter(t => t.id !== id));
    } else {
      alert(result.message);
    }
  };

  const startHandleEdit = (id) => {
    setIsEditing(true);
    setEditingId(id);
    setEditText(todos.find(t => t.id === id).Todo);
  };

  const cancelEdit = () => {
    setIsEditing(false);
    setEditingId(null);
    setEditText("");
  };

  return (
    <>
      <Navbar />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#e0f7fa] via-[#e1bee7] to-[#fce4ec] blur-sm" />
      <div className="min-h-[calc(100vh-158px)] text-gray-800 px-4">
        <div className="max-w-3xl mx-auto py-10">
          <h1 className="text-3xl font-bold text-center mb-8 text-purple-700">Todo Master</h1>
          <div className="flex gap-3 mb-6">
            <input
              type="text"
              value={todoText}
              onChange={e => setTodoText(e.target.value)}
              placeholder="Enter your task..."
              className="flex-1 px-5 py-3 rounded-xl bg-white/70 border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <button onClick={HandleAddChange} className="px-4 py-2 bg-purple-600 text-white rounded-md shadow-md hover:bg-purple-700">Add</button>
            <button onClick={() => setShowCompletedOnly(!showCompletedOnly)}
                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400">
              {showCompletedOnly ? "Show All" : "Show Done"}
            </button>
          </div>
          <div className="bg-white/70 border border-gray-200 rounded-xl shadow-md p-5 space-y-4">
            {todos.filter(t => showCompletedOnly ? t.iscomplete : true).map(todo => (
              <div key={todo.id} className="flex justify-between items-center border-b pb-3 last:border-b-0">
                <div className="flex items-center gap-3">
                  <input type="checkbox" checked={todo.iscomplete} onChange={() => handleToggleComplete(todo.id)} className="accent-purple-600 w-5 h-5"/>
                  {isEditing && editingId === todo.id ? (
                    <input value={editText} onChange={e => setEditText(e.target.value)} placeholder="Enter your task..."
                           className="flex-1 px-3 py-2 rounded-xl bg-white/70 border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400"/>
                  ) : (
                    <span className={`text-lg ${todo.iscomplete ? "line-through text-gray-400" : ""}`}>{todo.Todo}</span>
                  )}
                </div>
                <div className="flex gap-2 text-sm">
                  {isEditing && editingId === todo.id ? (
                    <button onClick={() => saveEdit(todo.id)} className="text-blue-600 hover:underline">Save</button>
                  ) : (
                    <button onClick={() => startHandleEdit(todo.id)} className="text-blue-600 hover:underline">Edit</button>
                  )}
                  <button onClick={() => handleDelete(todo.id)} className="text-red-600 hover:underline">Delete</button>
                </div>
              </div>
            ))}
            {!todos.filter(t => showCompletedOnly ? t.iscomplete : true).length && (
              <p className="text-center text-gray-500 py-6">
                {showCompletedOnly ? "No completed tasks." : "Start adding your tasks!"}
              </p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Mainpage;