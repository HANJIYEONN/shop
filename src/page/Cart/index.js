import { Button, Table } from "react-bootstrap";
import { useSelector } from "react-redux";

function Cart() {
  const cart = useSelector((state) => state.cart);

  console.log("cart", cart);
  let tbody = cart.map((item, idx) => (
    <tr key={idx}>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.count}</td>
      <td>
        <Button variant="primary">변경</Button>
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
