import React from "react"
import "../../App.css"

function Products() {
  const [products. setProducts]=useState([])
  
  const fetchData = async () => {
   try {
      const res = await fetch(//the end point for your productions/aka backend)
      const data =  await res.json()
      
      setProducts(data)
   }catch(err) {
   console.log(err)
   }
  }
  
  
  //// here you can  map  the data that you fetch from the backend//
  return (
   <div>
    <h1 className="products"></h1>
    
    
//     {products.map((product) => (
//     <div key={product._id}>
//      <h2>{product.name}</h2>
//     </div>
//   ))}
    </div>
  )
}

export default Products
