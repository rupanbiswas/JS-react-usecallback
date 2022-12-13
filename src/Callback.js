import React, { useCallback, useState } from 'react'
import Todos from './Todos.js'

const Callback = () => {

    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    const increment = () => {
        setCount(count + 1);
    }

    const addTodo = useCallback(() => {
        setTodos((prev) => [...prev, `new Entry`]);
    }, [todos])
    return (
        <>
            <Todos todos={todos} addTodo={addTodo} />
            <hr />
            <div>
                Count: {count}
                <button onClick={increment}>+</button>
            </div>

        </>
    )
}

export default Callback