import { useNavigate } from "react-router-dom"
import img2 from "../assets/image/image2.jpg"
import img3 from "../assets/image/image3.jpg"
import img4 from "../assets/image/image4.jpg"
export default function Header() {
    const Navigate = useNavigate()
    const token = localStorage.getItem("token")
    return (
        <>
            <nav className="navbar fixed-top" style={{ padding: 0 }}>
                <div className="container-fluid" style={{ padding: "15px 85px 15px 83px" }}>
                    <a className="navbar-brand logo text-light" href="#">LOGO</a>
                    {!token ? <button className="sign-in-btn" onClick={() => Navigate("/signin")}>Sign In</button>
                        : <button className="sign-in-btn" onClick={() => {
                            localStorage.setItem('token','')
                            localStorage.clear()
                            Navigate("/signin")
                            }}>Logout</button>}
                </div>
            </nav>

            {/* <!-- Carousel --> */}
            <div id="beachCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#beachCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#beachCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#beachCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>

                <div className="carousel-inner">
                    <div
                        className="carousel-item active"
                        style={{
                            backgroundImage: `url(${img2})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '500px', // adjust as needed
                        }}
                    >
                        <div className="carousel-caption">
                            <div className="adventure-tag">ADVENTURE</div>
                            <h1>Richird Norton photorealistic rendering as real photos</h1>
                            <div className="date-info">
                                1 Jan 2023 — Progressively incentivize cooperative systems through technically sound functionalities. The credibly productive seamless data.
                            </div>
                        </div>
                    </div>

                    <div
                        className="carousel-item"
                        style={{
                            backgroundImage: `url(${img3})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '600px',
                        }}
                    >
                        <div className="carousel-caption">
                            <div className="adventure-tag">ADVENTURE</div>
                            <h1>Explore amazing underwater photography</h1>
                            <div className="date-info">
                                15 Jan 2023 — Distinctively exploit optimal alignments for intuitive bandwidth. Quickly coordinate e-business applications through seamless data.
                            </div>
                        </div>
                    </div>

                    <div
                        className="carousel-item"
                        style={{
                            backgroundImage: `url(${img4})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '500px',
                        }}
                    >
                        <div className="carousel-caption">
                            <div className="adventure-tag">ADVENTURE</div>
                            <h1>Discover hidden beaches around the world</h1>
                            <div className="date-info">
                                30 Jan 2023 — Appropriately implement customized leadership skills vis-a-vis holistic infomediaries. Competently scale team driven innovation.
                            </div>
                        </div>
                    </div>
                </div>

                {/* Optional navigation controls */}
                {/* <button className="carousel-control-prev" type="button" data-bs-target="#beachCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#beachCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button> */}
            </div>

        </>
    );
}