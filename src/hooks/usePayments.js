import { useState, useEffect } from "react";

export function usePayments() {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("payments");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (stored) setPayments(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("payments", JSON.stringify(payments));
  }, [payments]);

  function addPayment(payment) {
    setPayments([...payments, { ...payment, id: Date.now() }]);
  }

  function removePayment(id) {
    setPayments(payments.filter(p => p.id !== id));
  }

  function togglePaid(id) {
    setPayments(
      payments.map(p =>
        p.id === id ? { ...p, paid: !p.paid } : p
      )
    );
  }

  return {
    payments,
    addPayment,
    removePayment,
    togglePaid
  };
}