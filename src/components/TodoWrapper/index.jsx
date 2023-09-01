import React, { useState } from 'react'
import styles from '../TodoWrapper/styles.module.css'
import { TodoForm } from '../TodoForm/index'
import { v4 as uuidv4 } from 'uuid'
import { Todo } from '../Todo/index'
import { EditTodoForm } from '../EditTodoForm/index'


export const TodoWrapper = () => {
    const [todos, setTodos] = useState([])

    const addTodo = (todo) => {
        setTodos([
            ...todos, 
            {id: uuidv4(), task: todo, completed: false, isEditing: false}
        ])

        console.log(todos)
    }
    
    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const toggleComplete = (id) => {
        setTodos(todos.map((todo) => todo.id === id ? {...todo, completed: !todo.completed} : todo))
    
    }


    const editTodo = (id) => {
        setTodos(todos.map((todo) => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
    }

    const editTask = (task, id) => {
        setTodos(todos.map((todo) => todo.id === id ? {...todo,task, isEditing : !todo.isEditing} : todo))
    }

    return(
        <div className={styles.todoWrapper} >
            <h1>Anotações!</h1>
            <TodoForm addTodo={addTodo} />
            {todos.map((todo) => (
                todo.isEditing ? (
                    <EditTodoForm editTodo={editTask} task={todo} key={todo.id} todo={todo} />
                ) : (
                    
                    <Todo 
                        key={todo.id} 
                        task={todo} 
                        toggleComplete={toggleComplete}
                        deleteTodo={deleteTodo}
                        editTodo={editTodo}
                    />
                    
                )
                
            ))}
        </div>
    )
}
