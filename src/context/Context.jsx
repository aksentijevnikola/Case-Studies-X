import React, { createContext } from 'react';
import { useState } from 'react';

export const Context = createContext({});

export const Provider = (props) => {
    // HERE GOES CUSTOM LOGIC THAT WE NEED TO WRITE
    const initialCards = [
        {
            id: 1,
            title: `Маркетинг`,
            desc: `Студии на кои ќе научиш како да се справуваш со маркетинг предизвиците во дигиталниот свет и ќе ги стекнеш најбараните најбараните дигитални вештини во моментот.`,
            count: 6,
            imageUrl: `./img/marketing-card-logo.jpg`,
            linkUrl: '/lectures/marketing'
        },
        {
            id: 2,
            title: `Дизајн`,
            desc: ``,
            count: ``,
            imageUrl: `./img/design-card-logo.png`,
            linkUrl: `/lectures/design`
        },
        {
            id: 3,
            title: `Програмирање`,
            desc: ``,
            count: ``,
            imageUrl: `./img/programming-card-logo.png`,
            linkUrl: `/lectures/programming`
        },
        {
            id: 4,
            title: `UX/UI`,
            desc: ``,
            count: ``,
            imageUrl: `./img/ux-ui-card-logo.jpg`,
            linkUrl: `/lectures/uxui`
        },
        {
            id: 5,
            title: `Data Science`,
            desc: ``,
            count: ``,
            imageUrl: `./img/data-science-card-logo.jpg`,
            linkUrl: `/lectures/datascience`
        },
        {
            id: 6,
            title: `Бизнис`,
            desc: ``,
            count: ``,
            imageUrl: `./img/business-card-logo.jpg`,
            linkUrl: `/lectures/business`
        }

    ]
    return(
        <Context.Provider value={Context}>
            {props.children}
        </Context.Provider>
    )
}

export const WebContextProvider = Provider;
export const UsersContext = Context;