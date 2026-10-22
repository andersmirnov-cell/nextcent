import { useState, type ChangeEvent, type SubmitEvent } from "react";
import { BaseButton } from "./button-base";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";

export function SubscribeForm() {
	const [email, setEmail] = useState("");
	const [isSent, setIsSent] = useState(false);

	function handleEmailChange(e: ChangeEvent<HTMLInputElement>) {
		setEmail(e.target.value);
	}

	function handleSubmitEvent(e: SubmitEvent<HTMLFormElement>) {
		e.preventDefault();
		setIsSent(true);
		console.log(email);
	}

	function handleSubscribeAgain() {
		setEmail("");
		setIsSent(false);
	}

	return isSent ? (
		<>
			<h3 className="text-neutral-white text-headline-4">Thanks for your subscription</h3>
			<div className="text-center">
				<BaseButton onClick={handleSubscribeAgain}>Subscribe again?</BaseButton>
			</div>
		</>
	) : (
		<>
			<h3 className="text-neutral-white text-headline-4">Stay up to date</h3>
			<form onSubmit={handleSubmitEvent}>
				<div className="bg-neutral-white/20 rounded-lg flex">
					<input
						type="email"
						value={email}
						placeholder="Your email address"
						onChange={handleEmailChange}
						required
						pattern="[^@\s]+@[^@\s]+\.[^@\s]{2,}"
						title="Enter an email like name@example.com"
						aria-label="Input email address"
						className="grow text-body-3 px-3 w-full"
					/>
					<button
						type="submit"
						aria-label="Send form"
						className="inline-flex items-center text-body-3 text-neutral-white cursor-pointer aspect-square justify-center h-10"
					>
						<FontAwesomeIcon icon={faPaperPlane} />
					</button>
				</div>
			</form>
		</>
	);
}
