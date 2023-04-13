import { FC, PropsWithChildren } from "react";
import Navigation from "./navigation/Navigation";

const Layout: FC<PropsWithChildren> = ( {children} ) => {
    console.log(children)
    
    return (
        <>
          <Navigation/>
          {children}
        </>
    )
}

export default Layout