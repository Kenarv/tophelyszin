import { useState } from 'react';

const FirstForm = props => {
    const [name, setName] = useState('Béla');

    const { buttonStyle } = props.firstformObj;

    return (
        <div className="form-animation flex flex-col gap-2 w-[30rem] mx-auto form-animation p-20 bg-slate-300/70 rounded-xl">
            <div className="flex flex-col">
                <label className="font-bold" htmlFor="name">
                    Name
                </label>
                <input
                    className="border border-1"
                    type="text"
                    name="name"
                    placeholder={name}
                />
            </div>
            <div className="flex flex-col">
                <label className="font-bold" htmlFor="password">
                    Password
                </label>
                <input
                    className="border border-1"
                    type="password"
                    name="password"
                    placeholder="Jelszó:"
                />
            </div>
            <div className="flex flex-row gap-20">
                <button
                    className={`${
                        name.toLowerCase() === 'béla'
                            ? 'bg-blue-500 hover:bg-blue-600'
                            : 'bg-red-500 hover:bg-red-600'
                    } ${buttonStyle}`}
                    onClick={() => setName('Feri')}
                >
                    NChange
                </button>
            </div>
        </div>
    );
};

export default FirstForm;
