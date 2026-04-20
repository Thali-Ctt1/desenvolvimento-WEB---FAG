import TarefaItem from './TarefaItem'

function ListaTarefas({ tarefas, onRemove, onToggle }) {
  return (
    <ul>
      {tarefas.map((tarefa) => (
        <TarefaItem
          key={tarefa.id}
          tarefa={tarefa}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </ul>
  )
}

export default ListaTarefas