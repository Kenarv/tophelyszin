import React, { useState } from 'react';

function RegForm() {
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('/register.php', {
            method: 'POST',
            body: JSON.stringify({
                lastName,
                firstName,
                username,
                email,
                phone,
                password,
                confirmPassword
            })
        })
            .then(response => response.json())
            .then(data => {
                if (data.error)
                {
                    alert(data.error);
                }
                else
                {
                    alert(data.success);
                }

            })
            .catch(error => {
                console.error('Hiba történt a regisztráció során:', error);
                setErrorMessage('Hiba történt a regisztráció során. Kérjük, próbálja meg később.');
            });
    };
    return (
        <div className="animate-form-animation flex flex-col gap-2 w-[390px] md:w-[800px] mx-auto form-animation p-20 bg-gradient-to-r from-sky-300/50 via-sky-600/50 to-sky-500/50 rounded-xl shadow-2xl">
            <form action="" onSubmit={handleSubmit}>
            <div className="flex flex-col">
                    <label className="font-bold" htmlFor="lastname">
                        Vezetéknév:
                    </label>
                    <input
                        className="border border-1"
                        value={lastName}
                        onChange={event => setLastName(event.target.value)}
                        required
                        placeholder=""
                    />
                </div>
                <div className="flex flex-col">
                    <label className="font-bold" htmlFor="firstname">
                        Keresztnév:
                    </label>
                    <input
                        className="border border-1"
                        value={firstName}
                        onChange={event => setFirstName(event.target.value)}
                        required
                        placeholder=""
                    />
                </div>
                <div className="flex flex-col">
                    <label className="font-bold" htmlFor="username">
                        Felhasználónév:
                    </label>
                    <input
                        className="border border-1"
                        type="text"
                        value={username}
                        onChange={event => setUsername(event.target.value)}
                        required
                        placeholder=""
                    />
                </div>
                <div className="flex flex-col">
                    <label className="font-bold" htmlFor="email">
                        Email:
                    </label>
                    <input
                        className="border border-1"
                        type="email"
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                        required
                        placeholder=""
                    />
                </div>
                <div className="flex flex-col">
                    <label className="font-bold" htmlFor="phone">
                        Telefonszám:
                    </label>
                    <input
                        className="border border-1"
                        type="text"
                        value={phone}
                        onChange={event => setPhone(event.target.value)}
                        required
                        placeholder=""
                    />
                </div>
                <div className="flex flex-col">
                    <label className="font-bold" htmlFor="password">
                        Jelszó:
                    </label>
                    <input
                        className="border border-1"
                        type="password"
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                        required
                        placeholder=""
                    />
                </div>
                <div className="flex flex-col">
                    <label className="font-bold" htmlFor="confirmPassword">
                        Jelszó újra:
                    </label>
                    <input
                        className="border border-1"
                        type="password"
                        value={confirmPassword}
                        onChange={event => setConfirmPassword(event.target.value)}
                        required
                        placeholder=""
                    />
                </div>

                <div className="flex flex-row my-10">
                    <button type="submit"
                        className="transition duration-300 ease-in-out text-xl w-35 px-5 py-1 text-white rounded-3xl bg-sky-400/30 hover:bg-sky-300/50 shadow-lg"
                        onClick={() => ''} //innen megy majd a feltöltés az adatbázisba a bejelntkezési adatokkal valamint a továbblépés a profil oldalra a már meglévő adatokkal
                    >
                        <p className="text-slate-700 font-semibold text-base">
                            Regisztráció
                        </p>
                    </button>
                </div>
            </form>
        </div>
    );
}

export default RegForm;
