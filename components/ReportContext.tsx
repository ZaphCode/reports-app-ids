import { createContext, PropsWithChildren, useContext, useState } from "react";
import { INITIAL_REPORTS, Report } from "../data";

type AppScreen = "feed" | "add";

export type ReportContextType = {
  uiScreen: AppScreen;
  reports: Report[];
  addReport: (report: Report) => void;
  setUiScreen: (screen: AppScreen) => void;
};

const reportContext = createContext<ReportContextType>({} as ReportContextType);

export default function ReportCtxProvider({ children }: PropsWithChildren) {
  const [reports, setReports] = useState<Report[]>(INITIAL_REPORTS);
  const [uiScreen, setUiScreen] = useState<AppScreen>("feed");

  const addReport = (report: Report) => {
    setReports((prev) => [report, ...prev]);
  };

  return (
    <reportContext.Provider
      value={{ reports, addReport, uiScreen, setUiScreen }}
    >
      {children}
    </reportContext.Provider>
  );
}

export const useReportCtx = () => useContext(reportContext);
