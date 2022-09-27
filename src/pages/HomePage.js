import Hero from "../components/Hero";
import MySkills from "../components/MySkills";
import PastClients from "../components/PastClients";

export default function HomePage() {
    return (
        <section className="page">
            <Hero/>
            <MySkills/>
            <PastClients/>
        </section>
    )
};