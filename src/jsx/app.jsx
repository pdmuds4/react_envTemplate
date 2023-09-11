import Getpost from "../getpost";

function App() {
  const post = Getpost("/data");
  if (!post) return null;
  
  return (
    <div>
      App1
    </div>
  );
}

export default App;
