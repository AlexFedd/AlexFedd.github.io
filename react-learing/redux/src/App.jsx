import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
function App() {
  const [state, setState] = useState(0);
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customers.customers);
  const addCash = () => {
    dispatch({ type: "ADD_CASH", payload: Number(state) });
  };

  const getCash = () => {
    dispatch({ type: "GET_CASH", payload: Number(state) });
  };

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    };
    dispatch({ type: "ADD_CUSTOMER", payload: customer });
  };
  const removeCustomer = (customer) => {
    dispatch({type: "REMOVE_CUSTOMER", payload: customer})
  }
  return (
    <>
      <h1>{cash}</h1>
      <input type="text" onChange={() => setState(event.target.value)} />
      <div className="buttons">
        <button onClick={() => addCash()}>Пополнить деньги</button>
        <button onClick={() => getCash()}>Снять деньги</button>
        <button onClick={() => addCustomer(state)}>Добавить клиента</button>
      </div>
      <div>
        {customers.length > 0 ? (
          <div>
            {customers.map((customer) => {
              return (
                <div onClick={() => {removeCustomer(customer.id)}} key={customer.id}>
                  <h2>{customer.id}</h2>
                  <span>{customer.name}</span>
                </div>
              );
            })}
          </div>
        ) : (
          <div>No customers</div>
        )}
      </div>
    </>
  );
}

export default App;
