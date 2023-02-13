import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root{
    --color-primary:#FF577F;
    --color-primary-focus:#FF427F;
    --color-primary-negative:#59323F;

    --color-grey-4:#121214;
    --color-grey-3:#212529;
    --color-grey-2:#343B41;
    --color-grey-1:#868E96;
    --color-grey-0:#F8F9FA;
    --color-white:#ffffff;

    --color-sucess:#3FE864;
    --color-negative:#E83F5B;

    --color-title-1:16px;
    --color-headline:12px;

}

button{
    cursor: pointer;
}

body{
    background-color:var(--color-grey-4);
    display: flex;
    justify-content: center;
    height: 100vh;
    align-items: center;

    font-family: 'Inter', sans-serif;
}
`;
