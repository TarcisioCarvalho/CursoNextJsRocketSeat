interface ProductProps{
    params:{
        data:string[],
    }
}


export default function Product(props:ProductProps) {
    const [productId,size,color] = props.params.data;
    return (
     <h1>
       <p>Product :  Product : {productId}</p>
       <p>Size: {size}</p>
       <p>Color: {color}</p>
    </h1>
    )
  }