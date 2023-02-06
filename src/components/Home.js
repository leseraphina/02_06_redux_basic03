import porductList from '../productList.json';

import './Home.css';
function Home(){
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
                <button type="button">추가</button>
                <button type="button">삭제</button>
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