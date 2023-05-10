import Slider from "../slider";

const sliderData = [
  {
    backgroundImage: "/assets/imgs/slider/slider-7.png",
    title: "Don’t miss amazing grocery deals",
    subTitle: "Sign up for the daily newsletter",
    inputPlaceholder: "Your emaill address",
    buttonLabel: "Subscribe",
  },
  {
    backgroundImage: "/assets/imgs/slider/slider-8.png",
    title: "Fresh Vegetables Big discount",
    subTitle: "Save up to 50% off on your first order",
    inputPlaceholder: "Your emaill address",
    buttonLabel: "Subscribe",
  },
];

export const HeroSliderComp = () => {
  return (
    <>
      <section className="home-slider position-relative mb-30">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 d-none d-lg-flex">
              <div className="categories-dropdown-wrap style-2 font-heading mt-30">
                <div className="d-flex categori-dropdown-inner">
                  <ul>
                    <li>
                      <a href="shop-grid-right.html">
                        {" "}
                        <img
                          src="/assets/imgs/theme/icons/category-1.svg"
                          alt=""
                        />
                        Milks and Dairies
                      </a>
                    </li>
                    <li>
                      <a href="shop-grid-right.html">
                        {" "}
                        <img
                          src="/assets/imgs/theme/icons/category-2.svg"
                          alt=""
                        />
                        Clothing & beauty
                      </a>
                    </li>
                    <li>
                      <a href="shop-grid-right.html">
                        {" "}
                        <img
                          src="/assets/imgs/theme/icons/category-3.svg"
                          alt=""
                        />
                        Pet Foods & Toy
                      </a>
                    </li>
                    <li>
                      <a href="shop-grid-right.html">
                        {" "}
                        <img
                          src="/assets/imgs/theme/icons/category-4.svg"
                          alt=""
                        />
                        Baking material
                      </a>
                    </li>
                    <li>
                      <a href="shop-grid-right.html">
                        {" "}
                        <img
                          src="/assets/imgs/theme/icons/category-5.svg"
                          alt=""
                        />
                        Fresh Fruit
                      </a>
                    </li>
                    <li>
                      <a href="shop-grid-right.html">
                        {" "}
                        <img
                          src="/assets/imgs/theme/icons/category-6.svg"
                          alt=""
                        />
                        Wines & Drinks
                      </a>
                    </li>
                    <li>
                      <a href="shop-grid-right.html">
                        {" "}
                        <img
                          src="/assets/imgs/theme/icons/category-7.svg"
                          alt=""
                        />
                        Fresh Seafood
                      </a>
                    </li>
                    <li>
                      <a href="shop-grid-right.html">
                        {" "}
                        <img
                          src="/assets/imgs/theme/icons/category-8.svg"
                          alt=""
                        />
                        Fast food
                      </a>
                    </li>
                    <li>
                      <a href="shop-grid-right.html">
                        {" "}
                        <img
                          src="/assets/imgs/theme/icons/category-9.svg"
                          alt=""
                        />
                        Vegetables
                      </a>
                    </li>
                    <li>
                      <a href="shop-grid-right.html">
                        {" "}
                        <img
                          src="/assets/imgs/theme/icons/category-10.svg"
                          alt=""
                        />
                        Bread and Juice
                      </a>
                    </li>
                    <li>
                      <a href="shop-grid-right.html">
                        {" "}
                        <img
                          src="/assets/imgs/theme/icons/category-3.svg"
                          alt=""
                        />
                        Pet Foods & Toy
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="more_slide_open" style={{ display: "none" }}>
                  <div className="d-flex categori-dropdown-inner">
                    <ul>
                      <li>
                        <a href="shop-grid-right.html">
                          {" "}
                          <img
                            src="/assets/imgs/theme/icons/icon-1.svg"
                            alt=""
                          />
                          Milks and Dairies
                        </a>
                      </li>
                      <li>
                        <a href="shop-grid-right.html">
                          {" "}
                          <img
                            src="/assets/imgs/theme/icons/icon-2.svg"
                            alt=""
                          />
                          Clothing & beauty
                        </a>
                      </li>
                      <li>
                        <a href="shop-grid-right.html">
                          {" "}
                          <img
                            src="/assets/imgs/theme/icons/icon-3.svg"
                            alt=""
                          />
                          Wines & Drinks
                        </a>
                      </li>
                      <li>
                        <a href="shop-grid-right.html">
                          {" "}
                          <img
                            src="/assets/imgs/theme/icons/icon-4.svg"
                            alt=""
                          />
                          Fresh Seafood
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="more_categories">
                  <span className="icon"></span>{" "}
                  <span className="heading-sm-1">Show more...</span>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="home-slide-cover mt-30">
                <Slider>
                  {sliderData.map((item) => (
                    <div
                      key={item.id}
                      className="single-hero-slider single-animation-wrap"
                      style={{
                        backgroundImage: `url(${item})`,
                      }}
                    >
                      <div className="slider-content">
                        <h1 className="display-2 mb-40">{item.title}</h1>
                        <p className="mb-65">{item.subTitle}</p>
                        <form className="form-subcriber d-flex">
                          <input
                            type="email"
                            placeholder={item.inputPlaceholder}
                          />
                          <button className="btn" type="submit">
                            {item.buttonLabel}
                          </button>
                        </form>
                      </div>
                    </div>
                  ))}
                </Slider>
                <div className="slider-arrow hero-slider-1-arrow"></div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="row">
                <div className="col-md-6 col-lg-12">
                  <div className="banner-img style-4 mt-30">
                    <img src="/assets/imgs/banner/banner-14.png" alt="" />
                    <div className="banner-text">
                      <h4 className="mb-30">
                        Everyday Fresh &amp; <br />
                        Clean with Our
                        <br />
                        Products
                      </h4>
                      <a
                        href="shop-grid-right.html"
                        className="btn btn-xs mb-50"
                      >
                        Shop Now <i className="fi-rs-arrow-small-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-12">
                  <div className="banner-img style-5 mt-5 mt-md-30">
                    <img src="/assets/imgs/banner/banner-15.png" alt="" />
                    <div className="banner-text">
                      <h5 className="mb-20">
                        The best Organic <br />
                        Products Online
                      </h5>
                      <a href="shop-grid-right.html" className="btn btn-xs">
                        Shop Now <i className="fi-rs-arrow-small-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
