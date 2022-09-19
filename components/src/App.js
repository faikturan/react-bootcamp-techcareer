import './App.css';
import User from "./components/User";

const friends = [
  {
    id: 1,
    name: "Mehmet"
  },
  {
    id: 2,
    name: "Ayşe"
  },
  {
    id: 3,
    name: "Fatih"
  }

]

function App() {
  return (
    <>
    <User
    name ="Faik"
    surname="Turan"
    age={44}
    isLoggedIn={true}
    friends={friends}
    address= {{
      title:"Ataşehir / İstanbul",
      zip:34755
    }} />
    </>
  );
}

export default App;
