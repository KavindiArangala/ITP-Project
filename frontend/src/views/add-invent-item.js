import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import {Link, useHistory} from 'react-router-dom';
import './add-invent-item.css';
import { toast } from 'react-toastify';
import axios from 'axios';


function AddInventItem () {

  const [itemName, setItemName] = useState('');
  const [sku, setSku] = useState('');
  const [recieveDate, setDate] = useState('');
  const [category,setCategory] = useState('');
  const [condition, setCondition] = useState('');
  const [brand, setBrand] = useState('');
  const [initialPrice, setInitialPrice] = useState('');
  const [initialQuantity, setInitialQuantity] = useState('');
  const [totalPrice, setTotalPrice] = useState('');
  const [supplier, setSupplier] = useState('');

  const handleChangeItemName = (e) =>{
    setItemName(e.target.value)
  }
  const handleChangeSku = (e) =>{
    setSku(e.target.value)
  }
  const handleChangeDate = (e) =>{
    setDate(e.target.value)
  }
  const handleChangeCategory = (e) =>{
    setCategory(e.target.value)
  }
  const handleChangeCondition = (e) =>{
    setCondition(e.target.value)
  }
  const handleChangeBrand = (e) =>{
    setBrand(e.target.value)
  }
  const handleChangeInPrice = (e) =>{
    setInitialPrice(e.target.value)
  }
  const handleChangeInQty = (e) =>{
    setInitialQuantity(e.target.value)
  }
  const handleChangeTotalPrice = (e) =>{
    setTotalPrice(e.target.value)
  }
  const handleChangeSupplier = (e) =>{
    setSupplier(e.target.value)
  }

  const handleClick = () =>{
    console.log(itemName, sku, recieveDate, category, condition, brand,initialPrice, initialQuantity, totalPrice, supplier);

    const formData = new FormData
    formData.append('itemName',itemName)
    formData.append('sku',sku)
    formData.append('recieveDate',recieveDate)
    formData.append('category',category)
    formData.append('condition',condition)
    formData.append('brand',brand)
    formData.append('initialPrice',initialPrice)
    formData.append('initialQuantity',initialQuantity)
    formData.append('totalPrice',totalPrice)
    formData.append('supplier',supplier)

    axios.post(`http://localhost:5000/api/InventoryItems/addInventoryItem`,
    formData,{
      headers: {'Authorization': localStorage.getItem('token')}
    }
    )
    .then ((res) => {
      console.log(res.data)
    })
    .catch(err => {
      console.log(err,"err")
    })
  }

  const onSubmit = () =>{
    console.log(itemName, sku, recieveDate, category, condition, brand,initialPrice, initialQuantity, totalPrice, supplier);

    const formData = new FormData
    formData.append('itemName',itemName)
    formData.append('sku',sku)
    formData.append('recieveDate',recieveDate)
    formData.append('category',category)
    formData.append('condition',condition)
    formData.append('brand',brand)
    formData.append('initialPrice',initialPrice)
    formData.append('initialQuantity',initialQuantity)
    formData.append('totalPrice',totalPrice)
    formData.append('supplier',supplier)

    axios.post(`http://localhost:5000/api/InventoryItems/addInventoryItem`,
    formData,{
      headers: {'Authorization': localStorage.getItem('token')}
    }
    )
    .then ((res) => {
      console.log(res.data)
    })
    .catch(err => {
      console.log(err,"err")
    })
  }


  return (
    <div className="add-invent-item-container">
      <Helmet>
        <title>addInventItem </title>
        <meta property="og:title" content="addInventItem - exported project" />
      </Helmet>
      <div className="add-invent-item-add-newitems">
        <img
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a3d75bee-97df-4a92-b0a1-8a0f28cd7ef7/dabafbee-b394-48e6-9168-370ac05bf12f?org_if_sml=1329716"
          alt="blurredBackground133"
          className="add-invent-item-blurred-background"
        />
        <img
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a3d75bee-97df-4a92-b0a1-8a0f28cd7ef7/ae500804-fe8b-4626-a2a4-53db9935ceea?org_if_sml=1372"
          alt="Rectangle791527"
          className="add-invent-item-rectangle79"
        />
        <div className="add-invent-item-menubar">
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a3d75bee-97df-4a92-b0a1-8a0f28cd7ef7/6ea6a84e-6f3b-489f-8e99-43006a39afb8?org_if_sml=13208"
            alt="Rectangle3I134"
            className="add-invent-item-rectangle3"
          />
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a3d75bee-97df-4a92-b0a1-8a0f28cd7ef7/1be74da9-4ad9-4c50-a0dd-915a5d3a41d9?org_if_sml=18988"
            alt="PNGLogoimage1I134"
            className="add-invent-item-pn-logoimage1"
          />
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a3d75bee-97df-4a92-b0a1-8a0f28cd7ef7/e2d2e7af-d6a9-4e9c-88b7-20081c9098b3?org_if_sml=1706"
            alt="Rectangle10I134"
            className="add-invent-item-rectangle10"
          />
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a3d75bee-97df-4a92-b0a1-8a0f28cd7ef7/4e8c5b31-2af3-485a-b88f-fb38be079273?org_if_sml=1706"
            alt="Rectangle15I134"
            className="add-invent-item-rectangle15"
          />
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a3d75bee-97df-4a92-b0a1-8a0f28cd7ef7/0f290633-7151-49f3-be41-ee49f05dba3d?org_if_sml=1706"
            alt="Rectangle16I134"
            className="add-invent-item-rectangle16"
          />
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a3d75bee-97df-4a92-b0a1-8a0f28cd7ef7/553f2cdb-3536-4fb7-8391-196d7706bcc8?org_if_sml=1706"
            alt="Rectangle17I134"
            className="add-invent-item-rectangle17"
          />
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a3d75bee-97df-4a92-b0a1-8a0f28cd7ef7/2dac9eaf-1082-4c6d-bbde-38b56645c5e1?org_if_sml=1706"
            alt="Rectangle18I134"
            className="add-invent-item-rectangle18"
          />
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a3d75bee-97df-4a92-b0a1-8a0f28cd7ef7/9ae78324-c679-434e-bcfa-9ea9f0382ac5?org_if_sml=1706"
            alt="Rectangle19I134"
            className="add-invent-item-rectangle19"
          />
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a3d75bee-97df-4a92-b0a1-8a0f28cd7ef7/eeaf208b-50a6-4e22-9969-7b8e41ee501d?org_if_sml=1706"
            alt="Rectangle20I134"
            className="add-invent-item-rectangle20"
          />
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a3d75bee-97df-4a92-b0a1-8a0f28cd7ef7/b95981d0-1027-4977-a01a-e322f2af5153?org_if_sml=1706"
            alt="Rectangle21I134"
            className="add-invent-item-rectangle21"
          />
          



          <span className="add-invent-item-text">
            <span>
              <button style={{ color: 'black', fontWeight: 'bold' }}>
                Employee
              </button>
            </span>
          </span>
          
          <span className="add-invent-item-text02">
            <span>
              <button style={{ color: 'black', fontWeight: 'bold' }}>
                Customer
              </button>
            </span>
          </span>

          <span className="add-invent-item-text04">
            <span>
              <button style={{ color: 'black', fontWeight: 'bold' }}>
               Supplier
              </button>
            </span>
          </span>
          
          
          <span className="add-invent-item-text06">
            <span>
              <button style={{ color: 'black', fontWeight: 'bold' }}>
                Payment
              </button>
            </span>
          </span>

           <span className="add-invent-item-text08">
            <span>
              <button style={{ color: 'black', fontWeight: 'bold' }}>
                Store Items
              </button>
            </span>
          </span>

          <span className="add-invent-item-text10">
            <span>
              <button style={{ color: 'black', fontWeight: 'bold' }}>
                Renting
              </button>
            </span>
          </span>

          <span className="add-invent-item-text12">
            <span>
              <button style={{ color: 'black', fontWeight: 'bold' }}>
                <Link to='/invent-dashboard'>Inventory</Link>
              </button>
            </span>
          </span>

          <span className="add-invent-item-text14">
            <span>
              <button style={{ color: 'black', fontWeight: 'bold' }}>
                Utility Bills
              </button>
            </span>
          </span> 
        </div>

        <div className="add-invent-item-frame39">
          <div className="add-invent-item-frame40">
            <div className="add-invent-item-topbar">
              <img
                src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a3d75bee-97df-4a92-b0a1-8a0f28cd7ef7/6a07ef24-a205-4786-ae86-fe3d85ee3f44?org_if_sml=1612"
                alt="Rectangle2I135"
                className="add-invent-item-rectangle2"
              />
              <img
                src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a3d75bee-97df-4a92-b0a1-8a0f28cd7ef7/a913e5bd-05c0-4526-8720-048034786d4e?org_if_sml=1531"
                alt="Rectangle14I135"
                className="add-invent-item-rectangle14"
              />
              <span className="add-invent-item-text16">
                <span>
                <button style={{color:'black' , fontWeight:'bold'}}> Log Out</button>
                </span>
              </span>
              <img
                src="/playground_assets/mdiaccounti135-92ra.svg"
                alt="mdiaccountI135"
                className="add-invent-item-mdiaccount"
              />
            </div>
          </div>
        </div>
        <span className="add-invent-item-text18">
          <span>ADD NEW ITEM</span>
        </span>
        <div className="add-invent-item-add-new-itemform">
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a3d75bee-97df-4a92-b0a1-8a0f28cd7ef7/108038d0-6cab-46e7-ba00-1965522f979b?org_if_sml=1135778"
            alt="Rectangle49149"
            className="add-invent-item-rectangle49"
          />

          <form onSubmit={onSubmit} >
            
            <input type="text" className="add-invent-item-rectangle45input03" name='itemName' value={itemName} required onChange={handleChangeItemName} 
             style={{textAlign:'center',fontWeight:'bold'}}/>
            
            <span className="add-invent-item-text24">
                  <span>Item Name</span>
            </span>

            
            <input type="date" className="add-invent-item-rectangle45input02" placeholder='' name='recieveDate' value={recieveDate} required 
             onChange={handleChangeDate} style={{textAlign:'center',fontWeight:'bold'}}/>
            
            <span className="add-invent-item-text22">
                  <span>Received Date</span>
            </span>

            
            <input type="text" className="add-invent-item-rectangle45input04" placeholder='' name='sku' value={sku} required onChange={handleChangeSku} 
             style={{textAlign:'center',fontWeight:'bold'}}/>
            
            <span className="add-invent-item-text26">
                  <span>SKU Number</span>
            </span>

            
            <select id="condition" type="text"  className="add-invent-item-rectangle45input01"  name='condition' value={condition} required 
            onChange={handleChangeCondition}  style={{textAlign:'center',fontWeight:'bold'}}>
                <option></option>
                <option value="New">New</option>
  	            <option value="Tobe Purchase">To be Purchase</option>
  	            <option value="Purchase">Purchase</option>
  	            <option value="Tobe Sold">To be Sold</option>
                <option value="Sold">Sold</option>    
            </select>
            
            <span className="add-invent-item-text28">
                  <span>Inventory Condition</span>
            </span>

            
            <select id="category" type="text" className="add-invent-item-rectangle45input"  name='category' value={category} required 
            onChange={handleChangeCategory} style={{textAlign:'center',fontWeight:'bold'}}>
                <option></option>
                <option value="EC">Electric Components</option>
  	            <option value="MC">Mechanical Components</option>
  	            <option value="HC">Hydrolic Components</option>
  	            <option value="MG">Motors & Generators</option>
                <option value="Tools">Tools</option>
                <option value="Others">Others</option>    
            </select>
            
            <span className="add-invent-item-text30">
                  <span>Item Category</span>
            </span>


            <input type="text" className="add-invent-item-rectangle45input05" placeholder='' name='brand' value={brand} required onChange={handleChangeBrand} style={{textAlign:'center',fontWeight:'bold'}}/>
            
            <span className="add-invent-item-text32">
                  <span>Item Brand</span>
            </span>

            
            <input type="text" className="add-invent-item-rectangle45input06" placeholder='' name='initialPrice' value={initialPrice} required onChange={handleChangeInPrice} style={{textAlign:'center',fontWeight:'bold'}}></input>
            
            <span className="add-invent-item-text34">
                  <span>Initial Price (per item)</span>
            </span>

            
            <input type="text" className="add-invent-item-rectangle45input07" placeholder='' name='initialQuantity' value={initialQuantity} required onChange={handleChangeInQty} style={{textAlign:'center',fontWeight:'bold'}}/>
            
            <span className="add-invent-item-text36">
                  <span>Initial Quantity</span>
            </span>

           
            <input type="text" className="add-invent-item-rectangle45input08" placeholder='' name='totalPrice' value={totalPrice} required onChange={handleChangeTotalPrice} style={{textAlign:'center',fontWeight:'bold'}}/>
           
            <span className="add-invent-item-text38">
                  <span>Total Price</span>
            </span>

            
            <input type="text" className="add-invent-item-rectangle45input09" placeholder='' name='supplier' value={supplier} required onChange={handleChangeSupplier} style={{textAlign:'center',fontWeight:'bold'}}/>
           
            <span className="add-invent-item-text20">
                  <span>Supplier</span>
            </span>

          
        
            <div className="add-invent-item-editbutton">
                <span className="add-invent-item-text40">
                  <span>
                    <input  type='submit' value='ADD' style={{color:'white' , fontWeight:'bold'}}/>  
                  </span>
                </span>
            </div>

          <div className="add-invent-item-savebutton">
                <span className="add-invent-item-text42">
                  <span>
                    <button style={{color:'white' , fontWeight:'bold'}}> CANCEL </button>
                  </span>
                </span>
            </div>  
          </form>
        </div>
        
        <img
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a3d75bee-97df-4a92-b0a1-8a0f28cd7ef7/1a03de9c-a645-4530-acf6-dc30939448d9?org_if_sml=1621"
          alt="Rectangle66113"
          className="add-invent-item-rectangle6"
        />
        {/*Search Bar */}
        <span >
          <span> 
            <input type="text" className="add-invent-item-rectangle6" name="search" placeholder='Search here by ID/ Condition' style={{textAlign:'center'}}>
            </input>
          </span>
        </span>

        <img
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a3d75bee-97df-4a92-b0a1-8a0f28cd7ef7/ad414261-651d-44f7-a6a5-cf83cafe5dbe?org_if_sml=11096"
          alt="icons8search2416113"
          className="add-invent-item-icons8search241"
        />
      </div>
    </div>
  )
}

export default AddInventItem
