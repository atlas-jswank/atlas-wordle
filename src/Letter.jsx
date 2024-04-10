export default function Letter({ value, state }) {
  return (
    <div type="text" className={`letter ${state ? state : ""}`}>
      {value}
    </div>
  );
}
