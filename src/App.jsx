import { SideBar } from "./components/SideBar/SideBar.jsx";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";


function App() {
  return (
    <>
      <SidebarProvider>
        <SideBar />
        <header>
        </header>
        <main>
          <SidebarTrigger />
          {/* components and its routes */}
        </main>
      </SidebarProvider>
    </>
  )
}

export default App

