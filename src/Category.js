import { Component } from "react";

export default class Category extends Component
{
  save=(event)=>{
    event.preventDefault()
    var ob ={
      cate_name: this.namebox.value
    }
   
    fetch("http://apps.codebetter.in:8082/emall/api/category/save",{
      method : 'POST',
      headers:{
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify(ob)
    }).then(response=>response.json()).then(data=>{
      if(data.status){
        this.props.addCategory(data.category)
      }
    })
  }
 
    render()
    {
        return <>
          <h1 className="text-success">Category Page</h1>
          <hr className="tm-hr-primary"/>
          <form onSubmit={this.save}>
            <div className="row mt-3">
              <div className="col-xl-6 col-lg-6">
                <input type="text" ref={ob=>this.namebox=ob} className="form-control" placeholder="Category Name" required/>
              </div>
              <div className="col-xl-6 col-lg-6">
                <button className="btn btn-success">Save Category</button>

               
              </div>
            </div>
          </form>

          <table className="table mt-3">
            <thead>
              <tr>
                <th>S. No.</th>
                <th>Category Name</th>
              </tr>
            </thead>
            <tbody>
              {this.props.categories.map((ob,index)=><tr>
                  <td>{index+1}</td>
                  <td>{ob.cate_name}</td>
              </tr>)}
            </tbody>
          </table> 
        </>
    }
}