import { createContext, useState, type ReactElement } from "react";

export const DashBoardBodyContext = createContext({});

export function DashBoardBodyContextProvider({ children }: {children: ReactElement}){

    const [openAddContent,setOpenAddContent] = useState(false);
    const [openShareBrain,setOpenShareBrain] = useState(false);

    return (
        <DashBoardBodyContext value={{
            openAddContent: openAddContent,
            setOpenAddContent: setOpenAddContent,
            openShareBrain: openShareBrain,
            setOpenShareBrain: setOpenShareBrain
        }}>
            {children}
        </DashBoardBodyContext>
    )
}