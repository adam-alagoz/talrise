import NotFoundPage from "../../pages/GeneralPages/Page404/NotFoundPage";
import { titleCase } from "../functions/utility";

export const apiError={
 401:"SESSION_EXPIRED",
 404:"NOT_FOUND"
}

export const handleError=(status,statusText)=>{
  const error=apiError[status]
  let message=`The server responded with the error status "${status}: ${statusText}"`;
  let cause ="UNKOWN"
  if(error){
    message= titleCase(error,"_")
    cause= error;
  }
  throw new Error(message,{cause})
}

export const ApiErrorHandler=({error})=>{

  if(error.cause===404){
    return <NotFoundPage/>
  }else if(error.cause ===401){
    // TODO: Session Timeout Page will be implemented here
    return <p>Session TimeOut Page</p>
  }
  // TODO: LoadingError Page will be implemented here
  return <p>Loading Error</p>
}