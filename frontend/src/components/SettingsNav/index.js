import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/Brevity.svg';


export default function SettingsNav() {

    const navigate = useNavigate();

    return (

        <main >
            <div className="flex navbar bg-white p-0">
                <div className="w-[50px] flex-initial justify-start">
                    <div onClick={() => navigate("/")} className="btn btn-sm btn-ghost mr-2">
                        <FontAwesomeIcon className="text-lg" icon={faArrowLeft} />
                    </div>
                </div>
                <div className="flex-1 flex justify-center">
                    <img src={logo} alt="Brevity Icon" className="max-h-7" />{" "}
                </div>
                <div className="w-[50px] flex-none">
                    &nbsp;
                </div>
            </div>
        </main >
    )
}