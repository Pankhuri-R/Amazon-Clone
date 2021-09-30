import React, { useEffect, useState } from "react";
import { db } from "./firebase.js";
import "./Orders.js";
import { useStateValue } from "./StateProvider.js";

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setorders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          setorders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setorders([]);
    }
  }, []);

  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders__order">
        {orders?.map((order) => {
          <Order order={order} />;
        })}
      </div>
    </div>
  );
}

export default Orders;
