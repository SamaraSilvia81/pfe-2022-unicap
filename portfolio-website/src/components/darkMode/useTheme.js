import { useEffect } from "react";
import useThemeStore from "../darkMode/useThemeStore";
import { applyThemePreference } from "../darkMode/themeUtils";

const selector = (state) => state.theme;
export const useTheme = () => {
  const theme = useThemeStore(selector);
  useEffect(() => {
    applyThemePreference(theme);
  }, [theme]);
};