import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import Heading from '../heading';

interface Department {
	name: string;
	img: string;
	link: string;
}
interface Props {
	depts: Department[];
}

export default component$<Props>(({ depts }) => {
	return (
		<div class="py-20">
			<Heading title="events" />
			<div class="grid grid-cols-4 gap-10 place-items-center my-10">
				{depts.map((dept, i) => (
					<Link href={dept.link}>
						<div
							key={i}
							class="relative scale-95 hover:scale-110 transition-all ease-out cursor-pointer duration-300"
						>
							<img class="m-0 p-0 " src={dept.img} />
							<div class="absolute text-white bottom-5 justify-center flex items-center left-0 right-0 mx-auto z-10 bg-black/30 backdrop-blur-md w-3/4 rounded-full  h-10">
								<p class="text-2xl font-aspace font-bold">{dept.name}</p>
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
});
