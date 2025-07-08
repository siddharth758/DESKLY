import CheckListNavbar from "./views-comp/checklistNavbar";
import { Outlet } from "react-router-dom";

function TaskListView() {
  return (
    <>
      <div>
        <CheckListNavbar />
        <Outlet />
      </div>
    </>
  );
}

export default TaskListView;
