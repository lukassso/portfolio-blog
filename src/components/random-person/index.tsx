import React, { useState, useEffect, useCallback } from "react";
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

interface State {
	loading: boolean;
	person: Person | null;
	value: string;
	title: string;
}

const getPersonData = async (): Promise<Person> => {
	const response = await fetch(url);
	const data = await response.json();
	const randomPerson = data.results[0];
	console.log("randomPerson", randomPerson);

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
	console.log("newPerson", newPerson);
	return newPerson;
};

const RandomPersonComponent = (): JSX.Element => {
	const [state, setState] = useState<State>({
		loading: true,
		person: null,
		value: "random person",
		title: "name",
	});

	const handleValue = useCallback(
		(e: React.MouseEvent<HTMLButtonElement>): void => {
			const target = e.target as HTMLButtonElement;
			const newValue = target.dataset.label;
			if (newValue && state.person !== null) {
				setState((prevState) => ({
					...prevState,
					title: newValue,
					value: String(state.person![newValue as keyof Person]),
				}));
			}
		},
		[state.person],
	);

	const fetchData = useCallback(async () => {
		setState((prevState) => ({ ...prevState, loading: true }));
		const newPerson = await getPersonData();
		setState((prevState) => ({
			...prevState,
			loading: false,
			person: newPerson,
			title: "name",
			value: newPerson.name,
		}));
	}, []);

	useEffect(() => {
		fetchData();
	}, [fetchData]);

	const usersData = ["name", "email", "age", "street", "phone", "password"];

	return (
		<main>
			<div className="mx-4 mb-20 mt-16 max-w-2xl overflow-hidden rounded-lg bg-white shadow-xl dark:bg-gray-900 sm:mx-auto sm:max-w-sm md:mx-auto md:max-w-sm lg:mx-auto lg:max-w-sm xl:mx-auto xl:max-w-sm">
				<div className="h-32 overflow-hidden rounded-t-lg">
					<img
						className="w-full object-cover object-top"
						src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
						alt="Mountain"
					/>
				</div>
				<div className="container mx-auto p-8 ">
					<div className="relative mx-auto -mt-24 h-32 w-32 overflow-hidden rounded-full border-4 border-white">
						<img
							src={state.person?.image || defaultImage}
							alt="random user"
							className="mx-auto h-32 w-32 rounded-full object-cover"
						/>
					</div>
					<p className="mt-4 text-center font-bold">My {state.title} is</p>
					<p className="mt-2 text-center text-xl md:text-2xl ">{state.value}</p>
					<div className="my-10 flex flex-wrap justify-center gap-2">
						{usersData.map((label) => (
							<button key={label} className="icon" data-label={label} onMouseOver={handleValue}>
								{getIcon(label)}
							</button>
						))}
					</div>
					<button
						className="mx-auto mt-8 block rounded-full bg-blue-500 px-7 py-2 text-white transition duration-300 hover:bg-blue-700"
						type="button"
						onClick={fetchData}
					>
						{state.loading ? "loading..." : "Random User"}
					</button>
				</div>
			</div>
		</main>
	);
};

const faStyles = "mx-2 text-3xl hover:text-blue-500 transition duration-300";

const getIcon = (label: string) => {
	switch (label) {
		case "name":
			return <FaUser className={faStyles} />;
		case "email":
			return <FaEnvelopeOpen className={faStyles} />;
		case "age":
			return <FaCalendarTimes className={faStyles} />;
		case "street":
			return <FaMap className={faStyles} />;
		case "phone":
			return <FaPhone className={faStyles} />;
		case "password":
			return <FaLock className={faStyles} />;
		default:
			return null;
	}
};

export default RandomPersonComponent;
