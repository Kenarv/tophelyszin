import SearchShowButton from './searchShowButton';

const StartPage = props => {
    return (
        <>
            <div className="animate-form-animation flex flex-col gap-2 w-[360px] desktop:w-[1200px] mx-auto form-animation p-20 bg-sky-500/30 rounded-xl shadow-lg">
                <div className="text-center mt-15 drop-shadow-3xl">
                    <div className="w-35 desktop:w-full">
                        <h1 className="font-bold text-4xl my-10 ">
                            Segítség a jó helyszínválasztáshoz:
                        </h1>
                    </div>
                    <div>
                        <h1 className="font-bold text-xl py-5">
                            Mekkora rendezvényt tervez?
                        </h1>
                        <div className="text-slate-200 px-3 py-3 bg-sky-700/30 rounded-3xl italic">
                            <ul>
                                <li>
                                    Általánosságban elmondható, hogy a
                                    rendezvények nagyságát tekintve a következő
                                    kategóriák fordulnak elő:
                                </li>
                                <li>- kisebb (rendezvény 60 fő alatt)</li>
                                <li>- közepes (rendezvény 60-120 főközött)</li>
                                <li>- nagy (120 fő felett)</li>
                                <li>
                                    Ez a legfontosabb paraméter, hiszen sok
                                    helyszín kieshet, ha nincs megfelelő
                                    kapacitása nagyobb létszámot fogadni.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h1 className="font-bold text-xl py-5">
                            Mikor, mely évszakban szeretné a rendezvényt?
                        </h1>

                        <div className="text-slate-200 px-3 py-3 bg-sky-700/30 rounded-3xl italic">
                            <ul>
                                <li>
                                    Az évszak nagymértékben befolyásolja, hogy
                                    melyik helyszín mikor a legszebb,
                                    legpraktikusabb a rendezvény szempontjából.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h1 className="font-bold text-xl py-5">
                            Az ország mely területén?
                        </h1>
                        <div className="text-slate-200 px-3 py-3 bg-sky-700/30 rounded-3xl italic">
                            <ul>
                                <li>
                                    Melyik városban szeretnék a rendezvényt
                                    megvalósítani? Befolyásoló tényező lehet a
                                    távolság, hogy a vendégek honnan érkeznek és
                                    természetesen a vendégek lakóhelye is.
                                </li>
                                <li>
                                    A szolgáltatók szempontjából is érdemes
                                    átgondolni a távolságot, hiszen km-díjat és
                                    akár szállást is fizetni kell a
                                    szolgáltatók/résztvevők számára.
                                </li>
                                <li>
                                    A szállás mennyisége, minősége és árai is
                                    fontos szempont lehet a jó helyszínválasztás
                                    esetében.
                                </li>
                                <li>
                                    Ha megvan a pontos helyszín, akkor át
                                    kellene gondolni, hogy a vendégek közül
                                    körülbelül hány főnek lesz szüksége
                                    szállásra. Érdemes információt gyűjteni a
                                    környező apartmanokról, hotelekről, hogy
                                    melyik mekkora férőhellyel (kapacitással)
                                    rendelkezik.
                                </li>
                            </ul>
                        </div>
                        <div>
                        <h1 className="font-bold text-xl py-5">
                        Milyen stílusú rendezvényt szeretne?  

                        </h1>

                        <div className="text-slate-200 px-3 py-3 bg-sky-700/30 rounded-3xl italic">
                            <ul>
                                <li>
                                Passzol-e a rendezvény helyszíne annak tartalmát tekintve?
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h1 className="font-bold text-xl py-5 ">
                        Speciális igények?  
                        </h1>

                        <div className="text-slate-200 px-3 py-3 bg-sky-700/30 rounded-3xl italic">
                            <ul>
                                <li>
                                A rendezvény megkövetel az általános szolgáltatásokon kívül, egyedi speciális megvalósítást, valamint igényeket.
                                </li>
                            </ul>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="grid justify-items-center animate-pulse py-5">
                    <SearchShowButton
                        searchShowButtonObj={props.searchShowButtonObj}
                    />
                </div>
            </div>
        </>
    );
};

export default StartPage;
