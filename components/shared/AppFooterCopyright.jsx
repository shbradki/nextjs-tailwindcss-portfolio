function AppFooterCopyright() {
	return (
		<div className="font-general-regular flex justify-center items-center text-center">
			<div className="text-lg text-ternary-dark dark:text-ternary-light">
				&copy; {new Date().getFullYear()}
				
				<a
					className="text-secondary-dark dark:text-secondary-light font-medium ml-1 duration-500"
				>
					Spencer Bradkin
				</a>
			</div>
		</div>
	);
}

export default AppFooterCopyright;
