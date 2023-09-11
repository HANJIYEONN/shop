import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeName, changeAge } from "../../Store/userSlice";
import { addCount } from "../../Store/cartSlice";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  let tbody = cart.map((item, idx) => (
    <tr key={idx}>
      <td>{item.id}</td>
      <td>{item.title}</td>
      <td>{item.count}</td>
      <td>
        <Button
          variant="primary"
          onClick={() => {
            dispatch(addCount(item.id));
          }}
        >
          +
        </Button>
      </td>
    </tr>
  ));

  return (
    <>
      <h6>
        {user.name} {user.age} 의 장바구니
      </h6>
      <Button onClick={() => dispatch(changeAge(10))}>버튼</Button>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>펭귄명</th>
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
