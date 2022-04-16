import {Project} from './Project';
import React from 'react';
import PropTypes from 'prop-types';


function limitChar60(description){
    return description.substring(0,60)+'... ';
}

// EventHandler

// Create ProjectCard function
function ProjectCard(props){
    const {project,onEdit} = props
    const handleEditClick = (projectEdited) =>{
      {onEdit(projectEdited)};
    }
  
    return (
        <div className="card">
            <img src={project.imageUrl} alt={project.name}></img>
            <section class="section dark">
              <h5 class="strong">
                <strong>{project.name}</strong>
              </h5>
              <p>{limitChar60(project.description)}</p>
              <p>Budget: {project.budget.toLocaleString()}</p>
              <button className='bordered' onClick={() => {
                handleEditClick(project);
              }}>
                <span className='icon-edit'></span>
                Edit
              </button>
            </section>
          </div>
    )
}

ProjectCard.propTypes = {
    project: PropTypes.instanceOf(Project).isRequired,
    onEdit: PropTypes.func.isRequired,
}

export default ProjectCard;
