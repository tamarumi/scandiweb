import React from 'react'
import { useProductPage } from '../hooks/useSingleProduct'


export default function ProductPage () {
    const {error, loading, data} = useProductPage(1)
    
    console.log({ 
        error, 
        loading, 
        data
    })
    return (<div> </div>)
}