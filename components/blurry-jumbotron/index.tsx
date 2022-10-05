import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
	return (
		<div class="w-full border-[0.02rem] border-gray-400 border-opacity-20 bg-black/20 backdrop-blur-lg">
			<div class="flex gap-10 item-center font-ubuntu text-white text-left w-3/5 mx-auto py-10">
				<div class="w-1/3">
					<ion-icon class="text-5xl pb-2" name="bulb"></ion-icon>
					<Link class="" href="/events">
						<div class="text-lg w-fit font-space flex gap-5 items-center justify-between mb-2 cursor-pointer text-cyan-500 rounded-lg px-2 py-1 bg-sky-700/30 font-bold">
							<div>Events</div>{' '}
							<ion-icon
								class="caret-move"
								name="caret-forward-outline"
							></ion-icon>
						</div>
					</Link>
					<p>
						Check out all the events that our departments have to offer.
						Participate and get the chance to win exciting prizes 🤑 among
						experience and exposure!
					</p>
				</div>
				<div class="w-1/3">
					<ion-icon class="text-5xl pb-2" name="tv"></ion-icon>
					<Link href="/coming-soon">
						<div class="text-lg w-fit font-space flex gap-5 items-center justify-between mb-2 cursor-pointer text-yellow-500 rounded-lg px-2 py-1 bg-amber-700/30 font-bold">
							<div>Workshops</div>{' '}
							<ion-icon
								class="caret-move"
								name="caret-forward-outline"
							></ion-icon>
						</div>
					</Link>
					<p>
						There are tonnes of workshops that you can attend to greatly enhance
						your skills on several technical domains. Sign up to clash shoulders
						with the best minds.
					</p>
				</div>
				<div class="w-1/3">
					<ion-icon class="text-5xl pb-2" name="hammer"></ion-icon>
					<Link href="/coming-soon">
						<div class="text-lg w-fit font-space flex gap-5 items-center justify-between mb-2 cursor-pointer text-pink-500 rounded-lg px-2 py-1 bg-rose-700/30 font-bold">
							<div>Hackathons</div>{' '}
							<ion-icon
								class="caret-move"
								name="caret-forward-outline"
							></ion-icon>
						</div>
					</Link>
					<p>
						Test your building skills in our flagship hackathons. From building
						your product to forming a great market strategy, gear up and get
						ready for{' '}
						<span class="decoration-teal-500 underline font-bold underline-offset-2">
							#nosleeptillsuccess
						</span>
					</p>
				</div>
			</div>
		</div>
	);
});
