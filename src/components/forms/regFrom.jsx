import React, {useState} from 'react';
import axios from 'axios';
import {Redirect} from 'react';

const RegForm = () => {
    const [formData, setFormData] = useState({
        vezNev: '',
        kerNev: '',
        username: '',
        email: '',
        password: '',
        passwordRe: '',
    });

    const [formErrors, setFormErrors] = useState({
        vezNev: '',
        kerNev: '',
        username: '',
        email: '',
        password: '',
        passwordRe: '',
    });

    const [registered, setRegistered] = useState(false);

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData((prevData) => ({...prevData, [name]: value}));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('https://localhost/tophelyszin/src/components/forms/backend.php', formData)
            .then((response) => {
                if (response.data.status === 'success') {
                    setRegistered(true);
                } else {
                    setFormErrors(response.data.errors);
                }
            })
            .catch((error) => console.log(error));
    };

    if (registered) {
        return <Redirect to="loginForm.jsx"/>;
    }

    return (
        <div
            className="animate-form-animation flex flex-col gap-2 w-[390px] md:w-[800px] mx-auto form-animation p-20 bg-sky-300/50 rounded-xl shadow-2xl">
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col">
                    <label className="font-bold" htmlFor="vezNev">
                        Vezetéknév:
                    </label>
                    <input
                        className="border border-1"
                        type="text"
                        id="vezeteknev"
                        name="vezNev"
                        value={formData.vezNev}
                        onChange={handleChange}
                        placeholder="Minta"
                    />
                    <span>{formErrors.vezNev}</span>
                </div>
                <div className="flex flex-col">
                    <label className="font-bold" htmlFor="kerNev">
                        Keresztnév:
                    </label>
                    <input
                        className="border border-1"
                        type="text"
                        id="kerNev"
                        name="kerNev"
                        value={formData.kerNev}
                        onChange={handleChange}
                        placeholder="Mihály"
                    />
                    <span>{formErrors.kerNev}</span>
                </div>
                <div className="flex flex-col">
                    <label className="font-bold" htmlFor="username">
                        Felhasználónév:
                    </label>
                    <input
                        className="border border-1"
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="MintaUser"
                    />
                    <span>{formErrors.username}</span>
                </div>
                <div className="flex flex-col">
                    <label className="font-bold" htmlFor="email">
                        Email:
                    </label>
                    <input
                        className="border border-1"
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="mintamihaly@minta.hu"
                    />
                </div>
                <div className="flex flex-col">
                    <label className="font-bold" htmlFor="password">
                        Jelszó:
                    </label>
                    <input
                        className="border border-1"
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder=""
                    />
                    <span>{formErrors.password}</span>
                </div>

                <div className="flex flex-col">
                    <label className="font-bold" htmlFor="passwordRe">
                        Jelszó újra:
                    </label>
                    <input
                        className="border border-1"
                        type="password"
                        id="passwordRe"
                        name="passwordRe"
                        value={formData.passwordRe}
                        onChange={handleChange}
                        placeholder=""
                    />
                    <span>{formErrors.passwordRe}</span>
                </div>


                <div className="flex flex-row my-10">
                    <button
                            className="transition duration-300 ease-in-out text-xl w-35 px-5 py-1 text-white rounded-3xl bg-sky-400/30 hover:bg-sky-300/50 shadow-lg"
                        onClick={handleSubmit} //innen megy majd a feltöltés az adatbázisba a bejelntkezési adatokkal valamint a továbblépés a profil oldalra a már meglévő adatokkal

                    >
                        <p className="text-slate-700 font-semibold text-base">
                            Regisztráció
                        </p>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default RegForm;
