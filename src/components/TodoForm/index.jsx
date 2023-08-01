import React, { useState }from 'react' 
import styles from  '../TodoForm/styles.module.css'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('')

    const heandleSubmit = (e) => {
        e.preventDefault()
        if (value) {
            addTodo(value)
            setValue('')

        }
    }

    return(
        <form className={styles.TodoForm} onSubmit={heandleSubmit}  >
            <input type='text' className={styles.todo_input} value={value}
            placeholder='O que deseja anotar hoje?'
            onChange={(e) => setValue(e.target.value)} 
            
            />
        
            <button type='submit' className={styles.todo_btn}>Add tarefa</button>
        </form>
    )
}