import logo from './FULL-blanc-icone.png'

const Home = () => {
    return (
        <div className="d-flex flex-column align-items-center pt-3 mt-4">
            <div className="bg-transparent" style={{ width: "15rem" }}>
                <img src={logo} className="card-img-top" alt="logo" />
            </div>
            <div className="mt-2 mb-2">
                <h1 className="h1 text-white mt-2 text-center" >Eloïse Molinié, artiste peintre</h1>
            </div>
            <div>
                <button className="btn btn-light">
                    <a href="/Albums" className="text-decoration-none"> Cliquez ici pour entrer ! </a>
                </button>
            </div>
        </div>
    );
};

export default Home