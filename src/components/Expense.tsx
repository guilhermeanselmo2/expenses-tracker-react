function Expense(props: { title: string }) {
  function deleteExpense() {}
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteExpense}>
          Remover
        </button>
      </div>
    </div>
  );
}

export default Expense;
