import { Outlet } from "react-router-dom";
import S from "./App.module.css";

function App() {
	return (
		<div className={S.app}>
			<h1>GitHub Finder</h1>
      <Outlet />
		</div>
	);
}

export default App;
