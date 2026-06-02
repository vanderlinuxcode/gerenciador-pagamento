import { usePayments } from "../hooks/usePayments";
import PaymentForm from "../components/PaymentForm";
import PaymentList from "../components/PaymentList";

export default function Home() {
  const { payments, addPayment, removePayment, togglePaid } = usePayments();

  return (
    <div className="container">
      <h2>Painel de Pagamentos</h2>

      <PaymentForm onAdd={addPayment} />

      <PaymentList
        payments={payments}
        onDelete={removePayment}
        onToggle={togglePaid}
      />
    </div>
  );
}