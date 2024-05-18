import React from "react";
import "./shopowner.css";
function ShopownerHomepage() {
  return (
    <div className="  pt-5">
      <div className="shopownerhome">
        <section className="container shopownerhomemain">
          <div className="row pt-5">
            <div className="col ">
              <h1 className=" text-light mt-5 ps-5 pt-5 ">
                Making Commerce Better for Everyone
              </h1>{" "}
              <p className="text-light ps-5 ms-5 fs-4 pt-3">
                Shop Unity is supporting the next generation of entrepreneurs,
                the world’s biggest brands, and everyone in between
              </p>
            </div>
            <div className="col"></div>
          </div>
        </section>
      </div>
      <section className="p-5 text-center">
        <div className="fs-1 p-3">Grow your business here</div>
        <div>
          Whether you want to sell products down the street or around the world,
          we have all the tools you need.
        </div>
      </section>

      <section className="shopownerhome3">
        <div className="shopownerhome4">
          <div className="container">
            <div className="text-light fs-3 p-5 text-center pt-5">
              The most customizable Shoping platform for building your online
              business.
            </div>
            <div className="text-center">
              <button className=" btn btn-dark px-5 py-3 m-5 text-light  bg-dark w-25">
                GET STARTED
              </button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container ">
          <img
            className="p-1 m-5"
            src="https://woocommerce.com/wp-content/themes/woo/images/wc-showcase/logo-magnatiles.png"
            width={150}
            height={60}
          ></img>
          <img
            className="p-1 m-5"
            src="https://woocommerce.com/wp-content/themes/woo/images/wc-showcase/logo-nutribullet.png"
            width={150}
            height={30}
          ></img>
          <img
            className="p-1 m-5"
            src="https://woocommerce.com/wp-content/themes/woo/images/wc-showcase/logo-danos.png"
            width={150}
            height={60}
          ></img>
          <img
            className="p-1 m-5"
            src="	https://woocommerce.com/wp-content/themes/woo/images/wc-showcase/logo-tonal.png"
            width={150}
            height={60}
          ></img>
        </div>
      </section>
    </div>
  );
}

export default ShopownerHomepage;
