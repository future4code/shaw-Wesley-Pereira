import AddRecipesPage from "./pages/AddRecipesPage/AddRecipesPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RecipeDetailPage from "./pages/RecipeDetailPage/RecipeDetailPage";
import RecipesListPage from "./pages/RecipesListPage/RecipesListPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";


export default function App() {
  return (
    <div>
      <AddRecipesPage />
      <LoginPage />
      <RecipeDetailPage />
      <RecipesListPage />
      <SignUpPage />
    </div>
  );
}


