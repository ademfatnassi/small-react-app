// import React, {Component} from 'react';
import React from 'react';
// import ReactDOM from 'react-dom';
// import logo from './logo.svg';
import './App.css';
// import Parent from './components/Parent';
// import Events from './components/Events';
// import Todo from "./components/Todo";
// import Style from './components/Style';
import LifeCycle from '../components/LifeCycle'

// class App extends React.Component {
//   //constructor
//   constructor(props) {
//     super(props);
//     // this.state = {
//     //   name: "Formalab",
//     //   renderF: true,
//     //   counter: 0
//     // }
//     this.state = {
//       users: [{
//         name: "Foullen",
//         email: "FoullenFoulleni@gmail.com",
//         password: "foullen007",
//         isAdmin: true,
//         skills: ['Eating when sleeping', 'jump high']
//       }, {
//         name: "Flen",
//         email: "FlenFleni@gmail.com",
//         password: "flen007",
//         isAdmin: false,
//         skills: ['dance']
//       }]
//     }

//   }

//   AddUser = () => {
//     this.setState((prevState) => {
//       let user = {
//         name: "X AE A-XII",
//         email: "X-AE-A-XII@gmail.com",
//         password: "X-AE-A-XII",
//         isAdmin: false,
//         skills: ['Eating when sleeping', 'jump high']
//       }
//       prevState.users.push(user)
//       return { users: prevState.users };
//     })
//   }

//   UpdateUserByName = () => {
//     this.setState((prevState) => {
//       let userName = "Flen";
//       let x = this.state.users.find((value, index, array) => { return value.name === userName })
//       if (x) {
//         x.isAdmin = !x.isAdmin;
//         // console.log(x);
//         x.skills.pop();
//         // console.log(">", x);
//         this.AfficherUsers()
//         return { users: prevState.users };
//       } else {

//       }

//     })
//   }

//   AfficherUsers = () => {


//     const users = this.state.users.map((user) => <h3 key={user.name}>{user.name} - {user.email}- Role: {user.isAdmin ? "Admin" : "user"}</h3>);
//     // console.log(users);
//     ReactDOM.render(users, document.getElementById('users'))
//     // return users;

//   }


//   AfficherUserByName = () => {


//     const users = this.state.users.map((user) => <h3 key={user.name}>{user.name}</h3>);
//     // console.log(users);
//     ReactDOM.render(users, document.getElementById('users'))
//     // return users;

//   }

//   EffacerUsers = () => {
//     this.setState(() => { this.AfficherUsers(); return { users: [] } });
//   }
//   // incr = () => {
//   //   this.setState((prevState) => {
//   //     return {
//   //       counter: prevState.counter + 1
//   //     }
//   //   }
//   //   )
//   // }

//   // incrFive = () => {
//   //   this.incr();
//   //   this.incr();
//   //   this.incr();
//   //   this.incr();
//   //   this.incr();
//   // }
//   //? affichage ..
//   render() {
//     // const users = this.state.users.map((user) => <h3>{user.name}</h3>);
//     return (
//       // <div className="App">
//       //   <h1>{this.state.name} - {this.props.position}</h1>
//       //   <h1>Counter: {this.state.counter}</h1>
//       //   <button onClick={this.incrFive} >Click me!</button>
//       // </div>
//       <div className="App">
//         {
//           <div id="users">{}</div>
//         }
//         {
//           <h1>Total Users: {this.state.users.length !== 0 ? this.state.users.length : "No users ☺"}</h1>
//         }
//         {
//           <button onClick={this.AddUser} >Add User</button>
//         }
//         {
//           <button onClick={this.UpdateUserByName} >UpdateUserByName</button>
//         }
//         {
//           <button onClick={this.AfficherUsers} >AfficherUsers</button>
//         }
//         {
//           <button onClick={this.AfficherUserByName} >AfficherUserByName</button>
//         }
//         {
//           <button onClick={this.EffacerUsers} >EffacerUsers</button>
//         }
//       </div>
//     )
//   }
// }
function App() {
  return (
    // <Parent />
    <div className="App">
      {/* <Events /> */}
      {/* <Todo /> */}
      {/* <Style /> */}
      <LifeCycle />
    </div>

  )
}

export default App;
// export { App as default}

/**
 * objet state : user{Name, Email, Password, IsAdmin:Boolean, skills[]}
 *  functions: AddUser(), UpdateUserByName(), AfficherUsers(), AfficherUserByName(), isAdmin()
 * ! affichage: map
 * ! addUser: setState
 */