import '../App.css';
import Navbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';
const data = require('../data/projects')

export default function Projects() {
    return (
        <div>
            <div className='InnerPage'>
                <hr />
                <Navbar />
                <hr />
                <h1>
                    Here are some cool things I've made.
                </h1>
                <hr />
                {
                    data.map(cardData => <><ProjectCard image={cardData.image} github_link={cardData.github_link} key={cardData.key} title={cardData.title} description={cardData.description} /><hr /></>)
                }
            </div>
        </div >
    )
}