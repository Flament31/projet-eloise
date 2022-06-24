import { useEffect, useState } from 'react';
import {
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBCarouselElement,
} from 'mdb-react-ui-kit';
import tableau1 from './votre_clarte.jpg';
import tableau2 from './votre_serenite.jpg';


const Album2 = () => {

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
                            <h5>Votre clarté</h5>
                            <p>
                                2020<br />
                                techniques variées,<br />
                                74x57cm
                            </p>
                        </div>
                        <MDBCarouselElement src={tableau1} alt='...' style={styles.container(matches)} />
                    </MDBCarouselItem>

                    <MDBCarouselItem>
                        <div className='carousel-caption d-none d-block text-white' style={styleText.container(matches)}>
                            <h5>Votre sérénité</h5>
                            <p>
                                2020/2021 <br />
                                techniques variées, <br />
                                74x57cm
                            </p>
                        </div>
                        <MDBCarouselElement src={tableau2} alt='...' style={styles.container(matches)} />
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

export default Album2