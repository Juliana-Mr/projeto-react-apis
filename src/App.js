import { Router } from "./routes/Router";
import { GlobalState } from "./contexts/GlobalState";
import { ChakraProvider } from "@chakra-ui/react";



const App = () => {

return(
  <div>
  <ChakraProvider resetCSS>
  <GlobalState>
  <Router/>
  </GlobalState>
  </ChakraProvider>
  </div>
)
}

export default App

