import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';


export default function SettingsNav() {

    const navigate = useNavigate();

    return (

        <main >
            <div className="navbar bg-base-300">

                <div className="flex-1">
                    <div className="tooltip tooltip-bottom" data-tip="Return">
                        <div onClick={() => navigate("/")} className="btn btn-sm btn-ghost mr-2">
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </div>
                    </div>
                    <div className=" normal-case text-xl">Settings</div>
                </div>
            </div>
        </main>
    )
}