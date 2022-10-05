import { component$, useClientEffect$, useStore } from '@builder.io/qwik';

export default component$(() => {
	const inventeDate = new Date();
	inventeDate.setFullYear(2022);
	inventeDate.setMonth(10);
	inventeDate.setDate(4);
	inventeDate.setHours(0);
	inventeDate.setMinutes(0);

	const store = useStore({
		daysDiff: 0,
		hoursDiff: 0,
		minutesDiff: 0,
		secondsDiff: 0,
		test: 0,
	});

	useClientEffect$(() => {
		if (inventeDate.getTime() - new Date().getTime() > 0) {
			const timer = setInterval(() => {
				const msDiff = inventeDate.getTime() - new Date().getTime();

				const daysDiff = Math.trunc(msDiff / (1000 * 3600 * 24));
				store.daysDiff = daysDiff;
				store.hoursDiff = 24 - new Date().getHours();
				store.minutesDiff = 60 - new Date().getMinutes();
				store.secondsDiff = 60 - new Date().getSeconds();
			}, 1000);
			return () => {
				clearInterval(timer);
			};
		}
	});
	return (
		<div class="grid w-1/2 mx-auto grid-cols-4 text-white font-azonix text-3xl place-items-center">
			<div class="h-28 w-40 flex items-center justify-center shadow-xl border-[0.02rem] border-gray-400 border-opacity-20 bg-black/20 rounded-xl backdrop-blur-lg">
				<p>{store.daysDiff}</p>
				<p class="text-sm mx-2">Days</p>
			</div>
			<div class="h-28 w-40 flex items-center justify-center shadow-xl border-[0.02rem] border-gray-400 border-opacity-20 bg-black/20 rounded-xl backdrop-blur-lg">
				<p>{store.hoursDiff}</p>
				<p class="text-sm mx-2">Hours</p>
			</div>
			<div class="h-28 w-40 flex items-center justify-center shadow-xl border-[0.02rem] border-gray-400 border-opacity-20 bg-black/20 rounded-xl backdrop-blur-lg">
				<p>{store.minutesDiff}</p>
				<p class="text-sm mx-2">Minutes</p>
			</div>
			<div class="h-28 w-40 flex items-center justify-center shadow-xl border-[0.02rem] border-gray-400 border-opacity-20 bg-black/20 rounded-xl backdrop-blur-lg">
				<p>{store.secondsDiff}</p>
				<p class="text-sm mx-2">Seconds</p>
			</div>
		</div>
	);
});
