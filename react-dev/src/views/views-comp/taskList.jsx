import "../vc-css/taskList.css";
import {
  PanelLeft,
  ListTodo,
  CalendarDays,
  Table,
  Plus,
  Search,
  Filter,
  Wrench,
} from "lucide-react";
function TaskList() {
  return (
    <>
      <div className="task-container">
        <div className="task-both-list">
          <div className="task-list">
            <ul>
              <li>
                <PanelLeft size={24} />
                <span>boards</span>
              </li>
              <li>
                <ListTodo size={24} />
                <span>list</span>
              </li>
              <li>
                <CalendarDays size={24} />
                <span>calendar</span>
              </li>
              <li>
                <Table size={24} />
                <span>table</span>
              </li>
              <li>
                <Plus size={24} />
                <span>view</span>
              </li>
            </ul>
          </div>
          <div className="task-list-right">
            <ul>
              <li>
                <Search size={24} />
                <span>search</span>
              </li>
              <li>
                <Filter size={24} />
                filter
              </li>
              <li>
                <Wrench size={24} />
                customize
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default TaskList;
