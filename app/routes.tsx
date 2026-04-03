// app/routes.tsx
import { Routes, Route } from "react-router";
import Layout from "./routes/layout";
import Home from "./routes/home";
import CV from "./routes/cv";
import BlogPost from "./routes/blog/$slug";
import ErrorPage from "./routes/error-page";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path = "/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="cv">
          <Route index element={<CV />} />
        </Route>

        <Route path="blog">
          <Route path=":slug" element={<BlogPost />} />
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}