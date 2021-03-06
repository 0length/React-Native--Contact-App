import React, { useCallback, memo } from 'react'
import Item from './Item'
import { People } from './App'

const List = ({peoples, onPress})=> {
// const  = props
// console.log(Object.values(peoples.data))


    const handleToItem = 
        // useCallback(
            (item, idx) =>
            <Item key ={idx} {...{idx,...item, onPress}} />
        // , [])
    return Object.values(peoples.data).slice(0).map(handleToItem)
}

export default memo(List)