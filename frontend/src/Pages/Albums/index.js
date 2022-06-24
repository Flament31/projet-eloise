import Header from "../../Components/Header";
import Album from "../../Components/Album";

const Albums = () => {


    return (

        <div id="albums" className="d-flex justify-content-between flex-column flex-sm-row" >
            <div className="mt-2">
                <Header />
            </div>
            <div className="mt-3">
                <Album />
            </div>
        </div >

    );
}

export default Albums