import { SettingsReducer } from "./SettingsReducer";
import * as SystemOperations from "../Logic/SystemOperations";

export function getDefaultState() {
  return {
    "info": {
      "hostname": window.lightdm.hostname,
      "language": window.lightdm.language
    },
    "user": SystemOperations.findInitialUser(),
    "session": SystemOperations.findInitialSession()
  };
}

export const PrimaryReducer = (state, action) => {
  if (action.type.startsWith("SETTINGS")) {
    return SettingsReducer(state, action);
  }

  switch (action.type) {
    case "CHANGE_WALLPAPER":
      return state;

    default:
      return state;
  }
};
