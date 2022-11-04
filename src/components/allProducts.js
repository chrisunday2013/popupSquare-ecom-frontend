import logo from '../logo.svg';
import SingleProduct from './SingleProduct';

function AllProductS(){
    return(
         <div className="container mt-4">
           <h3 className="mb-4"> All Products</h3> 
           <div className="row mb-4 ">
                <SingleProduct title="Electronics "/>
                <SingleProduct title="Utentils "/>
                <SingleProduct title="Shoes"/>
                <SingleProduct title="Bags"/>
                <SingleProduct title="Cars "/>
                <SingleProduct title="Toys"/>
                <SingleProduct title="Clothes"/>
                <SingleProduct title="Food Products"/>
           </div>
           
             {/* {pagination start} */}
             <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <li class="page-item">
                        <a class="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                        <a class="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                        </li>
                    </ul>
                </nav>
             {/* {end pagination} */}
         </div>
   
    )
}

export default AllProductS;