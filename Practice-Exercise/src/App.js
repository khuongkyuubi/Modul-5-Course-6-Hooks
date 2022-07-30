import React from "react";
import {Routes, Route, Link} from "react-router-dom";
import "./App.css";
import AlertHideComponent from "./component/Course-5/AlertHideComponent/AlertHideComponent";
import CheckLoginLogout from "./component/Course-5/CheckLoginLogout/CheckLoginLogout";
import ExpandCollapse from "./component/Course-5/Expand-Collapse/ExpandCollapse";
import Calculator from "./component/Course-5/Calculator/Calculator";
import LoginLogoutBootstrap from "./component/Course-5/LoginLogoutBootstrap/LoginLogoutBootstrap";
import TodoApp from "./component/Course-5/TodoApp/TodoApp";
import StudentManager from "./component/Course-5/StudentManager/StudentManager";
import Counter from "./component/Course-6/PracticeuseState/Counter";
import EffectDemo from "./component/Course-6/PracticeuseEffect/EffectDemo";
import GetClock from "./component/Course-6/PracticeHookCustom/GetClock";
import CarSelection from "./component/Course-6/Exercise-useState/CarSelection";
import Timer from "./component/Course-6/Exercise-useEffect-Timer/Timer";
import Count from "./component/Course-6/ExerciseCustomHook-Component-Counter/Count";

function App() {


    return (
        <div>
            <nav>
                <ul>
                    <h1>Course 5:</h1>
                    <h2>Practice</h2>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"alert"}>Alert Before Hide Component </Link>
                    </li>
                    <li>
                        <Link to={"login-logout"}>Check Login Logout</Link>
                    </li>

                    <h2>Exercise</h2>
                    <li>
                        <Link to={"expand-collapse"}>Component Expand/Collapse</Link>
                    </li>
                    <li>
                        <Link to={"calculator"}>Calculator</Link>
                    </li>
                    <li>
                        <Link to={"login-logout-bootstrap"}>Login/Logout Bootstrap</Link>
                    </li>
                    <li>
                        <Link to={"todo-app"}>Todo List</Link>
                    </li>
                    <li>
                        <Link to={"student-manager"}>Student Manager</Link>
                    </li>
                    <hr/>
                    <h1>Course 6</h1>
                    <h2>Practice</h2>
                    <li>
                        <Link to={"counter"}>Counter - Practice useState</Link>
                    </li>
                    <li>
                        <Link to={"effect-demo"}>Demo useEffect</Link>
                    </li>
                    <li>
                        <Link to={"custom-hook"}>Demo Custom Hook</Link>
                    </li>
                    <h2>Exercise</h2>
                    <li>
                        <Link to={"car-selection"}>Car Selection</Link>
                    </li>
                    <li>
                        <Link to={"timer"}>Countdown Timer (useEffect)</Link>
                    </li>
                    <li>
                        <Link to={"count"}>Count With Custom Hook(useEffect)</Link>
                    </li>

                </ul>
            </nav>

            <Routes>

                <Route path="/" element={<h1 style={{
                    textAlign: 'center',
                    padding: 20
                }}>Please choose the practice!</h1>}/>
                <Route path="/alert" element={<AlertHideComponent/>}/>
                <Route path="/login-logout" element={<CheckLoginLogout/>}/>
                <Route path="/expand-collapse" element={<ExpandCollapse/>}/>
                <Route path="/calculator" element={<Calculator/>}/>
                <Route path="/login-logout-bootstrap" element={<LoginLogoutBootstrap/>}/>
                <Route path="/todo-app" element={<TodoApp/>}/>
                <Route path="/student-manager" element={<StudentManager/>}/>
                <Route path="/counter" element={<Counter/>}/>
                <Route path="/effect-demo" element={<EffectDemo/>}/>
                <Route path="/custom-hook" element={<GetClock/>}/>
                <Route path="/car-selection" element={<CarSelection/>}/>
                <Route path="/timer" element={<Timer count={10}/>}/>
                <Route path="/count" element={<Count/>}/>

            </Routes>


        </div>
    )


}


export default App;
