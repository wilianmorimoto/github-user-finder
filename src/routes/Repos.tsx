import S from "./Repos.module.css";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BiLinkExternal } from "react-icons/bi";
import { RiArrowGoBackFill } from "react-icons/ri";

type ReposProps = {
	id: string;
	name: string;
	description?: string;
	html_url: string;
};

export default function Repos() {
	const [repos, setRepos] = useState<ReposProps[]>([]);

	const { login } = useParams();

	useEffect(() => {
		fetch(`https://api.github.com/users/${login}/repos`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((res) => res.json())
			.then((data) => {
				setRepos(data);
			})
			.catch((err) => console.log(err));
	}, [login]);

	return (
		<>
			{repos.length === 0 ? (
				<p className={S.loading}>Carregando repositórios...</p>
			) : (
				<div className={S.repoContainer}>
					<Link to="/">
						<RiArrowGoBackFill />
					</Link>
					<h2>Repositórios</h2>
					{repos.map((repo) => (
						<div key={repo.id} className={S.repo}>
							<h3>{repo.name}</h3>
							{repo.description && <p>{repo.description}</p>}
							<a href={repo.html_url} target="_blank">
								Acessar repositório <BiLinkExternal />
							</a>
						</div>
					))}
					{repos.length === 0 && <p>Nenhum repositório encontrado.</p>}
				</div>
			)}
		</>
	);
}
