import { useState, useEffect } from "react";
import { FaEnvelopeOpen, FaUser, FaCalendarTimes, FaMap, FaPhone, FaLock } from "react-icons/fa";

const url = "https://randomuser.me/api/";
const defaultImage = "https://randomuser.me/api/portraits/men/46.jpg";

interface Person {
	image: string;
	phone: string;
	email: string;
	password: string;
	age: number;
	street: string;
	name: string;
}

function RandomPerson(): JSX.Element {
	const [loading, setLoading] = useState(true);
	const [person, setPerson] = useState<Person | null>(null);
	const [value, setValue] = useState("random person");
	const [title, setTitle] = useState("name");

	const getPerson = async (): Promise<void> => {
		setLoading(true);
		const response = await fetch(url);
		const data = await response.json();
		const randomPerson = data.results[0];
		const { phone, email } = randomPerson;
		const { large: image } = randomPerson.picture;
		const { password } = randomPerson.login;
		const { first, last } = randomPerson.name;
		const {
			dob: { age },
		} = randomPerson;
		const {
			street: { number, name },
		} = randomPerson.location;

		const newPerson: Person = {
			image,
			phone,
			email,
			password,
			age,
			street: `${number} ${name}`,
			name: `${first} ${last}`,
		};
		setPerson(newPerson);
		setLoading(false);
		setTitle("name");
		setValue(newPerson.name);
	};

	useEffect(() => {
		getPerson();
	}, []);

	const handleValue = (e: React.MouseEvent<HTMLButtonElement>): void => {
		if ((e.target as HTMLButtonElement).classList.contains("icon")) {
			const newValue = (e.target as HTMLButtonElement).dataset.label;
			if (newValue && typeof newValue === "string") {
				setTitle(newValue);
				if (person) {
					setValue(String(person[newValue as keyof Person]));
				}
			}
		}
	};
	
	return (
		<main>
			<div className="mx-4 mb-20 mt-16 max-w-2xl overflow-hidden rounded-lg bg-white shadow-xl dark:bg-gray-900 sm:mx-auto sm:max-w-sm md:mx-auto md:max-w-sm lg:mx-auto lg:max-w-sm xl:mx-auto xl:max-w-sm">
				<div className="h-32 overflow-hidden rounded-t-lg">
					<img
						className="w-full object-cover object-top"
						src={
							"https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
						}
						alt="Mountain"
					/>
				</div>
				<div className="container mx-auto p-8 ">
					<div className="relative mx-auto -mt-24 h-32 w-32 overflow-hidden rounded-full border-4 border-white">
						<img
							src={(person && person.image) || defaultImage}
							alt="random user"
							className="mx-auto h-32 w-32 rounded-full object-cover"
						/>
					</div>
					<p className="mt-4 text-center font-bold">My {title} is</p>
					<p className="mt-2 text-center text-xl md:text-2xl ">{value}</p>
					<div className="my-10 flex flex-wrap justify-center gap-2">
						<button className="icon" data-label="name" onMouseOver={handleValue}>
							<FaUser className="mx-2 text-3xl" />
						</button>
						<button className="icon" data-label="email" onMouseOver={handleValue}>
							<FaEnvelopeOpen className="mx-2 text-3xl " />
						</button>
						<button className="icon" data-label="age" onMouseOver={handleValue}>
							<FaCalendarTimes className="mx-2 text-3xl" />
						</button>
						<button className="icon" data-label="street" onMouseOver={handleValue}>
							<FaMap className="mx-2 text-3xl" />
						</button>
						<button className="icon" data-label="phone" onMouseOver={handleValue}>
							<FaPhone className="mx-2 text-3xl " />
						</button>
						<button className="icon" data-label="password" onMouseOver={handleValue}>
							<FaLock className="mx-2 text-3xl" />
						</button>
					</div>
					<button
						className="mx-auto mt-8 block rounded-full bg-blue-500 px-7 py-2  text-white hover:bg-blue-700"
						type="button"
						onClick={getPerson}
					>
						{loading ? "loading..." : "Random User"}
					</button>
				</div>
			</div>
		</main>
	);
}

export default RandomPerson;
