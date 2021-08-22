import './NewProduct.css';

function NewProduct() {
    return (
        <div className="newProduct">
            <h1 className="newProductTitle">New Product</h1>
            <form className="newProductForm">
                <div className="newProductItem">
                    <label >Image</label>
                    <input type="file" className="newProductInput" />
                </div>
                <div className="newProductItem">
                    <label >Product</label>
                    <input type="text" className="newProductInput" placeholder="Apple Airpods" />
                </div>
                <div className="newProductItem">
                    <label >Stock</label>
                    <input type="text" className="newProductInput" placeholder="121" />
                </div>
                
                <div className="newProductItem">
                    <label>Active</label>
                    <select name="active" id="active" className="newProductSelect">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button className="newProductButton">Create</button>
            </form>
        </div>
    )
}

export default NewProduct
