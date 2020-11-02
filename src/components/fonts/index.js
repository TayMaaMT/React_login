export const  H1 = (props)=>{
        const {children,color,fontSize}=props;
        return <h1 style={{color,fontSize}} >{children}</h1>
}

export const  H3 = (props)=>{
    const {children,color,fontSize}=props;
    return <h3 style={{color,fontSize}} >{children}</h3>
}

export const  Subtitle = (props)=>{
    const {children,color,fontSize}=props;
    return <h3 style={{color,fontSize}} >{children}</h3>
}

export const  P = (props)=>{
    const {children,color,fontSize,fontWeight,Link}=props;
return <p style={{color,fontSize,fontWeight}} >{children}{Link}</p>
}
