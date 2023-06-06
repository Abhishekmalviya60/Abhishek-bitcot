import { Component } from "react";

export default class Home extends Component
{
    render()
    {
        return <>
          <h1 className="text-success">Home Page</h1>
          <hr className="tm-hr-primary"/>
        
          <img src="img/logo.png" height={300}/>
        </>
    }
}