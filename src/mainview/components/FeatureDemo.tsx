import React, { useCallback, useEffect, useState } from 'react';

interface FeatureDemoProps {
  title: string;
}

const FeatureDemo: React.FC<FeatureDemoProps> = ({ title }) => {
  const [time, setTime] = useState(new Date());
  const [todos, setTodos] = useState<string[]>([
    'Learn Electrobun',
    'Build React apps',
    'Deploy to desktop',
  ]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const addTodo = useCallback(() => {
    if (newTodo.trim()) {
      setTodos((prev) => [...prev, newTodo.trim()]);
      setNewTodo('');
    }
  }, [newTodo]);

  const removeTodo = useCallback((index: number) => {
    setTodos((prev) => prev.filter((_, i) => i !== index));
  }, []);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  return (
    <div
      style={{
        background: 'white',
        borderRadius: '12px',
        padding: '20px',
        margin: '20px 0',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h3 style={{ color: '#2563eb', marginTop: 0 }}>{title}</h3>

      <div style={{ marginBottom: '20px' }}>
        <strong>Current Time:</strong> {time.toLocaleTimeString()}
      </div>

      <div>
        <h4>Todo List (React State Management)</h4>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Add a new todo..."
            style={{
              flex: 1,
              padding: '8px 12px',
              border: '2px solid #e5e7eb',
              borderRadius: '6px',
              fontSize: '14px',
            }}
          />
          <button
            onClick={addTodo}
            style={{
              background: '#10b981',
              color: 'white',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '14px',
            }}
          >
            Add
          </button>
        </div>

        <ul style={{ listStyle: 'none', padding: 0 }}>
          {todos.map((todo, index) => (
            <li
              key={index}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '8px 12px',
                background: '#f9fafb',
                borderRadius: '6px',
                marginBottom: '8px',
              }}
            >
              <span>{todo}</span>
              <button
                onClick={() => removeTodo(index)}
                style={{
                  background: '#ef4444',
                  color: 'white',
                  border: 'none',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '12px',
                }}
              >
                ×
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FeatureDemo;
