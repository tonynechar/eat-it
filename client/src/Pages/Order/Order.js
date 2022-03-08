import React, { useState, useContext } from 'react';
import { OrderContext } from '../../App';
import OrderList from '../../Components/OrderList/OrderList';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './Order.css';

function Order() {

  const { order, setOrder } = useContext(OrderContext);



  const [userCoordinates, setUserCoordinates] = useState({});
  
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
  
  const submitHandler = () => {
    if (userCoordinates.latitude === undefined || userCoordinates.longitude === undefined) {

    }
  }
  return (
    <div>
      <h2>Order</h2>
      <OrderList dishes={order.dishes} />
      <form onSubmit={submitHandler}>
        <label>Name</label>
        <input type='text' name='name' id='name' required={true} />
        <label>Last Name</label>
        <input type='text' name='lastName' id='lastName' required={true} />
        <label>Phone Number</label>
        <input type='tel' name='phoneNumber' id='phoneNumber' pattern='[0-9]{3}-[0-9]{2}-[0-9]{3}' required={true} />
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
                  Your Location.
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        }
        <button type='submit'>Placer Order</button>
      </form>
    </div>
  )
}

export default Order