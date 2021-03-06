const express = require('express');

const server = express();

server.use(express.json());

const projects = [];
var numberOfRequest = 0;


/**
 * MIDLEWARES 
 */

function checkProjectExists(req,res, next){
  const { id } = req.params;
  const project = projects.find(p => p.id == id);


  if (!project){
    return res.status(400).json({ error: 'Project not found'});
  }

  return next();

}

function logResquests(req, res, next){
  numberOfRequest++;

  console.log(`Number of requests: ${numberOfRequest}`);

  return next();
}

server.use(logRequests);

 /**
  * PROJECTS
  */

// List all user
server.get('/projects', (req, res) => {
  return res.json(projects);
})

//List a user
server.get('/projects/:index', (req, res) => {
  const { index } = req.params;
  return res.json(projects[index]);
})

// Create Project
server.post('/projects', (req, res) => {
  const { id, title } = req.body;

  const project = {
  id,
  title,
  tasks: []
  };

  projects.push(project);

  return res.json(project);
})

// change only the project title with the id present in the route parameters
server.put('/projects/:id', checkProjectExists, (req, res) => {
  const { id } = req.params;

  const { title } = req.body;

  const project = projects.find(P => p.id === id);

  project.title = title;

  return res.json(project);
})

// delete the project with the id present in the route parameters
server.delete('projects/:id', checkProjectExists, (req, res) => {
  const { id } = req.params;

  const projectIndex = projects.findIndex(x => x.id === id);

  projectIndex.splice(index, 1);

  return res.send();
})

 /**
   * TASKS
   */

// store a new task in the task array
server.post('projects/:id/tasks', (req, res) => {
  const { id } = req.params;

  const { title } = req.body;

  const project = projects.find(p => p.id == id);

  project.tasks.push(title);

  return res.json(project);
 
})

 

server.listen(3000);