import tableau1 from "./salva_me.jpg";
import tableau2 from "./votre_clarte.jpg";
import tableau3 from "./rester.jpg";
import tableau4 from "./entre_deux.jpg";
import tableau10 from "./breathe_in.jpg";

const Album = () => {
    return (
        <div className="d-flex justify-content-around flex-wrap">
            <div className="card border border-dark rounded mx-3 mb-5" style={{ width: "18rem" }}>
                <a href="album-2022">
                    <img src={tableau1} className="card-img-top" alt="tableau1" />
                    <div className="card-body">
                        <h5 className="h5">ART&FOI</h5>
                        <p className="card-text">2021/2022</p>
                    </div>
                </a>
            </div>
            <div className="card border border-dark rounded mx-3 mb-5" style={{ width: "18rem" }}>
                <a href="album-2021">
                    <img src={tableau2} className="card-img-top" alt="tableau2" />
                    <div className="card-body">
                        <h5 className="h5">VOUS NE SAUREZ JAMAIS</h5>
                        <p className="card-text">2020/2021</p>
                    </div>
                </a>
            </div>
            <div className="card border border-dark rounded mx-3 mb-5" style={{ maxWidth: "22rem" }}>
                <a href="album-2020">
                    <img src={tableau3} className="card-img-top" alt="tableau3" />
                    <div className="card-body">
                        <h5 className="h5">RESTER</h5>
                        <p className="card-text">2019/2020</p>
                    </div>
                </a>
            </div>
            <div className="card border border-dark rounded mx-3 mb-5" style={{ width: "18rem" }}>
                <a href="album-2019">
                    <img src={tableau4} className="card-img-top" alt="tableau4" />
                    <div className="card-body">
                        <h5 className="h5">ICARE</h5>
                        <p className="card-text">2018/2019</p>
                    </div>
                </a>
            </div>
            <div className="card border border-dark rounded mx-3 mb-5" style={{ maxWidth: "28rem" }}>
                <a href="album-2017">
                    <img src={tableau10} className="card-img-top" alt="tableau10" />
                    <div className="card-body">
                        <h5 className="h5">AS THE DAWN BREAKS</h5>
                        <p className="card-text">2016/2017</p>
                    </div>
                </a>
            </div>
        </div>
    )
};

export default Album;