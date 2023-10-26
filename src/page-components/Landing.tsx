import React, { useState, useEffect } from "react";
import Banner from "./Banner";


export default function Landing () {

    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 5000);
  
      return () => clearTimeout(timer);
    }, [showBanner]);


    return (
        <>
            {showBanner && <Banner/>}
        </>

    );
}


