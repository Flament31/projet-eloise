import { useEffect, useState } from 'react';
import {
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBCarouselElement,
} from 'mdb-react-ui-kit';
import tableau1 from './si_jamais.jpg';
import tableau2 from './entre_deux.jpg';
import tableau3 from './peut_etre.jpg';
import tableau4 from './trop_tard.jpg';
import tableau5 from './au_bout.jpg';


const Album4 = () => {

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
                            <h5>Si jamais</h5>
                            <p>
                                2018<br />
                                enduit et acrylique,<br />
                                100x50cm,<br />
                                collection personnelle
                            </p>
                        </div>
                        <MDBCarouselElement src={tableau1} alt='...' style={styles.container(matches)} />
                    </MDBCarouselItem>

                    <MDBCarouselItem>
                        <div className='carousel-caption d-none d-block text-white' style={styleText.container(matches)}>
                            <h5>Entre deux</h5>
                            <p>
                                2018-2019<br />
                                enduit et acrylique,<br />
                                100x50cm
                            </p>
                        </div>
                        <MDBCarouselElement src={tableau2} alt='...' style={styles.container(matches)} />
                    </MDBCarouselItem>
                    <MDBCarouselItem className='active'>
                        <div className='carousel-caption d-none d-block text-white' style={styleText.container(matches)}>
                            <h5>Peut-être</h5>
                            <p>
                                2019<br />
                                enduit et acrylique,<br />
                                100x50cm
                            </p>
                        </div>
                        <MDBCarouselElement src={tableau3} alt='...' style={styles.container(matches)} />
                    </MDBCarouselItem>

                    <MDBCarouselItem>
                        <div className='carousel-caption d-none d-block text-white' style={styleText.container(matches)}>
                            <h5>Trop tard</h5>
                            <p>
                                2019<br />
                                enduit et acrylique,<br />
                                100x50cm
                            </p>
                        </div>
                        <MDBCarouselElement src={tableau4} alt='...' style={styles.container(matches)} />
                    </MDBCarouselItem>
                    <MDBCarouselItem>
                        <div className='carousel-caption d-none d-block text-white' style={styleText.container(matches)}>
                            <h5>Au bout</h5>
                            <p>
                                2019<br />
                                enduit et acrylique,<br />
                                100x50cm
                            </p>
                        </div>
                        <MDBCarouselElement src={tableau5} alt='...' style={styles.container(matches)} />
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

export default Album4