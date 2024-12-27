import './App.css';
import Header from "../header/Header";
import WhatWeDo from "../what-we-do/WhatWeDo";
import WhyConsulting from "../why-consulting/WhyConsulting";
import Footer from "../footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <WhatWeDo/>
            <WhyConsulting/>
            <Footer/>
        </div>
    );
}

export default App;
