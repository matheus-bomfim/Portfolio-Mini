import { Button } from "./style"
function ButtonMain({children,url}){
    return(
        <>
        <Button onClick={()=>window.open(url)}>
        {children}
        </Button>
        </>
    )
}

export default ButtonMain