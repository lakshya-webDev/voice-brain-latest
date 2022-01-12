import React, { Fragment, useEffect } from 'react';

import SiteNavbar from '../sections/SiteNavbar';
import Header from '../sections/Header';
import OurMission from '../sections/OurMission';
import MeetBarbarian from '../sections/MeetBarbarian';
import Services from '../sections/Services';
import WeDo from '../sections/WeDo';
import OurProcess from '../sections/OurProcess';
import CTA from '../sections/CTA';
import Contact from '../sections/Contact';
import Footer from '../sections/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { home } from '../../actions/homeActiions';
import Loader from './Loader';

const Home = () => {
    const dispatch = useDispatch();
    const { loading, homeData } = useSelector(state => state.home)
    // for (const key in homeData.data) {
    // if (home) {
    //     // console.log("homeData.data[key].attributes",);
    //     Object.keys(homeData.data).forEach((key, index) => {
    //         console.log("homeData.data[key]", homeData.data[key]);
    //     })

    // }
    // }

    // }


    // for (const ele in homeData.data) {
    //     console.log("Object.keys(homeData.data)", ele);
    //     console.log("homesdfdsf", homeData.data[ele])
    // }

    if (!loading) {

        console.log("!loading && homeData?.data ? [0]", homeData?.data?.[0]);
    }
    useEffect(() => {
        dispatch(home())


    }, [dispatch])
    // {
    //     loading ? (<div>loading</div>) : (<Fragment>
    //         {homeData?.data?.map(({ attributes }) => {

    //         })}
    //     </Fragment>)
    // }

    return (
        <Fragment>
            {loading ? (
                <Loader />
            ) : (<Fragment>
                {homeData?.data?.map(({ attributes }) => {
                    return (
                        <Fragment key={attributes.id}>
                            <div className="container-fluid header-section">
                                <SiteNavbar />
                                <hr className="navbar-divider" />
                                <Header mainSection={attributes.mainSection} />
                            </div>
                            {/* Our Mission cection */}
                            <div className="overlay-bg mt-3">      
                                <OurMission missionSection={attributes.missionSection} />
                            </div>
                      
                            {/* Meet Barbarian Section */}
                            <div className="container-fluid" id="meet-barbarian">
                                <MeetBarbarian barbarians={attributes.barbarians} />
                            </div>
                            {/* Services */}
                            <div className="container-fluid" id="our-services">
                                <Services serviceSection={attributes.serviceSection} />
                            </div>
                            {/* What we Do Section */}
                            <div className="container-fluid" id="we-do">
                                {/*  >>>>>*/}
                                <WeDo whatWeDoSection={attributes.whatWeDoSection} />
                            </div>
                            {/* Our Process Section */}
                            <div className="container-fluid" id="our-process">
                                <OurProcess ourProcessSection={attributes.ourProcessSection} />
                            </div>
                            <div className="container-fluid process-graphic">
                                <div className='col-12'>
                                    <p className='text-center'>Process Graphic TBD</p>
                                </div>
                            </div>
                            {/* Our Process end */}
                            {/* CTA  */}
                            <div className="container-fluid" id="cta">
                                <CTA tageLineSection={attributes.tageLineSection} />
                            </div>
                            {/* contact-form */}
                            <div className="container-fluid" id="contact">
                                {/*>>>>>>>>  */}
                                <Contact />
                            </div>
                            {/* Footer section*/}
                            <div className="container-fluid footer">
                                <Footer />
                            </div>
                        </Fragment>
                    )
                })}
            </Fragment>)}


        </Fragment>
    )
}
export default Home;