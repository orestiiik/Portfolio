import React from "react";
import {NavLink} from "react-router-dom";
import {useContext} from "react";
import ThemeContext from "../../context/ThemeContext";

const Burger = (props) => {
    const theme = useContext(ThemeContext)
    const menu = props.menu;
    const listMenu = menu.map((item) => {
        let lowerItem = item
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/\s/g, "");
        return (
            <li key={item}>
                <NavLink to={`/${lowerItem}`} style={{textDecoration: 'none',color: theme.primaryColor, fontSize: 28}}>{item}</NavLink>
            </li>
        );
    });
    return (
        <div className="navigation">
            <input type="checkbox" className="navigation__checkbox" id="nav-toggle"/>
                <label htmlFor="nav-toggle" className="navigation__button">
                    <span className="navigation__icon" aria-label="toggle navigation menu"></span>
                </label>
                <div className="navigation__background"></div>

                <nav className="navigation__nav" role="navigation">
                    <ul className="navigation__list">
                        {listMenu}
                    </ul>
                </nav>
        </div>
    );
}
export default Burger