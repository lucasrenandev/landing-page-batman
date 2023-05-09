import home_image1 from "../../assets/home-img1.jpg"
import home_image2 from "../../assets/home-img2.jpg"
import home_image3 from "../../assets/home-img3.jpg"
import home_image4 from "../../assets/home-img4.jpg"
import "../home/home.css"
import { useEffect } from "react"

export default function Home(){
    useEffect(() => {
        const sr = ScrollReveal({
            duration: 2300,
            distance: "50px"
        })

        sr.reveal(".home-text", {delay: 200, origin: "left"})
        sr.reveal(".home-container", {delay: 200, origin: "right"})
    }, [])


    return (
        <section className="home">
            <article className="home-text">
                <h3>Rocksteady studios</h3>
                <h1>Batman arkham <br /> knight</h1>
                <p>Escrita por Sefton Hill, Martin Lancaster e Ian Ball, a história acontece um ano depois dos eventos de Arkham City, em que Batman, no pico máximo das suas habilidades, tem de defrontar o super-vilão Espantalho, que criou um ataque a Gotham City causando a evacuação da cidade.</p>
            </article>{/*End home text*/}

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
        </section>//End home section
    )
}