import './App.css';
import Column from './components/Column/Column'

let todo = [];
let inProgress = [];
let backlog = [];
let mockData = [];

await fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
.then(response => response.json())
.then(data => populateResponse(data));


   function populateResponse(data) {

    for (const x of data.tickets) { 

      if(x.status === 'Todo'){
        todo.push(x)
      } else if(x.status === 'In progress'){
        inProgress.push( x )
      } else if(x.status === 'Backlog'){
        backlog.push( x )
      }
    }


  let inprogressData = {};
  inprogressData.title = 'InProgress';
  inprogressData.tasks = [];
  for (const x of inProgress) {
    let temp = {};
    temp.id = x.id;
    temp.title = x.title;
    inprogressData.tasks.push(temp)
  }

  inprogressData.color = 'orange'
  inprogressData.input = ''


  let todoData = {};
  todoData.title = 'ToDo';
  todoData.tasks = [];
  for (const x of todo) {
    let temp = {};
    temp.id = x.id;
    temp.title = x.title;
    todoData.tasks.push(temp)
  }

  todoData.color = 'purple'
  todoData.input = ''


  let backlogData = {};
  backlogData.title = 'Backlog';
  backlogData.tasks = [];
  for (const x of backlog) {
    let temp = {};
    temp.id = x.id;
    temp.title = x.title;
    backlogData.tasks.push(temp)
  }

  backlogData.color = 'red'
  backlogData.input = ''

   mockData.push(todoData);
  mockData.push(inprogressData);
  mockData.push(backlogData);

  console.log(mockData)
  }

const getColumnSection = () => (
  <section className="columns">
    <Column
      itemList={mockData[0].tasks}
      colTitle={mockData[0].title}
      color={mockData[0].color}
      />
    <Column
      itemList={mockData[1].tasks}
      colTitle={mockData[1].title}
      color={mockData[1].color}
      />
    <Column
      itemList={mockData[2].tasks}
      colTitle={mockData[2].title}
      color={mockData[2].color}
      />
  </section>
);

function App() {

  return (
    <div className="app">
      <header className="header">
        <h2>
          Kanban Board
        </h2>
      </header>

      {getColumnSection()}
      
    </div>
  );
}

export default App;
