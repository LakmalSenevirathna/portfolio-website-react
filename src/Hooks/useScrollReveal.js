import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const useScrollReveal = (selector, config) => {
    useEffect(() => {
        ScrollReveal({
            distance: '80px', 
            duration: 2000, 
            delay: 200, 
        }
        ).reveal(selector, config);
    },[]);
};

export default useScrollReveal;