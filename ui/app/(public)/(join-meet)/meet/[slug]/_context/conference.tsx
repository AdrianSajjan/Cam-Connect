import * as React from "react";

export interface IConferenceContext {
  code: string;
}

export const ConferenceContext = React.createContext<IConferenceContext | undefined>(undefined);

export const ConferenceProvider = ConferenceContext.Provider;
export const ConferenceConsumer = ConferenceContext.Consumer;

export function useConferenceState() {
  const state = React.useContext(ConferenceContext);
  if (!state) throw "Please wrap your component in ConferenceProvider";
  return state;
}
