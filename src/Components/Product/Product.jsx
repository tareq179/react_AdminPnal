import './Product.css';
import { Link } from 'react-router-dom';


function Product() {
    return (
        <div className="product">
            <div className="userTitleContainer">
                <h1 className="userTitle">Product</h1>
                <Link to="/newUser">
                <button className="userAddButton">Create</button>
                </Link>
            </div>
        </div>
    )
}

export default Product
