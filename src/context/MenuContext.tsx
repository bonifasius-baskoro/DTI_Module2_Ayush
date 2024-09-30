import React, {createContext, useState, useContext, ReactNode} from 'react';


interface MenuContextType{
    isMenuVisible : boolean;
    toggleMenu:()=>void;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

interface MenuProviderProps{
    children: ReactNode;
}

export function MenuProvider({children} : MenuProviderProps){
    const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);

    const toggleMenu=()=>{
        setIsMenuVisible(!isMenuVisible);
    };

    return (
        <MenuContext.Provider value={{isMenuVisible, toggleMenu}}>
            {children}
        </MenuContext.Provider>
    );
}

export function useMenu(): MenuContextType{
    const context= useContext(MenuContext);
    if(context=== undefined){
        throw new Error('useMenu must be used within MenuProvider')
    }
    return context;
}