import { useState } from 'react'
import './App.css'
import ListaTarefas from './components/ListaTarefas'

function App() {
  const [tarefas, setTarefas] = useState([])
  const [novaTarefa, setNovaTarefa] = useState('')

  function adicionarTarefa() {
    if (novaTarefa.trim() === '') return

    const tarefa = {
      id: Date.now(),
      text: novaTarefa,
      concluida: false
    }

    setTarefas([...tarefas, tarefa])
    setNovaTarefa('')
  }

  function removerTarefa(id) {
    setTarefas(tarefas.filter(t => t.id !== id))
  }

  function alternarConclusao(id) {
    setTarefas(
      tarefas.map(t =>
        t.id === id ? { ...t, concluida: !t.concluida } : t
      )
    )
  }

  function limparTudo() {
    setTarefas([])
  }

  return (
    <main>
      <div className="container">
        <h1>Lista de Tarefas</h1>

        <input
          type="text"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
          placeholder="Digite uma tarefa"
        />

        <button onClick={adicionarTarefa}>Adicionar</button>
        <button onClick={limparTudo}>Limpar tudo</button>

        <ListaTarefas
          tarefas={tarefas}
          onRemove={removerTarefa}
          onToggle={alternarConclusao}
        />
      </div>
    </main>
  )
}

export default App