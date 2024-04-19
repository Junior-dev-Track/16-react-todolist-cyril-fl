// import { useState } from 'react';
//
// const Switch = () => {
//     const [toggleSwitch, setToggleSwitch] = useState(false);
//
//     const handleToggle = () => {
//         setToggleSwitch(!toggleSwitch);
//         // Ajoutez ici la logique pour mettre à jour les variables CSS pour le mode sombre
//         if (!toggleSwitch) {
//             document.documentElement.setAttribute('data-theme', 'dark'); // Active le mode sombre
//         } else {
//             document.documentElement.setAttribute('data-theme', 'light'); // Active le mode clair
//         }
//     };
//
//
//     const defaultTheme = () => {
//         theme = toggleSwitch ? 'selfRight' : '';
//
//             const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
//
//             if (prefersDarkMode) {
//               document.documentElement.setAttribute('data-theme', 'dark'); // Active le mode sombre
//             } else {
//               document.documentElement.setAttribute('data-theme', 'light'); // Active le mode clair
//             }
//
//         /*
//         ${toggleSwitch ? '' : 'selfRight'}
//         */
//
//         // return theme
//     }
//
//     return (
//         <>
//             <div className={`switch  ${defaultTheme()}`} onClick={handleToggle}>
//                 <div className={`round `}>
//                 </div>
//             </div>
//         </>
//     );
// };
//
// export default Switch;
//
//
//
