import css from "./TransactionHistory.module.css";
function TransactionHistory(items) {
  console.log(items.items);

  return (
    <table>
      <thead>
        <tr className={css.main}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.items.map((item) => (
          <tr key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default TransactionHistory;
