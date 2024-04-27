import './output.css';

import Page1 from './page1.jsx';
import Page2 from './page2.jsx';


export default function App() {
    return (
	<>
	<h1>Header</h1>
        <div className="snap-y snap-mandatory overflow-y-scroll h-screen flex-grow z-0">
            <div className="snap-always snap-center" id="page1">
                <Page1 />
            </div>
            <div className="snap-always snap-center" id="page2">
                <Page2 />
            </div>
            <div className="snap-always snap-center" id="page1">
                <Page1 />
            </div>
        </div>
	<h1>Footer</h1>
	</>
    );
}
