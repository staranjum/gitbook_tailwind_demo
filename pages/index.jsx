/** @format */
import Image from 'next/image';

export default function Home() {
	const srn1 = ({ src, width, quality }) => {
		return `https://gblobscdn.gitbook.com/assets%2Fgitbook%2F-Lt-3MsVsdNJRuQygoBw%2F-Lt-3UUCTbFNthp_lbdp%2Fimage.png?alt=media&token=99865f2e-8f4d-438e-978c-a1b78307f00b${src}?w=${width}&q=${
			quality || 75
		}`;
	};
	const srn2 = ({ src, width, quality }) => {
		return `https://gblobscdn.gitbook.com/assets%2Fgitbook%2F-Lt-3MsVsdNJRuQygoBw%2F-Lt-3ZHI78MkJ_A1q0Qg%2Fimage.png?alt=media&token=ede20a09-881d-461b-b751-8cc3367f5653${src}?w=${width}&q=${
			quality || 75
		}`;
	};
	const srn3 = ({ src, width, quality }) => {
		return `https://gblobscdn.gitbook.com/assets%2Fgitbook%2F-Lt-6vNfiPMYo1XcRLqd%2F-Lt-7ducarB69AtpLgLw%2Fassets_-LjqEs59tx3tzs90Rqcl_-LrejsB5Ubxs4W3oM0e5_-Lrek-02Vc4K9ZHeQr39_living-doc.gif?alt=media&token=f4335a46-22ef-4658-a2d6-55a90adc1479${src}?w=${width}&q=${
			quality || 75
		}`;
	};
	const srn4 = ({ src, width, quality }) => {
		return `https://gblobscdn.gitbook.com/assets%2Fgitbook%2F-Lt-6vNfiPMYo1XcRLqd%2F-Lt-7l-KjIojtDrba2y3%2Fimage.png?alt=media&token=064fb9ee-f35e-4f93-a7ae-d383cb536fb2${src}?w=${width}&q=${
			quality || 75
		}`;
	};
	return (
		<div className='w-full font-sans...'>
			<div className='w-full bg-white filter drop-shadow'>
				<div className='w-4/5 h-12 mx-auto px-6 p-4 box-content flex'>
					<div className='w-1/5'>
						<Image src='/images/logo.png' alt='logo' width={150} height={40} />
					</div>

					<div className='w-4/6 h-11 my-auto border-l border-gray-200'>
						<ul className='ml-32 my-2 flex gap-x-7 text-blue-500 text-lg font-semibold'>
							<li>Price</li>
							<li>About</li>
							<li>Terms</li>
							<li>Privacy</li>
						</ul>
					</div>

					<div className='w-1/5  h-11 border-l border-gray-200'>
						<div className='ml-6 my-2 flex gap-x-3'>
							<Image
								src='/images/search.svg'
								alt='search-icon'
								width={15}
								height={15}
							/>
							<input
								type='text'
								placeholder='Search...'
								className='text-base font-semibold placeholder-gray-400'
							/>
						</div>
					</div>
				</div>
			</div>

			<div className='w-4/5 h-auto mx-auto px-6 box-content flex'>
				<div className='w-1/5 h-auto pt-10 text-sm font-bold text-gray-600'>
					<ul className='pb-12'>
						<li>What is GitBook</li>
					</ul>
					<ul className='pb-10 space-y-3'>
						<li className='pb-2 text-gray-400 font-bold flex gap-x-1'>
							<Image
								src='/images/pin.svg'
								alt='search-icon'
								width={14}
								height={14}
							/>
							GETTING STARTED
						</li>
						<li>Start exploring</li>
						<li>Quick start</li>
					</ul>
					<ul className='pb-14 space-y-3'>
						<li className='pb-2 text-gray-400 font-bold flex gap-x-1'>
							<Image
								src='/images/space.svg'
								alt='search-icon'
								width={14}
								height={14}
							/>
							SPACES
						</li>
						<li>What is space</li>
						<li>Space availability</li>
						<li>Analytics</li>
						<li>Space settings</li>
					</ul>
					<ul className='pb-14 space-y-3'>
						<li className='pb-2 text-gray-400 font-bold flex gap-x-1'>
							<Image
								src='/images/org.svg'
								alt='search-icon'
								width={14}
								height={14}
							/>
							ORGANIZATIONS
						</li>
						<li>What is organization</li>
						<li>Create an organization</li>
						<li>Organization settings</li>
						<li>Billing settings</li>
					</ul>
					<ul className='pb-14 space-y-3'>
						<li className='pb-2 text-gray-400 font-bold flex gap-x-1'>
							<Image
								src='/images/account.svg'
								alt='search-icon'
								width={14}
								height={14}
							/>
							ACCOUNTS
						</li>
						<li>Account settings</li>
						<li>Export or delete your data</li>
					</ul>
				</div>

				<div className='w-4/6 h-auto box-border border-l border-gray-200 pt-10'>
					<div className='mt-4 ml-32 mr-32'>
						<h2 className='text-3xl font-semibold'>What is GitBook</h2>
						<hr className='mt-10 border font-medium border-gray-200' />
						<p className='mt-8'>
							<span className='font-bold'>GitBook</span> is a modern
							documentation platform where teams can document everything from
							products to internal knowledge-bases and APIs.
						</p>
						<p className='mt-8'>
							We want to help{' '}
							<span className='font-bold'>work more efficientlyby </span>teams
							to creating a simple but yet powerful service for them to{' '}
							<span className='font-bold'>share their knowledge.</span>
						</p>
						<p className='mt-8'>
							Our mission is to make a{' '}
							<span className='font-bold'>user-friendly</span> and
							<span className='font-bold'>collaborative</span>
							product for everyone to create, edit and share knowledge through
							documentation.
						</p>
						<hr className='mt-10 border border-gray-200' />
						<h2 className='text-3xl font-semibold mt-8'>
							With GitBook you can:
						</h2>
						<ul className='list-disc ml-10 mt-8'>
							<li clasName='mt-20'>
								<p>
									👩🏻💻 ​ 👨🏽💻 Collaborate asynchronously with your team comment
									and review drafts before publishing.
								</p>
								<Image
									className='object-contain mt-8'
									loader={srn1}
									src='/me.png'
									alt='Picture of the author'
									width={1200}
									height={800}
								/>
							</li>
							<li className='mt-20'>
								<p>
									Share your knowledge publicly or privately with anyone or use
									a secret link to allow non-GitBook users to access your
									private content.
								</p>
								<Image
									className='object-contain mt-8'
									loader={srn2}
									src='/me.png'
									alt='Picture of the author'
									width={1200}
									height={800}
								/>
							</li>
							<li className='mt-20'>
								<p>
									Enjoy a living documentation thanks to an elegant WYSIWYG*
									editor, where you have both rich-content and rich-text.
								</p>
								<Image
									className='object-contain mt-8'
									loader={srn3}
									src='/me.png'
									alt='Picture of the author'
									width={1200}
									height={800}
								/>
							</li>
							<li className='mt-20'>
								<p>
									Add value to your documentation by customizing your space to
									match your branding.
								</p>
								<Image
									className='object-contain mt-8'
									loader={srn4}
									src='/me.png'
									alt='Picture of the author'
									width={1200}
									height={800}
								/>
							</li>
						</ul>
						<hr className='mt-10 border border-gray-200' />
						<h2 className='text-3xl font-semibold mt-8'>What's more?</h2>
						<p className='mt-8'>
							If you want to know if GitBook matches your needs :
						</p>

						<div className='mt-8 w-full px-8 py-4 box-border bg-white border-gray-200 border rounded-sm shadow md:shadow-md hover:border-blue-500 cursor-pointer flex space-x-6'>
							<Image
								className='object-full'
								src='/images/right-arrow.svg'
								alt='Picture of the author'
								width={20}
								height={20}
							/>
							<div className='flex items-center justify-between'>
								<h3 className='text-blue-500 text-lg font-semibold'>
									Use Cases
								</h3>
								<p className='text-gray-400 text-sm ml-80'>
									/resource/use-cases
								</p>
							</div>
						</div>
						<p className='mt-14 font-bold'>
							The best way to discover GitBook is to try it out
						</p>
						<div className='mt-8 w-full px-8 py-4 box-border bg-white border-gray-200 border rounded-sm md:shadow-md hover:border-blue-500  cursor-pointer flex space-x-6'>
							<Image
								className='object-full'
								src='/images/right-arrow.svg'
								alt='Picture of the author'
								width={20}
								height={20}
							/>
							<div className='flex items-center justify-between'>
								<h3 className='text-blue-500 text-lg font-semibold'>
									Start Exploring
								</h3>
								<p className='text-gray-400 text-sm ml-80'>
									/resource/use-cases
								</p>
							</div>
						</div>
						<p className='mt-14'>
							Check out our Frequently Asked Questions too:
						</p>
						<div className='mt-8 w-full px-8 py-4 box-border bg-white border-gray-200 border rounded-sm md:shadow-md hover:border-blue-500 cursor-pointer flex space-x-6'>
							<Image
								className='object-full'
								src='/images/right-arrow.svg'
								alt='Picture of the author'
								width={20}
								height={20}
							/>
							<div className='flex items-center justify-between'>
								<h3 className='text-blue-500 text-lg font-semibold'>
									Use Cases
								</h3>
								<p className='text-gray-400 text-sm ml-80'>
									/resource/use-cases
								</p>
							</div>
						</div>
						<p className='mt-14 text-gray-600 flex uppercase italic font-semibold'>
							{' '}
							<span className='font-bold mr-2'>*</span> What You See Is What You
							Get
						</p>

						<div className='mt-8 w-full px-8 py-4 box-border bg-white border-gray-200 border rounded-sm md:shadow-md hover:border-blue-500 cursor-pointer'>
							<p className='text-gray-400 text-sm font-bold'>
								Next-
								<span>
									{' '}
									<Image
										src='/images/pin.svg'
										alt='Pin'
										width={12}
										height={12}
									/>
								</span>
								Getting Started
							</p>
							<div className='flex flex-wrap items-center space-between'>
								<h3 className='text-gray-800 text-lg font-semibold'>
									Start exploring
								</h3>
								<div className='ml-96'>
									<Image
										src='/images/arrow-gray.svg'
										alt='Arrow'
										width={16}
										height={16}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className='w-1/5 h-48 border-l border-gray-200 pt-10'>
					<ul className='space-y-3 ml-6 text-tiny text-gray-500 font-bold'>
						<li className='pb-1 text-gray-400 font-bold flex gap-x-1 text-xs'>
							<Image
								src='/images/align.svg'
								alt='search-icon'
								width={12}
								height={12}
							/>
							CONTENTS
						</li>
						<li>With GitBook you can:</li>
						<li>What's more?</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
