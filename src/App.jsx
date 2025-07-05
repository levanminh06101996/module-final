import { BrowserRouter as Router } from "react-router-dom";
import ScrollTop from "./components/ScrollTop";
import AppRoutes from "./components/AppRoutes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <ScrollTop />
        <AppRoutes />
      </Router>
    </QueryClientProvider>
  );
}

export default App;
