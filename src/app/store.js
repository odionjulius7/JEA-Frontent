import { configureStore } from "@reduxjs/toolkit";
import propertReducer from "../features/Property/propertySlice";

export const store = configureStore({
  reducer: {
    property: propertReducer,
  },
});
