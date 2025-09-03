import { useState, useRef } from 'react';
import './App.css'; // Mantido para a estrutura de arquivos solicitada

// Define a interface para o objeto de item na lista
interface TodoItem {
  id: number;
  text: string;
}

// O componente principal da aplicação
export default function App() {
  // Estado para a lista de tarefas
  const [todos, setTodos] = useState<TodoItem[]>([]);
  // Estado para o texto da nova tarefa
  const [newTodoText, setNewTodoText] = useState<string>('');
  // Estado para o ID da tarefa que está sendo editada
  const [editingId, setEditingId] = useState<number | null>(null);
  // Estado para o novo texto durante a edição
  const [editingText, setEditingText] = useState<string>('');

  // Referência para o input de edição para focar automaticamente
  const editInputRef = useRef<HTMLInputElement>(null);

  // --- Operação CREATE (Criar) ---
  const handleCreateTodo = () => {
    // Verifica se o texto não está vazio
    if (newTodoText.trim() === '') {
      return;
    }

    // Cria um novo item com um ID único e o texto
    const newTodo: TodoItem = {
      id: Date.now(), // Usa timestamp como ID único
      text: newTodoText.trim(),
    };

    // Adiciona o novo item ao estado da lista de tarefas
    setTodos([...todos, newTodo]);
    // Limpa o campo de entrada
    setNewTodoText('');
  };

  // --- Operação DELETE (Excluir) ---
  const handleDeleteTodo = (id: number) => {
    // Filtra a lista para remover o item com o ID correspondente
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  // --- Operação UPDATE (Atualizar) - Iniciar Edição ---
  const startEditing = (todo: TodoItem) => {
    setEditingId(todo.id);
    setEditingText(todo.text);
    // Foca no input de edição após o estado ser atualizado
    setTimeout(() => {
      if (editInputRef.current) {
        editInputRef.current.focus();
      }
    }, 0);
  };

  // --- Operação UPDATE (Atualizar) - Salvar Edição ---
  const handleSaveEdit = () => {
    if (editingId === null || editingText.trim() === '') {
      return;
    }

    // Mapeia a lista para encontrar e atualizar o item editado
    const updatedTodos = todos.map(todo => {
      if (todo.id === editingId) {
        return { ...todo, text: editingText.trim() };
      }
      return todo;
    });

    setTodos(updatedTodos);
    // Reinicia o estado de edição
    setEditingId(null);
    setEditingText('');
  };

  // --- Operação UPDATE (Atualizar) - Cancelar Edição ---
  const handleCancelEdit = () => {
    setEditingId(null);
    setEditingText('');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-lg bg-white p-8 rounded-xl shadow-lg border border-gray-200">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Lista de Tarefas (CRUD)
        </h1>

        {/* Formulário para criar uma nova tarefa */}
        <div className="flex mb-6 space-x-2">
          <input
            type="text"
            value={newTodoText}
            onChange={(e) => setNewTodoText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleCreateTodo();
              }
            }}
            placeholder="Adicionar uma nova tarefa..."
            className="flex-grow p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          />
          <button
            onClick={handleCreateTodo}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 transform hover:scale-105"
          >
            Adicionar
          </button>
        </div>

        {/* Lista de tarefas (Operação READ - Ler) */}
        {todos.length === 0 ? (
          <p className="text-center text-gray-500 italic">Nenhuma tarefa adicionada ainda.</p>
        ) : (
          <ul className="space-y-4">
            {todos.map(todo => (
              <li
                key={todo.id}
                className="flex items-center justify-between bg-gray-50 p-4 rounded-lg border border-gray-200"
              >
                {/* Condicional para renderizar o modo de leitura ou edição */}
                {editingId === todo.id ? (
                  <div className="flex-grow flex items-center space-x-2">
                    <input
                      type="text"
                      value={editingText}
                      onChange={(e) => setEditingText(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          handleSaveEdit();
                        } else if (e.key === 'Escape') {
                          handleCancelEdit();
                        }
                      }}
                      ref={editInputRef}
                      className="flex-grow p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <button
                      onClick={handleSaveEdit}
                      className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-200"
                    >
                      Salvar
                    </button>
                    <button
                      onClick={handleCancelEdit}
                      className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition duration-200"
                    >
                      Cancelar
                    </button>
                  </div>
                ) : (
                  <>
                    {/* Modo de leitura */}
                    <span className="text-gray-800 text-lg">{todo.text}</span>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => startEditing(todo)}
                        className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition duration-200"
                      >
                        Editar
                      </button>
                      <button
                        onClick={() => handleDeleteTodo(todo.id)}
                        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
                      >
                        Excluir
                      </button>
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
