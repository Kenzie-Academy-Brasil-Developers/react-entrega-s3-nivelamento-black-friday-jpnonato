
import Product from '../Product'

export default function ProductList({list, add}){

    return(
       <>
       <div>
            {
                list.map((elt) => <Product item={elt} func={add} />)
            }
       </div>
       </>
    )
}