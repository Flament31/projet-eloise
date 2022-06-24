import photo from './eloise-1.jpg';

const Biographie = () => {

    return (
        <div className='d-flex justify-content-around flex-wrap'>
            <div className="card border border-dark rounded border-right border-top shadow mx-3 mb-5 bg-body">
                <div className="card-body d-flex flex-column flex-sm-row">
                    <img src={photo} className="card-img" alt="..." style={{ width: "18rem" }} />
                    <div className='d-flex flex-column m-1'>
                        <h3 className="h3 mb-4">A propos de moi</h3>
                        <div className='d-flex flex-column text-justify'>
                            <p className="card-text">
                                Lorem ipsum dolor sit amet. Est deserunt quod vel voluptatibus consequatur id rerum architecto.
                                Ut necessitatibus earum est beatae provident qui esse explicabo non fuga eveniet aut voluptatem
                                illo id doloribus aliquam. Ab doloremque aspernatur eos voluptas nihil et quasi nulla et
                                aliquid minima sed vero velit. Est delectus aliquid ab ipsa nobis qui sapiente repudiandae.
                            </p>
                            <p className='card-text'>
                                Est assumenda dolores eum reprehenderit accusamus et sint tempore in sapiente facere rem
                                numquam assumenda. 33 adipisci minus et animi necessitatibus eos earum repellat aut pariatur
                                debitis. Et inventore voluptas et error nulla et officia illo. Sed dolorem eaque aut
                                repudiandae tempora id consequatur eius ab quos dolorum qui aperiam vitae in quas deserunt.
                            </p>
                            <p className='card-text'>
                                Et fuga tempore et quae impedit est cupiditate impedit sed incidunt adipisci et facere
                                excepturi tenetur exercitationem. Ut quos officia non dicta omnis et voluptas nesciunt
                                quo repellat culpa et libero cumque est corporis recusandae.
                            </p>
                        </div>

                    </div>

                </div>
            </div>
        </div>

    )
};

export default Biographie