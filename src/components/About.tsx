
import { useSearch } from '@tanstack/router';
const About = () => {

    const match = useSearch();
    console.log(match);

    return (
        <div>
            <h1>This About page</h1>
        </div>
    );
};

export default About;