import { useState } from 'react';

const Switch = () => {
    const [toggleSwitch, setToggleSwitch] = useState(false);

    const handleToggle = () => {
        setToggleSwitch(!toggleSwitch);
        console.log(toggleSwitch)

        // // Ajoutez ici la logique pour mettre à jour les variables CSS pour le mode sombre
        if (!toggleSwitch) {
            document.body.setAttribute('data-theme', 'alter'); // Active le mode sombre
        } else {
            document.body.setAttribute('data-theme', 'normal'); // Active le mode clair
        }
    };


    return (
        <>
            <div className={`switch ${toggleSwitch? 'selfRight' : ''}`} onClick={handleToggle} >
                <div className={`round`}>
                </div>
            </div>
        </>
    );
};

export default Switch;



