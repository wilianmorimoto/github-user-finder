import { useState, KeyboardEvent } from "react";
import { BsSearch } from "react-icons/bs";
import S from './Search.module.css'

type SearchProps = {
	loadUser: (user: string) => Promise<void>;
};

export default function Search({ loadUser }: SearchProps) {
	const [username, setUsername] = useState("");

	const handleKeyDown = (e: KeyboardEvent) => {
		if(e.key === 'Enter') {
			e.preventDefault();
      loadUser(username);
      setUsername("");
		}
	}
	

	return (
		<div className={S.search}>
			<h2>Busque por um usuário:</h2>
			<p>Conheça os melhores respositórios</p>
			<div className={S.formContainer}>
				<input
					type="text"
					placeholder="Digite o nome do usuário"
					onChange={(e) => setUsername(e.target.value)}
					value={username}
					onKeyDown={(e) => handleKeyDown(e)}
				/>
				<button onClick={() => loadUser(username)}>
					<BsSearch />
				</button>
			</div>
		</div>
	);
}
