import { Route, Routes } from "react-router";
import { Home } from "./pages/Home";
import { AboutUs } from "./pages/AboutUs";
import { MyMovies } from "./pages/MyMovies";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
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
          <Routes>
            <Route index element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/my-movies" element={<MyMovies />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        </main>
      </SidebarProvider>
    </>
  )
}

export default App

