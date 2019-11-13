import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Auth, API, graphqlOperation } from "aws-amplify";
import awsconfig from "./aws-exports";
import { withAuthenticator } from "aws-amplify-react";
import * as queries from "./graphql/queries";
Auth.configure(awsconfig);
API.configure(awsconfig);

function App() {
  const allTodos = API.graphql(graphqlOperation(queries.listTodos));
  console.log(allTodos);

  const oneTodo = API.graphql(
    graphqlOperation(queries.getTodo, {
      id: "33611216-cde4-4814-b358-a275573feac7"
    })
  );
  console.log(oneTodo);

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
