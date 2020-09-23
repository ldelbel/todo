import projectCard from './components/Project';

export const renderMain = (content) => {
  const main = document.querySelector('.main');
  main.innerHTML = '';
  main.appendChild(content);
};


export const renderList = (parent, projects) => {
  parent.innerHTML = '';
  projects.map((project, index) => {
    const projectLink = document.createElement('a');
    projectLink.classList.add('nav-link', 'project');
    projectLink.setAttribute('data-index', index);
    projectLink.innerHTML = project.name;
    const linkBadge = document.createElement('span');
    linkBadge.classList.add('badge', 'badge-light');
    linkBadge.text = project.taskCount;
    projectLink.appendChild(linkBadge);
    projectLink.addEventListener('click', (e) => {
      e.preventDefault();
      const index = projectLink.getAttribute('data-index');
      const view = projectCard(projects[index]);
      renderMain(view);
    });
    parent.appendChild(projectLink);
    return parent;
  });
};
