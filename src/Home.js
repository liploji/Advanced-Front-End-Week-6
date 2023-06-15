export default function Home(props) {
  return (
    <div className="App">
      <h1>Home</h1>
      <button onClick={() => props.navigate("Contact")}>Go to Contact</button>
    </div>
  );
}
