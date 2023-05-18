import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App.tsx'
import './styles/app.scss'

console.log(
  '%c[LIFE CYCLE CALCULATOR]%cv1.0.3%c[@jff]',
  'padding: 4px 3px 3px; background: #32337b; border-radius: 3px 0 0 3px; font-weight: bold; color: #fff;',
  'padding: 4px 3px 3px; background: #38dbf3; font-weight: bold; color: #32337b;',
  'padding: 4px 3px 3px; background: #32337b; border-radius: 0 3px 3px 0; font-weight: bold; color: #fff;'
);

ReactDOM.createRoot(document.getElementById('lcc') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
