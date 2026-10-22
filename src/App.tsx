import { Header } from "./sections/header";
import { Hero } from "./sections/hero";
import { Clients } from "./sections/clients";
import { Community } from "./sections/community";
import { Unlock } from "./sections/unlock";
import { Achievements } from "./sections/achievements";
import { Testimonial } from "./sections/testimonial";
import { CommunityUpdates } from "./sections/community-updates";
import { Cta } from "./sections/cta";
import { Footer } from "./sections/footer";

import imgContentOne from "./assets/images/img-content-1.svg";
import imgContentTwo from "./assets/images/img-content-2.svg";

function App() {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<Clients />
				<Community />
				<Unlock
					imageUrl={imgContentOne}
					imageAlt="Two people next to a large phone screen showing a login form with a profile picture and password fields"
					titleText="The unseen of spending three years at Pixelgrade"
					text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio."
				/>
				<Achievements />
				<Unlock
					imageUrl={imgContentTwo}
					imageAlt="Woman pointing at a large smartphone showing a sign-up form, with a padlock, a leaf and a thumbs-up speech bubble around her"
					titleText="How to design your site footer like we did"
					text="Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida."
				/>
				<Testimonial />
				<CommunityUpdates />
				<Cta />
			</main>
			<Footer />
		</>
	);
}

export default App;
