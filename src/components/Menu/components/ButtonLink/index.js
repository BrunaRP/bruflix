import React from 'react';

function ButtonLink(props){
    // props  => {className: "o que alguém passar", href: "/"}
    console.log(props);
    return(
        <a href={props.href} className={props.className}>
            Novo vídeo
        </a>
    );
     
}

export default ButtonLink; //pra poder usar em outro lugares