import { Component } from "react";

export default class Brand extends Component
{
  save=(event)=>{
    event.preventDefault()
    var ob ={
      brand_name: this.namebox.value
    }
   
    fetch("http://apps.codebetter.in:8082/emall/api/brand/save",{
      method : 'POST',
      headers:{
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify(ob)
    }).then(response=>response.json()).then(data=>{
      if(data.status){
        this.props.addBrand(data.brand)
      }
    })
  }

    render()
    {
        return <>
          <h1 className="text-success">Brand Page</h1>
          <hr className="tm-hr-primary"/>

          <form onSubmit={this.save}>
            <div className="row mt-3"> 
              <div className="col-xl-6 col-lg-6">
                <input type="text" className="form-control" placeholder="Brand Name" ref={ob=>this.namebox=ob} required/>
              </div>
              <div className="col-xl-6 col-lg-6">
                <button className="btn btn-success">Save Brand</button>
                &nbsp;&nbsp;

                {this.props.brands.length==0?<button className="btn btn-primary" disabled>
                  <span className="spinner-grow spinner-grow-sm"></span>
                  &nbsp; Loading..
                </button>:""}
              </div>
            </div>
          </form>

          <table className="table mt-3">
            <thead>
              <tr>
                <th>S. No.</th>
                <th>Brand Name</th>
              </tr>
            </thead>
            <tbody>
            {this.props.brands.map((ob,index)=><tr>
                  <td>{index+1}</td>
                  <td>{ob.brand_name}</td>
              </tr>)}
            </tbody>
          </table> 
        </>
    }
}