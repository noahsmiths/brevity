import { useNavigate } from 'react-router-dom';


export default function SettingsNav() {

    const navigate = useNavigate();

    return (

        <main >
            <div className="navbar bg-base-200">

                <div className="flex-1">
                    <div className="tooltip tooltip-bottom" data-tip="Return">
                        <div onClick={() => navigate("/")} className="btn btn-sm btn-base-200"><i class="fa-solid fa-arrow-left"></i></div>
                    </div>
                    <div className="ml-2 normal-case text-xl">Settings</div>


                </div>
            </div>
        </main>
    )
}