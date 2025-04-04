document.addEventListener('DOMContentLoaded', function() {  // 
    const projects = [
      {
        title: 'Project One',
        description: 'Description for project one.',
        link: '#'
      },
      {
        title: 'Project Two',
        description: 'Description for project two.',
        link: '#'
      }
      
    ];
  
    const projectsSection = document.getElementById('projects');
  
    if (projectsSection) {  
      projects.forEach((project) => {  
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');
    
        const projectTitle = document.createElement('h3');
        projectTitle.textContent = project.title;
    
        const projectDesc = document.createElement('p');
        projectDesc.textContent = project.description;
    
        const projectLink = document.createElement('a');
        projectLink.href = project.link;
        projectLink.textContent = "View Project";  
    
        projectDiv.appendChild(projectTitle);
        projectDiv.appendChild(projectDesc);
        projectDiv.appendChild(projectLink);
    
        projectsSection.appendChild(projectDiv);
      });
    }
});
