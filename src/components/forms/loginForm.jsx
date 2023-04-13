import React, { useState } from "react";

function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = { username: username, password: password };
        fetch("/login.php", {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" },
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    setMessage("Sikeres bejelentkezés!");
                } else {
                    setMessage(data.message);
                }
            })
            .catch((error) => {
                setMessage("Hiba történt a bejelentkezés során.");
                console.error(error);
            });
    };
    return (
        <div className="transition ease-in-out animate-form-animation flex flex-col gap-2 w-[390px] md:w-[800px] mx-auto form-animation p-20 bg-sky-300/50 rounded-xl shadow-2xl">
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col">
                    <label className="font-bold" htmlFor="username">
                        felhasználónév:
                    </label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
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
                        id="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <div className="flex flex-row gap-20">
                    <button type="submit"
                        className="transition duration-300 ease-in-out text-xl w-35 px-5 py-1 text-white rounded-3xl bg-sky-400/30 hover:bg-sky-300/50 shadow-lg"
                        //onClick={() => ''} //innem megy majd a lekérdezés az adatbazisba a login részére vlalamint az átugrás a profil oldalra
                    >
                        <p className="text-slate-700 font-semibold text-base">
                            Belépés
                        </p>
                    </button>
                </div>
                <p>{message}</p>
            </form>
        </div>
    );
}

export default LoginForm;
