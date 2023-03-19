import home_image1 from "../../assets/home-img1.jpg"
import home_image2 from "../../assets/home-img2.jpg"
import home_image3 from "../../assets/home-img3.jpg"
import home_image4 from "../../assets/home-img4.jpg"
import Fade from "react-reveal/Fade"
import "../home/home.css"

const Home = () => {
    return (
        <section className="home">
            <Fade left distance="80px" duration={1500} delay={200} >
                <article className="home-text">
                    <h3>Rocksteady studios</h3>
                    <h1>Batman arkham <br /> knight</h1>
                    <p>Escrita por Sefton Hill, Martin Lancaster e Ian Ball, a história acontece um ano depois dos eventos de Arkham City, em que Batman, no pico máximo das suas habilidades, tem de defrontar o super-vilão Espantalho, que criou um ataque a Gotham City causando a evacuação da cidade.</p>
                </article>{/*End home text*/}
            </Fade>

            <Fade right distance="80px" duration={1500} delay={200}>
                <main className="home-container">
                    <figure className="home-box">
                        <img src={home_image1} alt="Home image 1" />
                    </figure>{/*End home box*/}

                    <figure className="home-box">
                        <img src={home_image2} alt="Home image 2" />
                    </figure>{/*End home box*/}

                    <figure className="home-box">
                        <img src={home_image3} alt="Home image 3" />
                    </figure>{/*End home box*/}

                    <figure className="home-box">
                        <img src={home_image4} alt="Home image 4" />
                    </figure>{/*End home box*/}
                </main>{/*End home container*/}
            </Fade>
        </section>//End home section
    )
}

export default Home