import {useEffect} from "react";
import $ from 'jquery';
import  "jquery-ui-dist/jquery-ui.js"

export const HeroSliderComp = () => {
	useEffect(() => {
		$(".hero-slider-1").slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			fade: true,
			loop: true,
			dots: true,
			arrows: true,
			prevArrow: '<span class="slider-btn slider-prev"><i class="fi-rs-angle-left"></i></span>',
			nextArrow: '<span class="slider-btn slider-next"><i class="fi-rs-angle-right"></i></span>',
			appendArrows: ".hero-slider-1-arrow",
			autoplay: true
		});



	},[]);
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
											<a href="shop-grid-right.html"> <img
												src="/assets/imgs/theme/icons/category-1.svg" alt=""/>Milks and
												Dairies</a>
										</li>
										<li>
											<a href="shop-grid-right.html"> <img
												src="/assets/imgs/theme/icons/category-2.svg" alt=""/>Clothing &
												beauty</a>
										</li>
										<li>
											<a href="shop-grid-right.html"> <img
												src="/assets/imgs/theme/icons/category-3.svg" alt=""/>Pet Foods & Toy</a>
										</li>
										<li>
											<a href="shop-grid-right.html"> <img
												src="/assets/imgs/theme/icons/category-4.svg" alt=""/>Baking material</a>
										</li>
										<li>
											<a href="shop-grid-right.html"> <img
												src="/assets/imgs/theme/icons/category-5.svg" alt=""/>Fresh Fruit</a>
										</li>
										<li>
											<a href="shop-grid-right.html"> <img
												src="/assets/imgs/theme/icons/category-6.svg" alt=""/>Wines & Drinks</a>
										</li>
										<li>
											<a href="shop-grid-right.html"> <img
												src="/assets/imgs/theme/icons/category-7.svg" alt=""/>Fresh Seafood</a>
										</li>
										<li>
											<a href="shop-grid-right.html"> <img
												src="/assets/imgs/theme/icons/category-8.svg" alt=""/>Fast food</a>
										</li>
										<li>
											<a href="shop-grid-right.html"> <img
												src="/assets/imgs/theme/icons/category-9.svg" alt=""/>Vegetables</a>
										</li>
										<li>
											<a href="shop-grid-right.html"> <img
												src="/assets/imgs/theme/icons/category-10.svg" alt=""/>Bread and
												Juice</a>
										</li>
										<li>
											<a href="shop-grid-right.html"> <img
												src="/assets/imgs/theme/icons/category-3.svg" alt=""/>Pet Foods & Toy</a>
										</li>
									</ul>
								</div>
								<div className="more_slide_open" style={{display: "none"}} >
									<div className="d-flex categori-dropdown-inner">
										<ul>
											<li>
												<a href="shop-grid-right.html"> <img
													src="/assets/imgs/theme/icons/icon-1.svg" alt=""/>Milks and
													Dairies</a>
											</li>
											<li>
												<a href="shop-grid-right.html"> <img
													src="/assets/imgs/theme/icons/icon-2.svg" alt=""/>Clothing &
													beauty</a>
											</li>
											<li>
												<a href="shop-grid-right.html"> <img
													src="/assets/imgs/theme/icons/icon-3.svg" alt=""/>Wines & Drinks</a>
											</li>
											<li>
												<a href="shop-grid-right.html"> <img
													src="/assets/imgs/theme/icons/icon-4.svg" alt=""/>Fresh Seafood</a>
											</li>
										</ul>
									</div>
								</div>
								<div className="more_categories"><span className="icon"></span> <span
									className="heading-sm-1">Show more...</span></div>
							</div>
						</div>
						<div className="col-lg-7">
							<div className="home-slide-cover mt-30">
								<div className="hero-slider-1 style-5 dot-style-1 dot-style-1-position-2">
									<div className="single-hero-slider single-animation-wrap" style={{backgroundImage: "url(/assets/imgs/slider/slider-7.png)"}} >
										<div className="slider-content">
											<h1 className="display-2 mb-40">
												Don’t miss amazing<br/>
												grocery deals
											</h1>
											<p className="mb-65">Sign up for the daily newsletter</p>
											<form className="form-subcriber d-flex">
												<input type="email" placeholder="Your emaill address"/>
												<button className="btn" type="submit">Subscribe</button>
											</form>
										</div>
									</div>
									<div className="single-hero-slider single-animation-wrap" style={{backgroundImage: "url(/assets/imgs/slider/slider-8.png)"}}  >
										<div className="slider-content">
											<h1 className="display-2 mb-40">
												Fresh Vegetables<br/>
												Big discount
											</h1>
											<p className="mb-65">Save up to 50% off on your first order</p>
											<form className="form-subcriber d-flex">
												<input type="email" placeholder="Your emaill address"/>
												<button className="btn" type="submit">Subscribe</button>
											</form>
										</div>
									</div>
								</div>
								<div className="slider-arrow hero-slider-1-arrow"></div>
							</div>
						</div>
						<div className="col-lg-3">
							<div className="row">
								<div className="col-md-6 col-lg-12">
									<div className="banner-img style-4 mt-30">
										<img src="/assets/imgs/banner/banner-14.png" alt=""/>
										<div className="banner-text">
											<h4 className="mb-30">
												Everyday Fresh &amp; <br/>Clean with Our<br/>
												Products
											</h4>
											<a href="shop-grid-right.html" className="btn btn-xs mb-50">Shop Now <i
												className="fi-rs-arrow-small-right"></i></a>
										</div>
									</div>
								</div>
								<div className="col-md-6 col-lg-12">
									<div className="banner-img style-5 mt-5 mt-md-30">
										<img src="/assets/imgs/banner/banner-15.png" alt=""/>
										<div className="banner-text">
											<h5 className="mb-20">
												The best Organic <br/>
												Products Online
											</h5>
											<a href="shop-grid-right.html" className="btn btn-xs">Shop Now <i
												className="fi-rs-arrow-small-right"></i></a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}