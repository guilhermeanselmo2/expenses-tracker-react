import Expense from "./components/Expense";

function App() {
  return (
    <div>
      <h1>Meus gastos</h1>
      <Expense title="gasto 1" />
      <Expense title="gasto 2" />
      <Expense title="gasto 3" />
    </div>
  );
}

export default App;
