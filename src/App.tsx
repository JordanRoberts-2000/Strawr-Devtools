// import { invoke } from "@tauri-apps/api/tauri";

import { Route } from "@solidjs/router";
import NotesPage from "./pages/NotesPage";
import RootLayout from "./layouts/RootLayout";
import ComponentPage from "./pages/ComponentPage";
import FontsPage from "./pages/FontsPage";
import SvgsPage from "./pages/SvgsPage";
import ImagesPage from "./pages/ImagesPage";
import TodosPage from "./pages/TodosPage";
import ProjectsPage from "./pages/ProjectsPage";
import SettingsPage from "./pages/SettingsPage";

function App() {
  // async function greet() {
  //   // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  //   // await invoke("greet", { name: name() });
  // }

  return (
    <>
      <Route path="/" component={RootLayout}>
        <Route path={"/"} component={NotesPage}></Route>
        <Route path={"/components"} component={ComponentPage}></Route>
        <Route path={"/fonts"} component={FontsPage}></Route>
        <Route path={"/svgs"} component={SvgsPage}></Route>
        <Route path={"/images"} component={ImagesPage}></Route>
        <Route path={"/todos"} component={TodosPage}></Route>
        <Route path={"/projects"} component={ProjectsPage}></Route>
        <Route path={"/settings"} component={SettingsPage}></Route>
      </Route>
    </>
  );
}

export default App;
