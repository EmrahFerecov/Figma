import React, { useEffect, useState } from 'react'

function Kart() {
    const [inform, setInform] = useState([])


    async function getProducts() {
        const data = await fetch("https://northwind.vercel.app/api/products")
        const res = await data.json()
        setInform(res)
    }

    useEffect(() => {
        getProducts()
    }, [])
    
  return (
    <>
    |<div>
        {
            inform.map((item)=>(
                <div>
                    <h1>{item.quantityPerUnit}</h1>
                </div>
            ))
        }
    </div>

    </>
  )
}

export default Kart