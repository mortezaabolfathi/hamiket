import React, { useEffect, useState, useParams } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
const Product = () => {
  const [product, setProduct] = useState();
  const [totalPage, setTotalPage] = useState(0);

  // const {id}=useParams()

  const getData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos?_start=0&_limit=20")
      .then((res) => {
        setProduct(res.data);
      });
  };

  useEffect(() => {
    getData();
  }, []);
//   console.log(product);
    
  return (
    <div>
      <Container>
        {product===undefined? 
        <h3>product is not defined</h3>
        :
        <table class="table mt-5">
          <thead class="table-dark">
            <tr>
              <th scope="col">شماره کالا</th>
              <th scope="col">نام</th>
              <th scope="col">عکس</th>
              <th scope="col">ویرایش محصول</th>
            </tr>
          </thead>
          <tbody>
                {
                    product.map((item)=>{
                        return(
                            <tr>
                                <td>{item.id} </td>
                                <td>{item.title}</td>
                                <td><img src={item.thumbnailUrl} alt="" /></td>
                                <td><button>ویرایش کالا</button></td>
                            </tr>
                            )
                    })
                }
          </tbody>
        </table>
        }
       
      </Container>
    </div>
  );
};

export default Product;
