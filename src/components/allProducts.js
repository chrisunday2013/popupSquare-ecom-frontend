import logo from '../logo.svg';
import SingleProduct from './SingleProduct';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// const baseurl='http://127.0.0.1:8000/api/products/'

function AllProductS(){
    const baseUrl = 'http://127.0.0.1:8000/api';
    const [products, setProducts] = useState([]);
    const [totalResult, setTotalResults] = useState(0)
    


    // useEffect(()=>{
    //     try{
    //         axios.get(baseurl)
    //         .then((res)=>{
    //             setProducts(res.data.results)
    //         })
    //     }catch(error){
    //         console.log(error)
    //     }
    // },[]);


    useEffect(()=> {
        fetchData(baseUrl+'/products');
    },[]);

    function fetchData(baseurl){
        fetch(baseurl)
       .then((response) => response.json())
       .then((data) => {
                  setProducts(data.results)
                  setTotalResults(data.count);
        });
    }

    function changeUrl(baseurl){
        fetchData(baseurl);
    }
    
    var links=[];
    var limit=1;
    var totalLinks=totalResult/limit;
    for(let i=1; i<=totalLinks; i++){
        links.push(<li className="page-item"><Link onClick={()=>changeUrl(baseUrl+`/products/?page=${i}`)} to={`/products/?page=${i}`} className="page-link">{i}</Link></li>)
    }
    
    return(
         <div className="container mt-4">
           <h3 className="mb-4"> All Products</h3> 
           <div className="row mb-4 ">
                {products.map((product, index)=>
                <SingleProduct product={product}/>
                )}
           </div>
           
             {/* {pagination start} */}
             <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        {links}
                    </ul>
                </nav>
             {/* {end pagination} */}
         </div>
   
    )
}

export default AllProductS;