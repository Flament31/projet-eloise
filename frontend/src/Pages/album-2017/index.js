import { useEffect, useState } from 'react';
import {
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBCarouselElement,
} from 'mdb-react-ui-kit';
import tableau1 from './breathe_in.jpg';
import tableau2 from './fly_off.jpg';
import tableau3 from './leave_behind.jpg';
import tableau4 from './reach_out.jpg';
import tableau5 from './see_trough.jpg';
import tableau6 from './hold_back.jpg';
import tableau7 from './drift_away.jpg';


const Album5 = () => {

    const mediaMatch = window.matchMedia('(min-width: 992px)');
    const [matches, setMatches] = useState(mediaMatch.matches);


    useEffect(() => {
        const handler = e => setMatches(e.matches);
        mediaMatch.addListener(handler);
        return () => mediaMatch.removeListener(handler);
    });



    return (
        <div className='d-flex bg-dark flex-column flex-sm-row'>
            <div>
                <a href="/Albums" className="nav-link">
                    <span className="mx-2">Retour</span>
                </a>
            </div>

            <MDBCarousel showControls className='z-depth-1 text-white mt-3' style={{ paddingBottom: "350px" }}>
                <MDBCarouselInner>
                    <MDBCarouselItem className='active'>
                        <div className='carousel-caption d-none d-block text-white' style={styleText.container(matches)}>
                            <h5>Breathe in</h5>
                            <p>
                                2016<br />
                                enduit et acrylique,<br />
                                81x65cm
                            </p>
                        </div>
                        <MDBCarouselElement src={tableau1} alt='...' style={styles.container(matches)} />
                    </MDBCarouselItem>

                    <MDBCarouselItem>
                        <div className='carousel-caption d-none d-block text-white' style={styleText.container(matches)}>
                            <h5>Fly off</h5>
                            <p>
                                2016<br />
                                enduit et acrylique,<br />
                                80x80cm
                            </p>
                        </div>
                        <MDBCarouselElement src={tableau2} alt='...' style={styles.container(matches)} />
                    </MDBCarouselItem>
                    <MDBCarouselItem>
                        <div className='carousel-caption d-none d-block text-white' style={styleText.container(matches)}>
                            <h5>Leave behind</h5>
                            <p>
                                2016-2017<br />
                                enduit et acrylique,<br />
                                100x50cm, <br />
                                collection personnelle
                            </p>
                        </div>
                        <MDBCarouselElement src={tableau3} alt='...' style={styles.container(matches)} />
                    </MDBCarouselItem>

                    <MDBCarouselItem>
                        <div className='carousel-caption d-none d-block text-white' style={styleText.container(matches)}>
                            <h5>Reach out</h5>
                            <p>
                                2017<br />
                                enduit et acrylique,<br />
                                60x90cm,<br />
                                collection personnelle
                            </p>
                        </div>
                        <MDBCarouselElement src={tableau4} alt='...' style={styles.container(matches)} />
                    </MDBCarouselItem>
                    <MDBCarouselItem>
                        <div className='carousel-caption d-none d-block text-white' style={styleText.container(matches)}>
                            <h5>See through</h5>
                            <p>
                                2017<br />
                                enduit et acrylique,<br />
                                60x75cm
                            </p>
                        </div>
                        <MDBCarouselElement src={tableau5} alt='...' style={styles.container(matches)} />
                    </MDBCarouselItem>
                    <MDBCarouselItem>
                        <div className='carousel-caption d-none d-block text-white' style={styleText.container(matches)}>
                            <h5>Hold back</h5>
                            <p>
                                2017<br />
                                enduit et acrylique,<br />
                                100x70cm, <br />
                                collection personnelle
                            </p>
                        </div>
                        <MDBCarouselElement src={tableau6} alt='...' style={styles.container(matches)} />
                    </MDBCarouselItem>
                    <MDBCarouselItem>
                        <div className='carousel-caption d-none d-block text-white' style={styleText.container(matches)}>
                            <h5>Drift away</h5>
                            <p>
                                2017<br />
                                enduit et acrylique,<br />
                                65x81cm
                            </p>
                        </div>
                        <MDBCarouselElement src={tableau7} alt='...' style={styles.container(matches)} />
                    </MDBCarouselItem>
                </MDBCarouselInner>
            </MDBCarousel>
        </div>
    )

}

const styles = {
    container: isRowBased => ({
        paddingRight: isRowBased ? '37%' : '0',
        paddingLeft: isRowBased ? '29%' : '0',
        marginBottom: isRowBased ? '0' : '45%'
    })
};

const styleText = {
    container: isRowBased => ({
        paddingRight: isRowBased ? '5%' : '0',
        paddingLeft: isRowBased ? '50%' : '0',
    })
};

export default Album5