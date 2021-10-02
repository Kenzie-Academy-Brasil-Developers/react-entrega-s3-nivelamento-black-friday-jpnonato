export default function Product({item, func}){
    
    return(
       <>
       <div>
            <h3>{item.name}</h3>
            <h4> Preço: R$ {item.price}</h4>
            <h4> Desconto: {`${item.offer}%`}</h4>
            <h4> Valor do desconto: R$ {Math.round((item.price * item.offer/100)*100)/100}</h4>
            <h4> valor final: R$ {Math.round((item.price - (item.price * item.offer/100))*100)/100}</h4>
            <button onClick={() => func(item.id)}>Adicionar ao carrinho</button>
       </div>
       </>
    )
}