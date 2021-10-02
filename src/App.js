
import './App.css';
import { useState } from 'react'
import ProductList from './Components/ProductList'
import SelectedProduct from './Components/SelectedProduct';

function App() {

  const [products, _] = useState([
    { id: 1, name: 'Smart TV LED 50', price: 1999.00 },
    { id: 2, name: 'PlayStation 5', price: 12000.00 },
    { id: 3, name: 'Notebook Acer Nitro 5', price: 5109.72 },
    { id: 4, name: 'Headset s fio Logitech G935', price: 1359.00 },
    { id: 5, name: 'Tablet Samsung Galaxy Tab S7', price: 4844.05 },
    { id: 6, name: 'Cadeira Gamer Cruiser Preta FORTREK', price: 1215.16 },
    ]);
    const [selectedProducts, setSelectedProducts] = useState([])
    const [order, setOrder] = useState([])

    const promo = () => {

      const selectedId = Math.floor(Math.random() * (7 - 1)) + 1
      const selectedItem = products.filter((e) => e.id === selectedId)[0]
      const selectedOff = Math.floor(Math.random() * (91 - 40)) + 40

      selectedItem.offer = selectedOff
      setSelectedProducts([...selectedProducts, selectedItem])

    }

    const add = (id) => {

      const elt = selectedProducts.find((e) => e.id === id)
      setOrder([...order, elt])
      
    }
    
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <button onClick={promo}>gerar promoção</button>
        </section>
        <section>
          <h2>
            Ofertas em promoção:
          </h2>
          <ProductList list={selectedProducts}  add={add}/>
          {console.log(selectedProducts)}
        </section>
        <section>
          {/* <h2>
            Todas as Ofertas:
          </h2>
        <ProductList list={products}  add={add} off={0}/> */}
        </section>
        <section>
          <h2>
            Carrinho:
          </h2>
          {
            order.map((elt) => <SelectedProduct item={elt}  off={elt.offer}/>)
          }
        </section>
        <section>
          <p>Valor total: R$ {Math.round(order.reduce((s,a) => a.price - (a.price * a.offer/100) + s,0)*100)/100}</p>
        </section>
      </header>
    </div>
  );
}

export default App;
