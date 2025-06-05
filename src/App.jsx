import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { v4 as uuidv4 } from "uuid";
function App() {
  const [Todo, setTodo] = useState("");
  const [Todos, setTodos] = useState([]);
  const [showCompletedOnly, setShowCompletedOnly] = useState(false);
  const [Disapper, setDisapper] = useState(false);

  const HandleAddChange = (e) => {
    setTodos([...Todos, { Todo, iscomplete: false, id: uuidv4() }]);
    setTodo("");
  };
  const HandleChange = (e) => {
    setTodo(e.target.value);
    console.log(Todos);
  };

  const handleToggleComplete = (id) => {
    const index = Todos.findIndex((Todo) => Todo.id === id);
    const updatedTodos = [...Todos];
    updatedTodos[index] = {
      ...updatedTodos[index],
      iscomplete: !updatedTodos[index].iscomplete,
    };
    setTodos(updatedTodos);
  };

  const HandleEdit = (id) => {
    const newTask = prompt("Enter new todo text:");
    if (!newTask) return;

    const updatedTodos = Todos.map((todo) =>
      todo.id === id ? { ...todo, Todo: newTask } : todo
    );
    setTodos(updatedTodos);
  };

  const handleDelete = (id) => {
    const updatedTodos = Todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  const HandleShow = () => {
    setShowCompletedOnly(!showCompletedOnly);
  };
  const HandleDisapper = () => {
    setDisapper(!Disapper);
    console.log(Disapper);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>
      
      <Navbar />

      <div className="container mx-auto min-h-[80vh] my-6 p-10 relative z-10">
        {/* Glassmorphism main container */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 hover:scale-[1.02] p-8">
          
          {/* Header with floating effect */}
          <div className="text-center mb-8">
            <h1 className="text-5xl font-extrabold bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-2xl mb-2 animate-pulse">
              ✨ Todo Master ✨
            </h1>
            <p className="text-white/70 text-lg">Transform your productivity with style</p>
          </div>

          {/* Input container with neon glow */}
          <div className="bg-gradient-to-r from-violet-600/30 to-purple-600/30 backdrop-blur-lg rounded-2xl p-6 mb-8 border border-violet-400/30 shadow-2xl hover:shadow-violet-500/50 transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="flex-1 relative">
                <input
                  type="text"
                  onChange={HandleChange}
                  value={Todo}
                  placeholder="✨ What amazing thing will you accomplish today?"
                  className="w-full h-14 px-6 text-lg rounded-2xl bg-white/90 backdrop-blur-sm border-2 border-transparent focus:border-purple-400 focus:outline-none focus:ring-4 focus:ring-purple-400/30 text-gray-800 placeholder-gray-500 shadow-inner transition-all duration-300 hover:bg-white hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-2xl -z-10 blur opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="flex gap-3">
                <button
                  onClick={HandleAddChange}
                  className="group relative bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-2xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-2xl hover:shadow-purple-500/50 border border-white/20"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <span className="text-xl">+</span>
                    Add Magic
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-yellow-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </button>
                
                <button
                  onClick={HandleShow}
                  className="group relative bg-gradient-to-r from-pink-600 to-red-600 hover:from-pink-700 hover:to-red-700 text-white font-bold py-3 px-8 rounded-2xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-2xl hover:shadow-pink-500/50 border border-white/20"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <span className="text-xl">{showCompletedOnly ? '👁️' : '✅'}</span>
                    {showCompletedOnly ? 'Show Active' : 'Show Done'}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </button>
              </div>
            </div>
          </div>

          {/* Todo list container */}
          <div className="bg-gradient-to-br from-violet-600/20 to-purple-600/20 backdrop-blur-lg rounded-2xl p-6 border border-violet-400/30 shadow-2xl min-h-[400px] max-h-[500px] overflow-y-auto custom-scrollbar">
            <div className="space-y-4">
              {Todos.filter((todo) => {
                if (showCompletedOnly) return todo.iscomplete;
                return !todo.iscomplete;
              }).map((items, index) => (
                <div
                  key={items.id}
                  className="group bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-1 border border-white/30 hover:border-purple-300/50"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <input
                          type="checkbox"
                          checked={items.iscomplete}
                          onChange={() => {
                            handleToggleComplete(items.id);
                            HandleDisapper();
                          }}
                          className="w-6 h-6 rounded-full border-3 border-purple-400 text-purple-600 focus:ring-purple-500 focus:ring-2 transition-all duration-300 hover:scale-110 cursor-pointer"
                        />
                        {items.iscomplete && (
                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <span className="text-purple-600 text-sm font-bold animate-bounce">✓</span>
                          </div>
                        )}
                      </div>
                      
                      <h2 className={`text-lg font-semibold transition-all duration-300 ${
                        items.iscomplete
                          ? "line-through text-gray-400 opacity-60"
                          : "text-gray-800 group-hover:text-purple-700"
                      }`}>
                        {items.Todo}
                      </h2>
                    </div>
                    
                    <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <button
                        onClick={() => HandleEdit(items.id)}
                        className="group/btn relative bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-medium py-2 px-5 rounded-xl transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-blue-500/50"
                      >
                        <span className="flex items-center gap-2">
                          <span className="text-sm">✏️</span>
                          Edit
                        </span>
                      </button>
                      
                      <button
                        onClick={() => handleDelete(items.id)}
                        className="group/btn relative bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-medium py-2 px-5 rounded-xl transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-red-500/50"
                      >
                        <span className="flex items-center gap-2">
                          <span className="text-sm">🗑️</span>
                          Delete
                        </span>
                      </button>
                    </div>
                  </div>
                  
                  {/* Progress indicator */}
                  <div className="mt-3 h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full transition-all duration-1000 ${
                        items.iscomplete 
                          ? 'w-full bg-gradient-to-r from-green-400 to-emerald-500' 
                          : 'w-0 bg-gradient-to-r from-purple-400 to-pink-500'
                      }`}
                    ></div>
                  </div>
                </div>
              ))}
              
              {Todos.filter((todo) => {
                if (showCompletedOnly) return todo.iscomplete;
                return !todo.iscomplete;
              }).length === 0 && (
                <div className="text-center py-16">
                  <div className="text-6xl mb-4 animate-bounce">
                    {showCompletedOnly ? '🎉' : '📝'}
                  </div>
                  <p className="text-white/70 text-xl font-medium">
                    {showCompletedOnly ? 'No completed tasks yet!' : 'Ready to conquer the day?'}
                  </p>
                  <p className="text-white/50 text-sm mt-2">
                    {showCompletedOnly ? 'Complete some tasks to see them here' : 'Add your first task above'}
                  </p>
                </div>
              )}
            </div>
          </div>
          
          {/* Stats footer */}
          <div className="mt-6 flex justify-center gap-8 text-white/80">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-300">{Todos.filter(t => !t.iscomplete).length}</div>
              <div className="text-sm">Active</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-300">{Todos.filter(t => t.iscomplete).length}</div>
              <div className="text-sm">Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-pink-300">{Todos.length}</div>
              <div className="text-sm">Total</div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translate3d(0, 40px, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }
        
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #8b5cf6, #a855f7);
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #7c3aed, #9333ea);
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}

export default App;