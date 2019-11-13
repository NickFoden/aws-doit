import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Auth, API, graphqlOperation } from "aws-amplify";
import awsconfig from "./aws-exports";
import { withAuthenticator } from "aws-amplify-react";
import * as queries from "./graphql/queries";
import * as mutations from "./graphql/mutations";
Auth.configure(awsconfig);
API.configure(awsconfig);

// function updateTodo(todo, newDesc){
//   todo['description'] =  newDesc

//   API.graphql(
//     graphqlOperation(mutations.updateTodo, { input: todo })
//   );
// }

// function deleteTodo(todo){
//   API.graphql(graphqlOperation(mutations.deleteTodo, {input: {"id": todo["id"]}}))
// }

function App() {
  // const allTodos = API.graphql(graphqlOperation(queries.listTodos));
  // console.log(allTodos);

  // const oneTodo = API.graphql(
  //   graphqlOperation(queries.getTodo, {
  //     id: "33611216-cde4-4814-b358-a275573feac7"
  //   })
  // );
  // console.log(oneTodo);

  // Auth.currentAuthenticatedUser({
  //   bypassCache: false
  // })
  //   .then(user => {
  //     console.log("user" + JSON.stringify(user));
  //     const aTodo = {
  //       name: user["username"],
  //       description: "Fly to the tropics"
  //     };
  //     const newTodo = API.graphql(
  //       graphqlOperation(mutations.createTodo, { input: aTodo })
  //     );
  //   })
  //   .catch(e => console.log(e));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>New Update</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default withAuthenticator(App, { includeGreetings: true });
// export default App;
