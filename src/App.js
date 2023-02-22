import PokemonList from "./pages/pokemonList";
import PokemonDetail from "./component/pokemonDetail";
import PokemonEdit from "./component/pokemonEdit";
import AuthForm from "./component/AuthForm";
import {
  createBrowserRouter,
  BrowserRouter,
  RouterProvider,
  Route,
  Routes
} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useAuth from "./hook/useAuth.js";
import { useEffect } from "react";

function App() {
  const { auth, setUserInfo} = useAuth();

  console.log("APP", auth);
  // useEffect(()=>
  // setUserInfo({
  //   name: "Nicolas",
  //   lastname: "LE BERRE"
  //  }))

  return (
   <>
   { setUserInfo.name && setUserInfo.lastname ? (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PokemonList />} />
          <Route path="pokemon/:id" element={<PokemonDetail />} />
          <Route path="pokemon/:id/edit" element={<PokemonEdit />} />
          <Route path="login" element={<AuthForm />} />
          {/* <Route path="pokemon/:id/delete" element={<PokemonDelete />} /> 
          <Route path="pokemon/add" element={<PokemonAdd />} />*/}
        </Routes>
      </BrowserRouter>
    ) : (
       <AuthForm/>
    )}
   </>
  );
}

export default App;