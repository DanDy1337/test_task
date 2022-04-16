import React, {FC} from 'react'
import { deflateSync } from 'zlib'
import {ITodo} from '../types/types'

interface ItemsTodo {
    items: ITodo[]
}

const TodosList: FC<ItemsTodo> = (items) => {

    return(
        
        <div>
            {items.items.map(todo => 
                <div style={{padding: '15px', border:'1px solid gray'}}>{todo.id} {todo.title} {todo.completed}</div>
                // {items.id}. {items.title} проживает в городе {items.completed}
            )}
            
        </div>   
    )
}

export default TodosList;