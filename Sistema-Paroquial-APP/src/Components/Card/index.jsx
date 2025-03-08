import React from "react";
import * as S from "./style"

function Card1(props){
        return(
            <S.CardStyle>
                <div className="card mb-3">
                    <h3 className="card-header">{props.title}</h3>
                    <div className="card-body">
                        {props.children}

                    </div>
                </div>
            </S.CardStyle>

        )
    
}

export default Card1