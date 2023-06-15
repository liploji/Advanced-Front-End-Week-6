export default function Contact(props) {
  return (
    <div className="App">
      <h1>Contact</h1>
      <button onClick={() => props.navigate("Home")}>Go home</button>
    </div>
  );
}
