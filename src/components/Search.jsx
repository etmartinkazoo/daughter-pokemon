import { useState } from "react";

export default function App() {
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("typing");
  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("Submitting");
    try {
      await submitForm(query);
      setStatus("Success");
    } catch (error) {
      setStatus("Typing");
      setError(error);
    }
  }

  function handleTextareaChange(e) {
    setQuery(e.target.value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={query}
        onChange={handleTextareaChange}
        disabled={status === "Submitting"}
        className="mx-2 mt-3 rounded-md px-6 py-3 bg-slate-100"
        placeholder="Search..."
      />
      <button disabled={query.length === 0 || status === "Submitting"} className="">
        Search
      </button>
      {error !== null && <p className="Error">{error.message}</p>}
    </form>
  );
}
