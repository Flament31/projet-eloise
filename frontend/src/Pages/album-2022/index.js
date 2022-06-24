import { useEffect, useState } from 'react';
import {
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBCarouselElement,
} from 'mdb-react-ui-kit';
import tableau6 from './anima_mea.jpg';
import tableau12 from './ego_sum.jpg';
import tableau1 from './fiat.jpg';
import tableau7 from './gloria_tua.jpg';
import tableau5 from './inebria_me.jpg';
import tableau8 from './israel.jpg';
import tableau10 from './memento.jpg';
import tableau4 from './pax_dei.jpg';
import tableau2 from './salva_me.jpg';
import tableau9 from './salvator_mundi.jpg';
import tableau3 from './voca_me.jpg';
import tableau11 from './vox_dei.jpg';


const Album1 = () => {

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
                    <MDBCarouselItem>
                        <div className='carousel-caption d-none d-block text-white' style={styleText.container(matches)}>
                            <h5>Fiat</h5>
                            <p>
                                2021<br />
                                techniques variées, <br />
                                100x80cm
                            </p>
                        </div>
                        <MDBCarouselElement src={tableau1} alt='...' style={styles.container(matches)} />
                    </MDBCarouselItem>
                    <MDBCarouselItem>
                        <div className='carousel-caption d-none d-block text-white' style={styleText.container(matches)}>
                            <h5>Salva me</h5>
                            <p>
                                2021<br />
                                techniques variées, <br />
                                100x80cm
                            </p>
                        </div>
                        <MDBCarouselElement src={tableau2} alt='...' style={styles.container(matches)} />
                    </MDBCarouselItem>
                    <MDBCarouselItem>
                        <div className='carousel-caption d-none d-block text-white' style={styleText.container(matches)}>
                            <h5>Voca me</h5>
                            <p>
                                2021<br />
                                techniques variées,<br />
                                100x80cm
                            </p>
                        </div>
                        <MDBCarouselElement src={tableau3} alt='...' style={styles.container(matches)} />
                    </MDBCarouselItem>
                    <MDBCarouselItem>
                        <div className='carousel-caption d-none d-block text-white' style={styleText.container(matches)}>
                            <h5>Pax dei</h5>
                            <p>
                                2021-2022<br />
                                techniques variées,<br />
                                100x80cm
                            </p>
                        </div>
                        <MDBCarouselElement src={tableau4} alt='...' style={styles.container(matches)} />
                    </MDBCarouselItem>
                    <MDBCarouselItem>
                        <div className='carousel-caption d-none d-block text-white' style={styleText.container(matches)}>
                            <h5>Inebria me</h5>
                            <p>
                                2021-2022<br />
                                techniques variées,<br />
                                100x80cm
                            </p>
                        </div>
                        <MDBCarouselElement src={tableau5} alt='...' style={styles.container(matches)} />
                    </MDBCarouselItem>
                    <MDBCarouselItem className='active'>
                        <div className='carousel-caption d-none d-block text-white' style={styleText.container(matches)}>
                            <h5>Anima mea</h5>
                            <p>
                                2022 <br />
                                techniques variées, <br />
                                100x80cm
                            </p>
                        </div>
                        <MDBCarouselElement src={tableau6} alt='...' style={styles.container(matches)} />
                    </MDBCarouselItem>
                    <MDBCarouselItem>
                        <div className='carousel-caption d-none d-block text-white' style={styleText.container(matches)}>
                            <h5>Gloria tua</h5>
                            <p>
                                2022
                                techniques variées, <br />
                                100x80cm <br />
                            </p>
                        </div>
                        <MDBCarouselElement src={tableau7} alt='...' style={styles.container(matches)} />
                    </MDBCarouselItem>
                    <MDBCarouselItem>
                        <div className='carousel-caption d-none d-block text-white' style={styleText.container(matches)}>
                            <h5>Israël</h5>
                            <p>
                                2022<br />
                                techniques variées, <br />
                                100x80cm
                            </p>
                        </div>
                        <MDBCarouselElement src={tableau8} alt='...' style={styles.container(matches)} />
                    </MDBCarouselItem>
                    <MDBCarouselItem>
                        <div className='carousel-caption d-none d-block text-white' style={styleText.container(matches)}>
                            <h5>Salvator mundi</h5>
                            <p>
                                2022 <br />
                                techniques variées, <br />
                                100x80cm
                            </p>
                        </div>
                        <MDBCarouselElement src={tableau9} alt='...' style={styles.container(matches)} />
                    </MDBCarouselItem>
                    <MDBCarouselItem>
                        <div className='carousel-caption d-none d-block text-white' style={styleText.container(matches)}>
                            <h5>Memento</h5>
                            <p>
                                2022 <br />
                                techniques variées, <br />
                                100x80cm
                            </p>
                        </div>
                        <MDBCarouselElement src={tableau10} alt='...' style={styles.container(matches)} />
                    </MDBCarouselItem>
                    <MDBCarouselItem>
                        <div className='carousel-caption d-none d-block text-white' style={styleText.container(matches)}>
                            <h5>Vox dei</h5>
                            <p>
                                2022 <br />
                                techniques variées, <br />
                                100x80cm
                            </p>
                        </div>
                        <MDBCarouselElement src={tableau11} alt='...' style={styles.container(matches)} />
                    </MDBCarouselItem>
                    <MDBCarouselItem>
                        <div className='carousel-caption d-none d-block text-white' style={styleText.container(matches)}>
                            <h5>Ego sum</h5>
                            <p>
                                2022 <br />
                                techniques variées, <br />
                                100x80cm
                            </p>
                        </div>
                        <MDBCarouselElement src={tableau12} alt='...' style={styles.container(matches)} />
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

export default Album1