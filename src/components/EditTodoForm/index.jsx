import React, { useState }from 'react' 
import styles from  '../TodoForm/styles.module.css'

export const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task)

    const handleSubmit = (e) => {
        e.preventDefault()
        
        editTodo(value, task.id)
    }

    return(
        <form className={styles.TodoForm} onSubmit={handleSubmit}  >
            <input type='text' className={styles.todo_input} value={value}
            placeholder='Alterar task'
            onChange={(e) => setValue(e.target.value)} 
            
            />
        
            <button type='submit' className={styles.todo_btn} key={task}>Alterar tarefa</button>
        </form>
    )
}