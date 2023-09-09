import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../../Store/store";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();


  console.log("cart", cart);
  let tbody = cart.map((item, idx) => (
    <tr key={idx}>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.count}</td>
      <td>
        <Button variant="primary" onClick={()=> {
            dispatch(changeName())
        }}>+</Button>
      </td>
    </tr>
  ));

  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>{tbody}</tbody>
      </Table>
    </>
  );
}

export default Cart;
