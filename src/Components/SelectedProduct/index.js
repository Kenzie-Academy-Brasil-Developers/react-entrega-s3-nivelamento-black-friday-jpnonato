export default function SelectedProduct({item, off}){
    
    console.log(item.name)
    return(
       <>
       {
           item === undefined ? <></> :
            <div>
                <h3>{item.name}</h3>
                <h4> Preço: R$ {item.price}</h4>
                <h4> Desconto: {`${off}%`}</h4>
                <h4> Valor do desconto: R$ {Math.round((item.price * off/100)*100)/100}</h4>
                <h4> valor final: R$ {Math.round((item.price - (item.price * off/100))*100)/100}</h4>
            </div>
       }
       </>
    )
}