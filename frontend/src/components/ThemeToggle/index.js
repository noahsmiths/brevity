import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { themeChange } from "theme-change";



export default function ThemeToggle() {

    useEffect(() => {
        themeChange(false)
        // 👆 false parameter is required for react project
    }, [])


    return (


        <div>

            <button data-set-theme="dark" data-act-class="ACTIVECLASS"><FontAwesomeIcon className="text-lg swap-on" icon={faMoon} /></button>
            <button data-set-theme="light" data-act-class="ACTIVECLASS"><FontAwesomeIcon className="text-lg swap-off" icon={faSun} /></button>
        </div>



    )
}