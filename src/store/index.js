import { configureStore } from "@reduxjs/toolkit";

import user from "./user";
import section from "./section";

export const store = configureStore({
  reducer: { user: user, section: section },
});
