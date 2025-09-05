import React, { useState } from 'react';
import FeatureDemo from './components/FeatureDemo';

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>Hello Electrobun + React! 🎉⚛️</h1>
      <p className="subtitle">
        A fast, cross-platform desktop app framework with modern React
      </p>

      <div className="welcome-section">
        <p>
          Welcome to your React-powered Electrobun app! This combines the power
          of Bun's fast runtime with modern React development.
        </p>

        <div style={{ margin: '20px 0', textAlign: 'center' }}>
          <button
            onClick={() => setCount(count + 1)}
            style={{
              background: '#2563eb',
              color: 'white',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '8px',
              fontSize: '16px',
              cursor: 'pointer',
              marginRight: '10px',
            }}
          >
            Count: {count}
          </button>
          <button
            onClick={() => setCount(0)}
            style={{
              background: '#dc2626',
              color: 'white',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '8px',
              fontSize: '16px',
              cursor: 'pointer',
            }}
          >
            Reset
          </button>
        </div>

        <h2>What is Electrobun + React?</h2>
        <ul>
          <li>
            <strong>Fast:</strong> Built on Bun's lightning-fast JavaScript
            runtime
          </li>
          <li>
            <strong>Modern:</strong> Uses React 18 with hooks and modern
            patterns
          </li>
          <li>
            <strong>Native:</strong> Access to system APIs like menus, trays,
            and file dialogs
          </li>
          <li>
            <strong>Cross-platform:</strong> Works on macOS, Windows, and Linux
          </li>
          <li>
            <strong>Developer-friendly:</strong> Hot module replacement and
            TypeScript support
          </li>
        </ul>

        <h2>Tech Stack</h2>
        <div
          style={{
            display: 'flex',
            gap: '10px',
            flexWrap: 'wrap',
            margin: '15px 0',
          }}
        >
          {['Electrobun', 'React 18', 'TypeScript', 'Bun Runtime'].map(
            (tech) => (
              <span
                key={tech}
                style={{
                  background: '#f1f5f9',
                  color: '#475569',
                  padding: '6px 12px',
                  borderRadius: '20px',
                  fontSize: '14px',
                  fontWeight: '500',
                }}
              >
                {tech}
              </span>
            )
          )}
        </div>

        <h2>Get Started</h2>
        <p>
          Ready to build something amazing? Check out the documentation and
          examples:
        </p>

        <div className="links">
          <a href="https://electrobun.dev/" className="doc-link">
            📚 Electrobun
          </a>
          <a
            href="https://github.com/blackboardsh/electrobun"
            className="doc-link"
          >
            🐙 GitHub Repository
          </a>
          <a href="https://bun.com/guides/ecosystem/react" className="doc-link">
            ⚛️ Bun + React Guide
          </a>
        </div>
      </div>

      <FeatureDemo title="Advanced React Features Demo" />

      <div className="footer">
        <p>
          Edit <code>src/mainview/App.tsx</code> to customize your React
          components
        </p>
        <p>React state and hooks work perfectly with Electrobun!</p>
      </div>
    </div>
  );
};

export default App;
