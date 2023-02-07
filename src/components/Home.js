import porductList from '../productList.json';
import { useDispatch, useSelector } from 'react-redux';
import {addToCart,removeFromCart} from '../redux/CartSlice'

import './Home.css';
function Home(){
  const dispatch = useDispatch();
  // const {cartProductIds} = useSelector(state => state.cart)
  // const state = useSelector(state => state)
  const {cartProductIds} = useSelector(state => state.cart);
  console.log(cartProductIds);
  // console.log(state);
  return (
    <div className='boxHome'>
     {porductList.products.map((product) => {
      return (
        <figure key={product.id}>
          <img src={product.imageUrl} alt={product.name} />
          <figcaption>
            <dl>
              <dt>{product.name}</dt>
              <dd>{product.price}</dd>
              <dd>
                { !cartProductIds.includes(product.id) && (<button type="button"
                  onClick = {
                    () => {dispatch(addToCart(product.id))}
                  }>추가</button>)}
               {cartProductIds.includes(product.id)  && (<button type="button"
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