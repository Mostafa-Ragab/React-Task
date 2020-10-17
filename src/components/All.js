import React from 'react';
import './all.style.css'
import Tables from './tables/tables'

export const All = ()=>{ 
    return(
        <Tables status={''}/>
    )   
};

export const IntialAcceptance = ()=>{ 
    return(
        <Tables status={"Intial Acceptance"}/>
    )
};

export const Rejected = ()=>{ 
    return(
        <Tables status={'Rejected'}/>
    )   
};

export const UnderReview = ()=>{ 
    return(
        <Tables status={'Under Review'}/>
    )
};

export const ConditionalAcceptance = ()=>{ 
    return(
        <Tables status={'Conditional Acceptance'}/>
    ) 
}
