import { createContext } from "react";
import { AppContextType } from "../Utils/types";

export const AppContext = createContext<AppContextType | undefined>(undefined);
