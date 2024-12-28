import aboutImage from "../assets/about.webp"
const About = () => {
  return (
    <section className="max-w-7xl mx-auto border-b-2 mt-20" id="about">
        <h2 className="text-xl lg:text-3xl tracking-tight text-center uppercase mt-20 mb-12">Unser Team</h2>
            <div className="flex flex-col items-center lg:space-x-8 mx-4 mb-20">
                <div className="mb-8 lg:mb-0">
                    <img src={aboutImage} alt="About VastuSpaze" className="w-full h-auto rounded-lg"/>
                </div>
                <p className="text-lg lg:text-3xl font-light text-center lg:text-left max-w-5xl mx-auto mt-8">
                    
Unser Architekturbüro besteht aus einem kreativen und engagierten Team von acht Fachleuten, die sich durch ihre Expertise in verschiedenen Bereichen der Architektur auszeichnen. Mit einem Mix aus Erfahrung und frischen Ideen entwickeln wir massgeschneiderte Lösungen, die Funktionalität und Ästhetik perfekt miteinander verbinden.
                </p>
            </div>
    </section>
  )
}

export default About