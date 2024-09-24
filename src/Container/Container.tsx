import { ReactNode } from "react";

type TContainerPrpos ={
    className?:string;
    children:ReactNode
}

const Container = ({className,children}:TContainerPrpos) => {
    return (
        <div className={`${className} container px-1 mx-auto `}>
             {children}
        </div>
    );
};

export default Container;