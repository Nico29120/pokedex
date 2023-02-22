import { useState } from 'react';
import PropTypes, { func } from 'prop-types';
import './Welcome.css';

// utilisation pour le dev pour pas se tromper sur les tippages
Welcome.propTypes = {
    lastname: PropTypes.string,
    firstname: PropTypes.string,
    age: PropTypes.number,
    isAdmin: PropTypes.bool,
    roles: PropTypes.array,
    onClick : func,
}

export default function Welcome({lastname, firstname, age, isAdmin, roles}){

    const [activeId, setActiveID] = useState(-1);

    return(
        <div>
            <p>Bienvenue, {lastname} {firstname}</p>

            {
                isAdmin ? 
                    <p>Vous êtes Admin</p> 
                : 
                    <p>Vous êtes un simple utilisateur</p>
            }

            {
                age > 18 ?
                    <p>Vous êtes majeur</p>
                :
                    <p>Vous êtes mienur</p>    
            }
            
            <ul>
            {
                roles.map((role, id) => 
                (
                    <li onClick={() => setActiveID(id)} key={id} className={activeId === id ? "yellow" : ""}>
                        {role}
                    </li>
                ))
            }
            </ul>

        </div>
    );

}