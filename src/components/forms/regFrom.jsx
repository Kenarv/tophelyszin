import React, { useState } from 'react';
function RegForm() {
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('/register.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                lastName,
                firstName,
                username,
                email,
                password,
                confirmPassword
            })
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert('Sikeres regisztráció!');
                } else {
                    setErrorMessage(data.message);
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
                    <label className="font-bold" htmlFor="lastName">
                        Vezetéknév:
                    </label>
                    <input
                        className="border border-1"
                        type="text"
                        value={lastName}
                        onChange={event => setLastName(event.target.value)}
                        required
                        placeholder="Minta"
                    />

                </div>
                <div className="flex flex-col">
                    <label className="font-bold" htmlFor="FirstName">
                        Keresztnév:
                    </label>
                    <input
                        className="border border-1"
                        type="text"
                        value={firstName}
                        onChange={event => setFirstName(event.target.value)}
                        required
                        placeholder="Mihály"
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
                        placeholder="MintaUser"
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
                        placeholder="mintamihaly@minta.hu"
                    />
                </div>
                <div className="flex flex-col">
                    <label className="font-bold" htmlFor="password">
                        Jelszó:
                    </label>
                    <input
                        className="border border-1"
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
                        type="confirmPpassword"
                        value={confirmPassword}
                        onChange={event => setConfirmPassword(event.target.value)}
                        required
                        placeholder=""
                    />

                </div>


                <div className="flex flex-row my-10">
                    <button type="submit"
                            className="transition duration-300 ease-in-out text-xl w-35 px-5 py-1 text-white rounded-3xl bg-sky-400/30 hover:bg-sky-300/50 shadow-lg"

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
