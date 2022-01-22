import React, { Component } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

class DemoCarousel extends Component {
    responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    render() {
        return (
            <Carousel 
                responsive={this.responsive}
                autoPlay = {true}
                infinite = {true}
                pauseOnHover = {true}
                swipeable = {true}
                arrows = {false}
                autoPlaySpeed = {1500}
            >
                <div>
                    <div className="d-flex justify-content-center">
                        <div className="col-lg-12 col-md-12 col-12">
                            <img className="img-fluid" src={'https://ik.imagekit.io/qjfqoijyda6e/Slide/1_PDgsGtlSF.png?updatedAt=1639551798476'} />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="d-flex justify-content-center">
                        <div className="col-lg-12 col-md-12 col-12">
                            <img className="img-fluid" src={'https://ik.imagekit.io/qjfqoijyda6e/Slide/52_fXDXk-vB2Ax.png?updatedAt=1639551801447'} />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="d-flex justify-content-center">
                        <div className="col-lg-12 col-md-12 col-12">
                            <img className="img-fluid" src={'https://ik.imagekit.io/qjfqoijyda6e/Slide/110_QOBLKbA7E.png?updatedAt=1639551800202'} />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="d-flex justify-content-center">
                        <div className="col-lg-12 col-md-12 col-12">
                            <img className="img-fluid" src={'https://ik.imagekit.io/qjfqoijyda6e/Slide/322_rDzjmvUdtQJ.png?updatedAt=1639551799838'} />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="d-flex justify-content-center">
                        <div className="col-lg-12 col-md-12 col-12">
                            <img className="img-fluid" src={'https://ik.imagekit.io/qjfqoijyda6e/Slide/232_NFFtgzL4Q.png?updatedAt=1639551800214'} />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="d-flex justify-content-center">
                        <div className="col-lg-12 col-md-12 col-12">
                            <img className="img-fluid" src={'https://ik.imagekit.io/qjfqoijyda6e/Slide/323_YFVFyJGRn.png?updatedAt=1639551800362'} />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="d-flex justify-content-center">
                        <div className="col-lg-12 col-md-12 col-12">
                            <img className="img-fluid" src={'https://ik.imagekit.io/qjfqoijyda6e/Slide/344_idHcdHaN8.png?updatedAt=1639551801148'} />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="d-flex justify-content-center">
                        <div className="col-lg-12 col-md-12 col-12">
                            <img className="img-fluid" src={'https://ik.imagekit.io/qjfqoijyda6e/Slide/345_JbDQIdQ7m.png?updatedAt=1639551801550'} />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="d-flex justify-content-center">
                        <div className="col-lg-12 col-md-12 col-12">
                            <img className="img-fluid" src={'https://ik.imagekit.io/qjfqoijyda6e/Slide/421_Fiig1tKsA.png?updatedAt=1639551801929'} />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="d-flex justify-content-center">
                        <div className="col-lg-12 col-md-12 col-12">
                            <img className="img-fluid" src={'https://ik.imagekit.io/qjfqoijyda6e/Slide/555_CY1g4tWVx.png?updatedAt=1639551803833'} />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="d-flex justify-content-center">
                        <div className="col-lg-12 col-md-12 col-12">
                            <img className="img-fluid" src={'https://ik.imagekit.io/qjfqoijyda6e/Slide/532_NweCKjL-d.png?updatedAt=1639551802928'} />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="d-flex justify-content-center">
                        <div className="col-lg-12 col-md-12 col-12">
                            <img className="img-fluid" src={'https://ik.imagekit.io/qjfqoijyda6e/Slide/620_WmyoVrgiD.png?updatedAt=1639551803702'} />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="d-flex justify-content-center">
                        <div className="col-lg-12 col-md-12 col-12">
                            <img className="img-fluid" src={'https://ik.imagekit.io/qjfqoijyda6e/Slide/623_Otbe_FY5lgn.png?updatedAt=1639551804170'} />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="d-flex justify-content-center">
                        <div className="col-lg-12 col-md-12 col-12">
                            <img className="img-fluid" src={'https://ik.imagekit.io/qjfqoijyda6e/Slide/999_vdDESX83yO.png?updatedAt=1639551804873'} />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="d-flex justify-content-center">
                        <div className="col-lg-12 col-md-12 col-12">
                            <img className="img-fluid" src={'https://ik.imagekit.io/qjfqoijyda6e/Slide/1923_Ivczzim5t.png?updatedAt=1639551799563'} />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="d-flex justify-content-center">
                        <div className="col-lg-12 col-md-12 col-12">
                            <img className="img-fluid" src={'https://ik.imagekit.io/qjfqoijyda6e/Slide/5823_6JZCw4vUC.png?updatedAt=1639551803323'} />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="d-flex justify-content-center">
                        <div className="col-lg-12 col-md-12 col-12">
                            <img className="img-fluid" src={'https://ik.imagekit.io/qjfqoijyda6e/Slide/8124_nfJgp4610.png?updatedAt=1639551804912'} />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="d-flex justify-content-center">
                        <div className="col-lg-12 col-md-12 col-12">
                            <img className="img-fluid" src={'https://ik.imagekit.io/qjfqoijyda6e/Slide/8524_3IenRJJwu.png?updatedAt=1639551805593'} />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="d-flex justify-content-center">
                        <div className="col-lg-12 col-md-12 col-12">
                            <img className="img-fluid" src={'https://ik.imagekit.io/qjfqoijyda6e/Slide/8624_-vLnJz5-R.png?updatedAt=1639551804614'} />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="d-flex justify-content-center">
                        <div className="col-lg-12 col-md-12 col-12">
                            <img className="img-fluid" src={'https://ik.imagekit.io/qjfqoijyda6e/Slide/9452_g5K11gvegGi.png?updatedAt=1639551804457'} />
                        </div>
                    </div>
                </div>
            </Carousel>
        )
    }
    
};

export default DemoCarousel;