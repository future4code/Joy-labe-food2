import React from "react";
import { Span } from "./style";


export const ErrorMessage = ( props ) => {
  
  return <Span>{props.errorMsg}</Span>;
};
