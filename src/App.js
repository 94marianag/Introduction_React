import React from "react";
import Formulario from "./components/Formulario";
import "./components/Formulario.css";
import "./index.css";
import Headers from "./components/Headers";
import axios from "axios";
import PostsList from "./components/PostsList";

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      user: {
        userName: "Mariana",
        password: "password"

      },
      error: "", //
      posts:[]
    };

    this.logout = this.logout.bind(this);
    console.log('Mount phase: constructor')
    this.signin = this.signin.bind(this);
  }

  componentDidMount(){
   axios.get('https://jsonplaceholder.typicode.com/posts')
   .then((result) => {
     this.setState({
       posts: result.data
     });
   });
  }
    
  logout(event){
    event.preventDefault();
    this.setState({user: {
      userName: "",
      password: ""
    }});
  }

  signin(event){
    event.preventDefault();
    this.setState({user: {
      userName: "WemanConnect",
      password: "Mar1213"
    }});
  }
  componentDidUpdate(){
    console.log('Updating phase: constructor');
  }
  componentWillUnmount(){
    console.log('Unmounting phase: constructor')
  }

  static getDrivedStateFromError(error){
    //Actualiza el state asi el siguiente renderizado lo mostrara con la U
    return {error: error};
  }

  componentDidCatch(error, info){
    console.log('Error phase '+ error)
  }

  render(){
    console.log(this.state.posts)
    if(this.state.user.userName !== ""){
      return (
        <div className="container">
        <Headers 
        user = {this.state.user.userName}
        logout = {this.logout}
        signin = {this.signin}
        />
        
        <PostsList 
      posts={this.state.posts}
        />
        </div>
      )
    }
  else{
    return (
      <div className="container">
        <Headers 
        user = {this.state.user.userName}
        logout = {this.logout}
        signin = {this.signin}
        />

        <Formulario 
        username={this.state.user.userName} 
        password={this.state.user.password}/>
    
      <footer> By WemanConnect</footer>
    </div>
    )}
  }
}