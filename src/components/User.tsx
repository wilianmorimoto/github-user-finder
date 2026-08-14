import S from "./User.module.css";
import { UserProps } from "../types/User";
import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

export default function User({
	login,
	avatar_url,
	location,
	following,
	followers,
}: UserProps) {
	return (
		<div className={S.user}>
			<img src={avatar_url} alt={login} />
			<h2>{login}</h2>
			{location && (
				<p className={S.location}>
					<MdLocationPin />
					<span>{location}</span>
				</p>
			)}
			<div className={S.stats}>
				<div>
					<p>Seguidores:</p>
					<p className={S.number}>{followers}</p>
				</div>
				<div>
					<p>Seguindo:</p>
					<p className={S.number}>{following}</p>
				</div>
			</div>

			<Link to={`/repos/${login}`}>
				Repositórios <BsArrowRight />
			</Link>
		</div>
	);
}
