import logoHeader from './FULL-blanc.png'

const Header = () => {
    const handleSidebare = () => {
        const sidebar = document.querySelector("#sidebar");
        sidebar.classList.toggle("active-nav");
    }

    const handleContact = () => {
        const contact = document.querySelector("#contact");
        contact.classList.toggle("active-contact");
    }



    return (
        <div>
            <div className="row mx-1">
                <div className="p-1 my-container active-cont">
                    <button onClick={handleSidebare} className="btn">
                        Menu
                    </button>
                </div>
            </div>
            <div className="side-navbar active-nav d-flex justify-content-between flex-wrap flex-column pb-3" id="sidebar">
                <ul className="nav flex-column text-white w-100">
                    <a href="/" className="nav-link h3 text-white my-2">
                        <div className="bg-transparent" style={{ width: "8rem" }}>
                            <img src={logoHeader} className="card-img-top" alt="logo" />
                        </div>
                    </a>
                    <a href="/Albums" className="nav-link">
                        <span className="mx-2">Albums</span>
                    </a>
                    <a href="/Bio" className="nav-link">
                        <span className="mx-2">Qui suis-je ?</span>
                    </a>
                    <div onClick={handleContact} className="btn text-primary nav-link text-left">
                        <span className="mx-2">Contact</span>
                    </div>
                </ul>
            </div>
            <div className="side-navbar active-contact d-flex justify-content-between flex-wrap flex-column py-3" id="contact">
                <div className="flex-column text-white w-100">
                    <div className="mx-3 ml-3 text-right" >
                        <div onClick={handleContact} className="carousel-control-prev-icon"></div>
                    </div>
                    <p className="mx-3">
                        email:<br />
                        <em className="text-primary">eloisemolinie.art@gmail.com</em>
                    </p>
                    <p className="mx-3">
                        instagram:<br />
                        <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Feloise_molinie%2F%3Ffbclid%3DIwAR29ck9lIggL4sgD-Jv-ap1drqqz-kZBL2woBDzUMfEyswBvee-U0zbtnWk&h=AT25ysIgr3IRdBN_xJ9OZCr9Kcb07gPaLKDGtyEYxFT30KF-QGyvU91zcnHaXYbNU4tZzjr-LwK-3QxV7jlL3CoKZ3dqDWVeUV8f2KayRL4saJ-zYnG9XHglePJA3yoiJ9G4BcIiHefdDProlbvwsA">Visiter</a>

                    </p>
                    <p className="mx-3">
                        Passer commande:<br />
                        <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fforms.gle%2FbzCxjhdezWMXiqdC6%3Ffbclid%3DIwAR2vrYNTpyNPfgV56D2zpkGU5NO26_XUtxNxNvig3ulW2nu18E4BtcEEiuY&h=AT25ysIgr3IRdBN_xJ9OZCr9Kcb07gPaLKDGtyEYxFT30KF-QGyvU91zcnHaXYbNU4tZzjr-LwK-3QxV7jlL3CoKZ3dqDWVeUV8f2KayRL4saJ-zYnG9XHglePJA3yoiJ9G4BcIiHefdDProlbvwsA">Cliquez ici</a>
                    </p>
                </div>
            </div>


        </div>


    );

}

export default Header