import { component$ } from '@builder.io/qwik';
import { Link, useNavigate } from '@builder.io/qwik-city';
import Button from '../button';

export default component$(() => {
	const nav = useNavigate();
	return (
		<header class="flex fixed top-0 bg-black/30 backdrop-blur-lg z-10 text-white w-full justify-between py-4 px-4 xl:px-10 lg:py-6 items-center">
			<div class="w-full lg:w-1/4 flex justify-between lg:justify-start items-center">
				<ion-icon class="w-1/6 lg:hidden" size="large" name="menu"></ion-icon>
				<div class="flex lg:w-full items-center w-1/2 md:w-2/5">
					<Link href="/" class="w-1/2 lg:w-1/3">
						<img src="/images/ssn.png" />
					</Link>
					<Link href="/" class="w-1/2 lg:w-1/3">
						<img src="/images/snu.png" />
					</Link>
				</div>
			</div>
			<div class="hidden lg:flex items-center gap-10 justify-center w-1/2 font-ubuntu ">
				<Link
					class="hover:tracking-wide-wide hover:font-bold transition-all duration-300 hover:text-2xl"
					href="/events"
				>
					Events
				</Link>
				<Link
					class="hover:tracking-wide-wide hover:font-bold transition-all duration-300 hover:text-2xl"
					href="/coming-soon"
				>
					Workshops
				</Link>
				<Link
					class="hover:tracking-wide-wide hover:font-bold transition-all duration-300 hover:text-2xl"
					href="/coming-soon"
				>
					Hackathon
				</Link>
				<Link
					class="hover:tracking-wide-wide hover:font-bold transition-all duration-300 hover:text-2xl"
					href="/coming-soon"
				>
					Schedule
				</Link>
				<Link
					class="hover:tracking-wide-wide hover:font-bold transition-all duration-300 hover:text-2xl"
					href="/coming-soon"
				>
					Sponsors
				</Link>
				<Link
					class="hover:tracking-wide-wide hover:font-bold transition-all duration-300 hover:text-2xl"
					href="/coming-soon"
				>
					Passes
				</Link>
			</div>
			<div class="hidden lg:flex gap-10 w-1/4 justify-end">
				<Button
					action$={() => {
						nav.path = '/signup';
					}}
				>
					Register
				</Button>
			</div>
		</header>
	);
});
