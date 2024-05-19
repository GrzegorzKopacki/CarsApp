import Image from "next/image";
import { CustomButton } from "./CustomButton";

export function Hero() {
	return (
		<div className="flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto">
			<div className="flex-1 pt-36 padding-x">
				<h1 className="hero__title">
					Find, book, or rent a car — quickly and easily!
				</h1>
				<p className="hero__subtitle">
					Streamline your car rental experience with our effortles booking
					process.
				</p>
				<CustomButton />
			</div>
		</div>
	);
}
