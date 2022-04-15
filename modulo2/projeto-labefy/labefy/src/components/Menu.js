import React from "react";
import styled from "styled-components";


    const MenuContainer = styled.div`
        display: flex;
        justify-content: column;
        border: 1px solid black;
        padding: 10px;
        margin-top: 50px;
        width: 100px;
        height: 500px;
    `
    const MenuList = styled.div`
        display: inline-block;
    `
    const MenuItem = styled.div`
        display: flex;
        justify-content: column;
        margin: 10px;
    `
    const MenuLink = styled.a`
        display: flex;
        justify-content: column;
        text-decoration: none;
        color: black;
        width: 100%;

    `
    const DivColum = styled.div`
        display: flex;
        justify-content: column;
        margin: 10px;
        
    `

export default class Menu extends React.Component {
    state = {
        menu: [
        {
            name: "Home",
            path: "/",
        },
        {
            name: "Music",
            path: "/addmusic",
        },
        {
            name: "Playlist",
            path: "/playlist",
        },
        ],
    };
    
    render() {
        return (
        <div>
            <DivColum>
            <label>
                Home
            </label>
            <label>
                Music
                </label>
            <label>
                Playlist
                </label>
                </DivColum>
            {/* <MenuContainer>
           
                {this.state.menu.map((item) => (
                <MenuItem key={item.name}>
                    <MenuLink to={item.path}>{item.name}</MenuLink>
                </MenuItem>
                ))}
            
            </MenuContainer> */}
        </div>
        );
    }
    }