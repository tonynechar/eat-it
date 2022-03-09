import React, { useState, useContext, useEffect } from 'react';
import { OrderContext } from '../../App';
import OrderList from '../../Components/OrderList/OrderList';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import apiService from '../../Services/ApiService';
import './Order.css';

function Order() {

  const { order, setOrder } = useContext(OrderContext);

  const [userCoordinates, setUserCoordinates] = useState({});
  const [total, setTotal] = useState(0);

  useEffect(() => {
    for (let i = 0; i < order.dishes.length; i++) {
      const increase = order.dishes[i].price * order.dishes[i].quantity;
      setTotal(prev => prev += increase);
    }
  }, [order])
  
  const handleClick = (e) => {
    e.preventDefault();
    if('geolocation' in navigator) {
      function success (pos) {
        const position = [pos.coords.latitude, pos.coords.longitude];
        setUserCoordinates({latitude: position[0], longitude: position[1]})
      }
      function error (err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      }
      const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };
      navigator.permissions.query({name:'geolocation'})
      .then(navigator.geolocation.getCurrentPosition(success, error, options))
      .catch(err => console.error(err));
    } else {
      /* geolocation IS NOT available */
    }
  }
  
  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      userInfo: {
        name: e.target.name.value,
        lastName: e.target.lastName.value,
        phoneNumber: e.target.phoneNumber.value
      },
      total: total,
      userCoordinates: userCoordinates
    }
    setOrder(Object.assign(order, data));
    if (userCoordinates.latitude !== undefined && userCoordinates.longitude !== undefined) {
      apiService.createOrder(JSON.stringify(order));
    }
  }


  return (
    <div className='order-page-container'>
      <h2>Order</h2>
      { order.dishes.length > 0 ? 
        <div>
          <OrderList dishes={order.dishes} />
          <div className='order-summary'>
            <p className='label'>Total:</p>
            <p className='total'>${total.toFixed(2)}</p>
          </div>
          <form onSubmit={submitHandler}>
            <label>Name</label>
            <input type='text' name='name' id='name' required={true} />
            <label>Last Name</label>
            <input type='text' name='lastName' id='lastName' required={true} />
            <label>Phone Number</label>
            <input type='tel' name='phoneNumber' id='phoneNumber' pattern='[0-9]{10}' required={true} />
            <section>
              {/* <label>Delivery Method:</label>
              <br />
              <input type='radio' value='pick-up' id='pick-upChoice' name='method'/>
              <label>Pick-Up</label>
              <input type='radio' value='delivery' id='deliveryChoice' name='method'/>
              <label>Delivery</label> */}
            </section>
            <button onClick={handleClick}>Share Location for Delivery</button>
            <link
              rel="stylesheet"
              href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
              integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
              crossOrigin=""
            />
            <script
              src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
              integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
              crossOrigin=""
            />
            { userCoordinates.latitude !== undefined &&
              <div className=''>
                <MapContainer center={[userCoordinates.latitude, userCoordinates.longitude]} zoom={16}>
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={[userCoordinates.latitude, userCoordinates.longitude]}>
                    <Popup>
                      Your Location
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
            }
            <button type='submit'>Placer Order</button>
          </form>
        </div> :
        <div className='empty-order-message'>
          <p>Empty Order</p>
        </div>
      }
    </div>
  )
}

export default Order