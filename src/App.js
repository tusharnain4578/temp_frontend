import { ReactDOM, useState } from "react";
import $ from "jquery";

function App() {

  const [name, setName] = useState("");

  const [user, setUser] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    $.ajax({
      url: "/ck",
      xhrFields: {
        withCredentials: true
      },
      method: "POST",
      data: {
        name: name
      },
      success: function (data) {
        if (data) {
          console.log(data);
          setUser(data)
        } else {
          console.log("something wrong with received data");
        }
      }
    })
  }

  if (user == "") {
    return (
      <>
        <form method="POST" onSubmit={handleSubmit}>
          <input type="text" name="name" onChange={handleName} />
          <button name="submit" value="submit"> Submit </button>
        </form>

      </>
    );
  }


  return (
    <>
      <h1>{user}</h1>

    </>
  );


}

export default App;
