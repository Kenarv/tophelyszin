import HeaderComp from './components/header/headerComp';
import MainComp from './components/main/mainComp';
import FirstComp from './components/forms/firstformComp/firstComp';

function App() {
    return (
        <div className="h-screen overflow-hidden">
            <MainComp>
            <HeaderComp />
                <FirstComp />
            </MainComp>
        </div>
    );
}

export default App;
