import { useState } from "react";
import data from "./data.js";
import List from "./list.jsx";

function App() {
  const [users, setUsers] = useState(data);

  return (
    <main>
      <section className="container">
        <h3>{users.length} Birthdays Today</h3>
        <List users={users} />
        <button
          type="button"
          className="btn btn-block"
          onClick={() => {
            setUsers([]);
          }}
        >
          Clear all
        </button>
      </section>
    </main>
  );
}

export default App;
