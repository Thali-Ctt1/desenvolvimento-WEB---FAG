function TarefaItem({ tarefa, onRemove, onToggle }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={tarefa.concluida}
        onChange={() => onToggle(tarefa.id)}
      />

      <span className={tarefa.concluida ? 'concluida' : ''}>
        {tarefa.text}
      </span>

      <button onClick={() => onRemove(tarefa.id)}>
        Remover
      </button>
    </li>
  )
}

export default TarefaItem