// import { invoke } from "@tauri-apps/api/tauri";

import MainNavbar from "./features/mainNavigation/MainNavbar";
import NotesPage from "./pages/NotesPage";

function App() {
  // async function greet() {
  //   // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  //   // await invoke("greet", { name: name() });
  // }

  return (
    <>
      <NotesPage/>
      <MainNavbar/>
    </>
  );
}

export default App;
