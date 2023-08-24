import '../App.css';
import Navbar from '../components/Navbar';

export default function Dylsite() {
    return (
        <div>
            <div className='InnerPage'>
                <hr />
                <Navbar />
                <hr />
                <h1>Hi, I'm Dylan.</h1>
                <hr />
                <h2>I'm a student of Computer Science at the University of Birmingham, UK</h2>
                <p>I write cool code occasionally. You can check out my projects on <a href='https://github.com/DCoxshall'>GitHub</a>. I've done write-ups for some of the more presentable projects - you can find these on the projects page.</p>

            </div>
        </div>
    )
}
