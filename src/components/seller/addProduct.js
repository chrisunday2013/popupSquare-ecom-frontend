import SellerSidebar from "./setterSiderbar";


function AddProducts(){
    
    return (
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                <SellerSidebar/>
                </aside>
                <section className="col-md-9 col-12 mb-2">
                   <div className="card">    
                      <h5 className="card-header">Add Products</h5>
                      <div className="card-body">
                           
                            <div className="mb-3">
                                    <label for="category" className="form-label">Category</label>
                                    <select className="form-control">
                                        <option>Electonics</option>
                                        <option>Utensils</option>
                                        <option>Wears</option>
                                    </select>
                            </div>
                            <div className="mb-3">
                                    <label for="title" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="title"/>
                            </div>
                            
                            <div className="mb-3">
                                    <label for="price" className="form-label">Price</label>
                                    <input type="number" className="form-control" id="price"/>
                            </div>
                            <div className="mb-3">
                                    <label for="description" className="form-label">Description</label>
                                    <textarea rows={8} className="form-control" id="description"></textarea>
                            </div>
                        
                            <div className="mb-3">
                                <div className="mb-3">
                                    <label for="productImg" className="form-label">Product Images</label>
                                    <input type="file" className="form-control" id="productImg"/>
                                </div>
                            </div>
                            <button  className="btn btn-primary">Submit</button>

                      </div>      
                   </div>      
                </section>
            </div>
        </div>
    )
}

export default AddProducts;