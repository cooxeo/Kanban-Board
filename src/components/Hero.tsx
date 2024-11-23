// import Card from "./Card.tsx";
import Todo from "./Todo.tsx";
import Status from "./Status.tsx";
import Inprogress from "./Inprogress.tsx";
import Done from "./Done.tsx";
import Canclled from "./canclled.tsx";

const HeroSection = () => {
    return(
        <section className="hero_section">
            <Status/>
            <Todo/>
            <Inprogress/>
            <Done/>
            <Canclled/>
        </section>
    );
};
export default HeroSection;
