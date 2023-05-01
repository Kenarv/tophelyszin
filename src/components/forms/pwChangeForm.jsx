import {useState} from "react";

const PwChangeFrom = ({pwChangeShowObj, loggedUserNameObj,}) => {
    const [new_password, set_new_password] = useState('');
    const [new_confirmPassword, set_new_confirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const {LoggedUserName, setLoggedUserName} = loggedUserNameObj
    const {setShowPwChange} = pwChangeShowObj;

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('/pwchange.php', {
            method: 'POST',
            body: JSON.stringify({
                new_password,
                new_confirmPassword
            })
        })
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    alert(data.error);
                } else {
                    alert(data.success);
                    setShowPwChange(false);
                }
            })
            .catch(error => {
                console.error('Hiba történt a regisztráció során:', error);
                setErrorMessage('Hiba történt a regisztráció során. Kérjük, próbálja meg később.');
            });
    };
    return (
        <div
            className="animate-form-animation flex flex-col gap-2 w-[390px] md:w-[800px] mx-auto form-animation p-20 bg-sky-300/50 rounded-xl shadow-2xl">
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col">
                    <p className="font-bold">
                        felhasználónév: {LoggedUserName}
                    </p>
                    <br/>
                </div>
                <div className="flex flex-col">
                    <label className="font-bold" htmlFor="new_password">
                        Jelszó:
                    </label>
                    <input
                        className="border border-1"
                        type="password"
                        value={new_password}
                        onChange={event => set_new_password(event.target.value)}
                        required
                        placeholder=""
                    />
                </div>
                <div className="flex flex-col">
                    <label className="font-bold" htmlFor="new_confirmPassword">
                        Jelszó újra:
                    </label>
                    <input
                        className="border border-1"
                        type="password"
                        value={new_confirmPassword}
                        onChange={event => set_new_confirmPassword(event.target.value)}
                        required
                        placeholder=""
                    />
                </div>
                <div className="flex flex-row my-10">
                    <button
                        className="transition duration-300 ease-in-out text-xl w-35 px-5 py-1 text-white rounded-3xl bg-sky-400/30 hover:bg-sky-300/50 shadow-lg"
                        onClick={() => ''} //innen megy majd a feltöltés az adatbázisba a bejelntkezési adatokkal valamint a továbblépés a profil oldalra a már meglévő adatokkal
                    >
                        <p className="text-slate-700 font-semibold text-base">
                            Mentés
                        </p>
                    </button>
                </div>
                <div className="flex flex-row my-10">
                    <button
                        type="submit"
                        className="transition duration-300 ease-in-out text-xl w-35 px-5 py-1 text-white rounded-3xl bg-sky-400/30 hover:bg-sky-300/50 shadow-lg"
                        onClick={() => {
                            setShowPwChange(false)
                        }} //innen megy majd a feltöltés az adatbázisba a bejelntkezési adatokkal valamint a továbblépés a profil oldalra a már meglévő adatokkal
                    >
                        <p className="text-slate-700 font-semibold text-base">
                            vissza
                        </p>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default PwChangeFrom;
