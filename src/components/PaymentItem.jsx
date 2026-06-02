export default function PaymentItem({ payment, onDelete, onToggle }) {
  return (
    <div className={`item ${payment.paid ? "paid" : ""}`}>
      <span>{payment.title}</span>
      <span>R$ {payment.amount}</span>

      <button onClick={() => onToggle(payment.id)}>
        {payment.paid ? "Pago" : "Pendente"}
      </button>

      <button onClick={() => onDelete(payment.id)}>
        Excluir
      </button>
    </div>
  );
}