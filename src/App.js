import { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Category from './Category';
import Brand from './Brand';
import Product from "./Product";

export default class App extends Component
{
  constructor(){
    super()
    this.state = {
      categories : [], 
      brands : [],
      products:[]
    }
  }
  componentDidMount(){
    fetch("http://apps.codebetter.in:8082/emall/api/category/list")
    .then(response=>response.json())
    .then(data=>{this.setState({categories:data})
  
    fetch("http://apps.codebetter.in:8082/emall/api/brand/list")
    .then(response=>response.json())
    .then(data=>{this.setState({brands:data})

    fetch("http://apps.codebetter.in:8082/emall/api/product/list")
    .then(response=>response.json())
    .then(data=>{this.setState({products:data})
    })})})
  }

  addCategory=(ob)=>{
    this.setState({categories:[...this.state.categories,ob]})
  }

  addBrand=(ob)=>{
    this.setState({brands:[...this.state.brands,ob]})
  }
  render()
  {
    return <>
    <Header/>
    <div className="container-fluid">
        <main className="tm-main">
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/category" element={<Category categories={this.state.categories} addCategory={this.addCategory}/>}/>
              <Route path="/brand" element={<Brand brands={this.state.brands} addBrand={this.addBrand}/>}/>
              <Route path="/product" element={<Product categories={this.state.categories} brands={this.state.brands} products={this.state.products} />}/>
          </Routes>
        </main>
    </div>
    </>
  }
}