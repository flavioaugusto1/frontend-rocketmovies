import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Details } from "../pages/Details";
import { New } from "../pages/New";
import { Profile } from "../pages/Profile";
import { Update } from "../pages/Update";
import { Error } from "../pages/Error";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/new" element={<New />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/update/:id" element={<Update />} />

      <Route path="*" element={<Error />} />
    </Routes>
  );
}
