import React, { useState } from "react";
function Productlist() {

  const Productlist = [
    {
      id: 1,
      Name: "Monitor",
      price: 20000,
      image: "https://rukminim2.flixcart.com/image/312/312/xif0q/monitor/l/f/1/-original-imah9ax8fua9ev8m.jpeg?q=70",
      Description: "Lenovo L-Series 68.58 cm (27 inch) Quad HD LED Backlit IPS Panel with 99% sRGB, 90% DCI-P3, 2xHDMI 2.1, 1xDP 1.4, Tilt/Swivel/Pivot/Height Adjustable Stand, 3WX2 Inbuilt Speakers",
      quantity: 1,
      totalprice: 2000
    },
    {
      id: 2,
      Name: "Laptop",
      price: 50000,
      image: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/u/c/7/-original-imah9gv6zjdbhcs2.jpeg?q=70",
      Description: "DELL Vostro Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) VN3520HPCNX001ORB1 Thin and Light Laptop ",
      quantity: 1,
      totalprice: 8000
    },
    {
      id: 3,
      Name: "Watch",
      price: 4000,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/x/j/s/-original-imah4eddxhvzpxhc.jpeg?q=70",
      Description: "boAt Ultima Prism with 1.96",
      quantity: 1,
      totalprice: 9000
    },

    {
      id: 4,
      Name: "bycycle",
      price: 5000,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/cycle/x/x/k/torfin-26t-mtb-bicycle-without-gear-with-fs-dd-brake-26-18-original-imah7uz6he83kyp5.jpeg?q=70",
      Description: "Fastway Bicycle HOPPER JETPRO N/IBC 24T S/GREEN, WITH 90% ASSEMBLED 24 T Road Cycle",
      quantity: 1,
      totalprice: 12000
    }

  ]
  const [product, setproduct] = useState(Productlist)

  function Increase() {
    setproduct(...product?quantity:quantity + 1);
  }
   function Descrease(){
    setproduct(...product? quantity : quantity - 1);
   }

  return (
    <>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Image</th>
            <th scope="col">quantity</th>
            <th scope="col">price</th>
            <th scope="col">totalprice</th>
          </tr>
        </thead>
        <tbody>
          {product.map((product) => (
            <tr key={product.id}>
              <th>{product.id}</th>
              <td>{product.Name}</td>
              <td>
                <img src={product.image} alt="" height={300} width={300} />
              </td>

              <td >
                <button type="button" className="btn btn-primary m-3" onClick={Increase}>Increase</button>
                {product.quantity}
                <button type="button" className="btn btn-primary m-3" onClick={Descrease}>Decrease</button>

              </td>

              <td>{product.price}</td>
              <td>{product.totalprice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
export default Productlist




