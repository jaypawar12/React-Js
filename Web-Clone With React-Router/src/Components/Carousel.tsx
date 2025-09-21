export default function Carousel() {
    return (
        <div className="container-fluid p-0 wow fadeIn" data-wow-delay="0.1s">
                {/* Slide 1 */}
                <div className="container py-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <div className="carousel-text">
                                <h1 className="display-1 text-uppercase mb-3">
                                    Together for a Better Tomorrow
                                </h1>
                                <p className="fs-5 mb-5">
                                    We believe in creating opportunities and empowering communities
                                    through education, healthcare, and sustainable development.
                                </p>
                                <div className="d-flex">
                                    <a className="btn btn-primary py-3 px-4 me-3" href="#!">
                                        Donate Now
                                    </a>
                                    <a className="btn btn-secondary py-3 px-4" href="#!">
                                        Join Us Now
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="carousel-img">
                                <img className="w-100" src="img/carousel-1.jpg" alt="Slide 1" />
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}