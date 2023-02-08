import porductList from '../productList.json';
import { useDispatch, useSelector } from 'react-redux';
import {addToCart,removeFromCart} from '../redux/CartSlice';
import {fetchAllProducts} from '../redux/ProductList'

import './Home.css';
import { useEffect } from 'react';

function Home(){
  const dispatch = useDispatch();
 const state = useSelector(state => state);
 const {cart,products} = state
  // const {cartProductIds} = useSelector(state => state.cart);
useEffect(() => {
  dispatch(fetchAllProducts('./productList.json/products'))
},[dispatch])
  return (
    <div className='boxHome'>
      {/* products.data? true였을 때의 작업 : error 연결 */}
     {products.data?.map((product) => {
      return (
        <figure key={product.id}>
          <img src={product.imageUrl} alt={product.name} />
          <figcaption>
            <dl>
              <dt>{product.name}</dt>
              <dd>{product.price}</dd>
              <dd>
                { !cart.cartProductIds.includes(product.id) && (<button type="button"
                  onClick = {
                    () => {dispatch(addToCart(product.id))}
                  }>추가</button>)}
               {cart.cartProductIds.includes(product.id)  && (<button type="button"
                  onClick={
                    () => {dispatch(removeFromCart(product.id))}
                  }>삭제</button>)}
              </dd>
            </dl>
          </figcaption>
        </figure>
      )
     })}
      </div>
  )
}

export default Home;