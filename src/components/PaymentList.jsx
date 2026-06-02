import PaymentItem from "./PaymentItem";
import "../styles/list.css";

export default function PaymentList({ payments, onDelete, onToggle }) {
  return (
    <div className="list">
      {payments.map(payment => (
        <PaymentItem
          key={payment.id}
          payment={payment}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}