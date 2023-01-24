import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

interface IHelemet{
  state:string;
  loading:boolean;
  infoData:string | undefined;
}

const HelmetCom = ({state,loading,infoData}:IHelemet) => {
  return (
    
      <Helmet>
        <title>{state ? state : loading ? "Loading.." : infoData}</title>
      </Helmet>
    
  );
};

export default HelmetCom;
