import './Product.css';
import { Link } from 'react-router-dom';
import Chart from '../Chart/Chart';
import {productData} from '../../dummyData';
import product from '../../image/avatar4.jpg'
import { Publish } from '@material-ui/icons';


function Product() {
    return (
        <div className="product">
            <div className="userTitleContainer">
                <h1 className="userTitle">Product</h1>
                <Link to="/newProduct">
                <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart data={productData} dataKey="Sales" title="Sales Performance" />
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src={product} alt="" className="productInfoImg" />
                        <span className="productName">Apple AirPods</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id:</span>
                            <span className="productInfoValue">123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Sales</span>
                            <span className="productInfoValue">$231</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">active</span>
                            <span className="productInfoValue">yes</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">in stock:</span>
                            <span className="productInfoValue">no</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label>Product Name</label>
                        <input type="text" placeholder="Apple Airpod" />
                        <label>In Stock</label>
                        <select name="inStock" id="idStock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <label>Active</label>
                        <select name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="productFormRight">
                        <div className="userUpdateUpload">
                        <img src={product} alt="" className="userUpdateImg" />
                        <label htmlFor="file">
                        <Publish className="userUpdateIcon" />
                        </label>
                        <input type="file" id="file" style={{display:"none"}} />
                    </div>
                    <button className="userUpdateButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Product
