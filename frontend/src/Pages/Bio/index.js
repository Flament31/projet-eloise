import Header from "../../Components/Header";
import Biographie from "../../Components/Biographie";

const Bio = () => {

    return (

        <div className="d-flex justify-content-between flex-column flex-sm-row" >
            <div className="mt-2">
                <Header />
            </div>
            <div className="mt-3">
                <Biographie />
            </div>
        </div >

    );
}

export default Bio