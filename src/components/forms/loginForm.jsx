import React, { useState } from "react";

function LoginForm({loggedButtonObj}) { //itt hookoltam be a loggedButtonObj-et
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const { setLogged } = loggedButtonObj;      //ide dekonsturktoltam a loggedButtonObj-ből a setLogged settert


    const handleSubmit = (event) => {
        event.preventDefault();
        const data = { username: username, password: password };
        fetch("/login.php", {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" },
        })
            .then((response) => response.json())
            .then(data => {

                if (data.error)
                {
                    alert(data.error);
                }
                else
                {
                    alert(data.success);
                    setLogged(true);        //itt megadja neki hogy sikeres belépés esetén a logged legyen true
                }

            })
            .catch((error) => {
                setMessage("Hiba történt a bejelentkezés során.");
                console.error(error);
            });
    };
    return (
        <div className="transition ease-in-out animate-form-animation flex flex-col gap-2 w-[390px] md:w-[800px] mx-auto form-animation p-20 bg-sky-300/50 rounded-xl shadow-2xl">
            <form action="" onSubmit={handleSubmit}>
                <div className="flex flex-col">
                    <label className="font-bold" htmlFor="username">
                        Felhasználónév:
                    </label>
                    <input
                        className="border border-1"
                        type="text"
                        id="username"
                        required
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
                        required
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
            </form>
        </div>
    );
}

export default LoginForm;
