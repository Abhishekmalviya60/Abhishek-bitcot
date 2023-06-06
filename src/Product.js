import { Component } from "react";

export default class Product extends Component
{
  save=(event)=>{
    event.preventDefault()
    var frmData= new FormData()
    frmData.append("prod_name",this.namebox.value);
    frmData.append("prod_price",this.pricebox.value);
    frmData.append("prod_cate",this.catebox.value);
    frmData.append("prod_brand",this.brandbox.value);
    frmData.append("prod_image",this.filebox.files[0]);

    fetch("http://apps.codebetter.in:8082/emall/api/product/save",{
      method: "POST",
      body: frmData
      }).then(response=>response.json()).then(data=>{
        if(data.status){
          this.props.addProduct(data.Product)
        }
      })
  }
    render()
    {
        return <>
          <h1 className="text-success">Product Page</h1>
          <hr className="tm-hr-primary"/>
          <form onSubmit={this.save}>
            <div className="row mt-3">
              <div className="col-xl-6 col-lg-6">
                <input type="text" className="form-control" placeholder="Product Name" ref={ob=>this.namebox=ob} required/>
              </div>
              <div className="col-xl-6 col-lg-6">
                <input type="number" className="form-control" placeholder="Product Price" ref={ob=>this.pricebox=ob} required/>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-xl-6 col-lg-6">
                <select className="form-control" ref={ob=>this.catebox=ob} required>
                  <option value=''>Choose Category</option>
                  {this.props.categories.map(ob=><option value={ob._id}>{ob.cate_name}</option>)}
                </select>  
              </div>
              <div className="col-xl-6 col-lg-6">
                <select className="form-control" ref={ob=>this.brandbox=ob} required>
                  <option value=''>Choose Brand</option>
                  {this.props.brands.map(ob=><option value={ob._id}>{ob.cate_name}</option>)}
                </select>    
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-xl-6 col-lg-6">
                <input type="file" className="form-control" ref={ob=>this.filebox=ob} required/>
              </div>
              <div className="col-xl-6 col-lg-6">
                <button className="btn btn-success">Save Product</button>

                &nbsp;&nbsp;

                {this.props.products.length==0?<button className="btn btn-primary" disabled>
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
                <th>Image</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Category</th>
                <th>Brand</th>
              </tr>
            </thead>
            <tbody>
              {this.props.products.map((ob,index)=><tr>
                <td>{index+1}</td>
                <td>
                  <img src={"data:image/png;base64,"+ ob.prod_image} height="200" width="200"/>
                </td>
                <td>{ob.prod_name}</td>
                <td>{ob.prod_price}</td>
                <td>{ob.prod_brand}</td>
              </tr>)}
              
            </tbody> 
          </table> 
        </>
    }
}