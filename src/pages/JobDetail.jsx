import React from 'react'
import { useParams } from 'react-router-dom'

export default function JobDetail() {

    let {id} = useParams()
    return (
        <div>
            ürün: {id}
        </div>
    )
}
