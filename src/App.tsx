import React, { useEffect, useState } from 'react';
import { css } from '@emotion/css'
import Axios from 'axios';
const color = 'darkgreen'

type List = {
    count: any, 
    next: any, 
    previous: any,
    results: Array<any>
}

const App = () => {
    const [todo, setTodo] = useState<List>({
        count: '',
        next: '',
        previous: '',
        results: []
    })

    console.log(todo)

    useEffect(()=> {
        FetchTodos()
    }, [])


    async function FetchTodos(){
        try{
            const respon = await Axios.get<any>('https://pokeapi.co/api/v2/pokemon?_limit=10')
            // console.log(respon.data)
            setTodo(respon.data)
        } catch(e){
            alert(e)
        }
    }

    return(
        <div  
            className={
                css`
                background-color: hotpink;
                &:hover {
                color: ${color};
                }
            `}>
            {todo.results.map((any: any)=> {return(<div>{any.name + ' ' + any.url}</div>)})}
        </div>
    )
}

export default App;