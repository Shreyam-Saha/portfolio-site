
import developingLogo from '../../assets/developing.svg'
import './Projects.css'


function Projects(){
    return(<div className="progress-page"><div>
        <img src={developingLogo} alt="Development in Progress" className="progress-image" />
     </div>
     <h2>Work in Progress</h2>       
     </div>);
}

export default Projects;