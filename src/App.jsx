import { Route, Routes } from "react-router";
import { Home } from "./pages/Home";
import { AboutUs } from "./pages/AboutUs";
import { MyMovies } from "./pages/MyMovies";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { SideBar } from "./components/SideBar/SideBar.jsx";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

import { MoviesContextProvider } from "./contexts/MoviesContext";


function App() {
  return (
    <>
      <MoviesContextProvider>
        <SidebarProvider>
          <SideBar />
          <header>
          </header>
          <main>
            <SidebarTrigger variant="default" className="md:hidden size-11 cursor-pointer" />
            <Routes>
              <Route index element={<Home />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/my-movies" element={<MyMovies />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUp />} />
            </Routes>
          </main>
        </SidebarProvider>
      </MoviesContextProvider>
    </>
  )
}

export default App

