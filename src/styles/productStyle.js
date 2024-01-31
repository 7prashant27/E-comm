import { css } from '@emotion/css'

export const productStyle = css`
position: relative;
        width:350px;
        min-height:250px;
        padding: 10px;
        font-size: 24px;
        border-radius: 14px;
        border:1px solid black;
        padding:1px solid black;
        margin:10px;
        img {
                width:200px;
                height:200px;
        }
        h4{
                max-width: 100%;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
        }
        h4:hover {
                white-space: normal; /* Display the entire text on hover */
              }
        p{
                font-weight: 150;
                margin:10px;
        }
        
        button{ 
                background-color: hotpink;
        }

`


export const productDetailStyle = css `

        flex-direction:row;
        width:98%;
        min-height:250px;
        padding: 10px;
        font-size: 24px;
        border-radius: 4px;
        border:1px solid black;
        padding:1px solid black;
        margin:10px;
        img {
                width:200px;
                height:200px;
        }
        h4{
                max-width: 100%;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
        }
        h4:hover {
                white-space: normal; /* Display the entire text on hover */
              }
        p{
                font-weight: 150;
                margin:10px;
        }


`

export const counterStyle = css`
.counter{
        width:100%;
    }
    
    .counter button {
       
    }

button{
        width:40px;
}
    
`