import { Route, Routes } from "react-router";

import { Home } from "./pages/Home";
import { AboutUs } from "./pages/AboutUs";
import { MyMovies } from "./pages/MyMovies";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { SideBar } from "./components/SideBar/SideBar.jsx";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

import { MoviesContextLayout } from "./contexts/MoviesContextLayout";
import { MoviesQueryContextProvider } from "./contexts/MoviesQueryContext";

function App() {
  return (
    <>
      <MoviesQueryContextProvider>
        <SidebarProvider>
          <SideBar />
          <header>
          </header>
          <main>
            <SidebarTrigger variant="default" className="md:hidden size-11 cursor-pointer" />
            <Routes>
              <Route element={<MoviesContextLayout />}>
                <Route index element={<Home />} />
                <Route path="/my-movies" element={<MyMovies />} />
              </Route>

              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUp />} />
            </Routes>
          </main>
        </SidebarProvider>
      </MoviesQueryContextProvider>
    </>
  )
}

export default App

