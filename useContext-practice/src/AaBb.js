import React, { useContext } from 'react'
import CounterContext from './CounterContext'

const AaBb = () => {
    const [ count ] = useContext(CounterContext)
    return (
        <div>{count}</div>
    )
}

export default AaBb