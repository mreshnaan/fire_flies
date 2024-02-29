import { Disclosure } from '@headlessui/react'
import { Link } from 'react-router-dom'
import { animate } from 'framer-motion';

const navigation = [
  { name: 'About Fireflies', href: '#about', current: true },
  { name: 'Fireflies WEB3', href: '#fweb3', current: false },
  { name: '$FFT Token Benefits', href: '#fft-tb', current: false },
  { name: 'Digital Collectibles', href: '#digital-collectibles', current: false },
  { name: 'Tokenomics', href: '#tokenomics', current: false },
  { name: 'Roadmap', href: '#roadmap', current: false },
  { name: 'FAQ', href: '#faq', current: false },
]

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}


const smoothScroll = (target: any) => {
  const element = document.querySelector(target);
  if (element) {
    const offset = element.offsetTop;
    const duration = 0.8; // Adjust the duration as needed
    const startPosition = window.pageYOffset || document.documentElement.scrollTop;

    animate(startPosition, offset, {
      duration: duration,
      onUpdate: (value) => {
        window.scrollTo(0, value);
      },
    });
  }
};

export default function Header() {
  return (
    <Disclosure as="nav" className="bg-transparent z-10">
      {({ open }) => (
        <>
          <div className=" relative z-10 pt-6 px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="xl:h-[40px] xl:w-[90px] 2xl:h-[70px] 2xl:w-[159px]"
                    src="/assets/logo.svg"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      onClick={() => smoothScroll(item.href)}
                      className={classNames(
                        item.current ? 'text-[#505D65]' : 'text-[#505D65] hover:text-[#439ca9]',
                        'flex items-center gap-5 px-3 py-4 text-base font-medium cursor-pointer'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>

                  ))}

                </div>

              </div>
              {/* <div className="hidden sm:ml-6 lg:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      onClick={() => smoothScroll(item.href)} 
                      className={classNames(
                        item.current ? 'text-white' : 'text-gray-300  hover:text-white',
                        'rounded-md px-3 py-2 text-sm font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div> */}

              <div className="-mr-2 flex lg:hidden">
                {/* Mobile menu button */}



                {open ? (
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-[#505D65] hover:text-[#505D65] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-transparent">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    <img
                      className="h-8 w-8"
                      src="/assets/mobile-logo-menu.svg"
                      alt="Your Company"
                    />
                  </Disclosure.Button>

                ) : (
                  <div className='flex items-center gap-6'>
                    <Link to={"https://t.me/+UgyhAhitLHg3ZDQ0"}  >
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="14" viewBox="0 0 17 14" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6369 13.2907C12.8569 13.4449 13.1456 13.4784 13.4 13.3912C13.6544 13.2974 13.84 13.0829 13.895 12.8282C14.4932 10.0932 15.9438 3.16196 16.487 0.668319C16.5282 0.480626 16.4595 0.286229 16.3082 0.158866C16.157 0.0315025 15.9507 -0.00201418 15.7582 0.0650192C12.8775 1.10404 4.0016 4.35515 0.371487 5.6623C0.144605 5.74274 -0.00665017 5.96395 0.000225047 6.19857C0.00710026 6.43319 0.172105 6.64099 0.405863 6.70802C2.03529 7.18396 4.1666 7.84089 4.1666 7.84089C4.1666 7.84089 5.16351 10.7837 5.68603 12.2718C5.75478 12.4595 5.89916 12.607 6.09854 12.6606C6.29792 12.7142 6.51105 12.6606 6.65543 12.5198C7.49421 11.7489 8.78675 10.5624 8.78675 10.5624C8.78675 10.5624 11.2412 12.3187 12.6369 13.284V13.2907ZM5.06726 7.47221L6.22229 11.1859L6.47668 8.83298C6.47668 8.83298 10.9387 4.91153 13.4825 2.67932C13.5581 2.61229 13.565 2.50503 13.5031 2.42459C13.4413 2.35086 13.3313 2.33075 13.2419 2.38437C10.2924 4.22109 5.06726 7.47891 5.06726 7.47891V7.47221Z" fill="#505D65" />
                      </svg>
                    </Link>
                    <Link to={"https://www.facebook.com/travelenlightened"}  >
                      <svg xmlns="http://www.w3.org/2000/svg" width="8" height="16" viewBox="0 0 8 16" fill="none">
                        <g clip-path="url(#clip0_74_1095)">
                          <path d="M2.16163 15.4692H5.08516V7.66717H7.12707L7.34494 5.05569H5.08516V3.5665C5.08516 2.9514 5.20169 2.7086 5.75904 2.7086H7.33987V0H5.31316C3.14459 0 2.16163 1.01977 2.16163 2.97299V5.05569H0.641602V7.69955H2.16163V15.4638V15.4692Z" fill="#505D65" />
                        </g>
                        <defs>
                          <clipPath id="clip0_74_1095">
                            <rect width="6.70333" height="15.4692" fill="white" transform="translate(0.641602)" />
                          </clipPath>
                        </defs>
                      </svg>
                    </Link>
                    <Link to={"http://twitter.com/firefliesen"}  >
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                        <g clip-path="url(#clip0_74_2003)">
                          <path d="M0.0414477 0L6.60496 8.27339L0 15H1.48651L7.26914 9.11075L11.9413 15H17L10.0672 6.26125L16.215 0H14.7285L9.40302 5.42389L5.1001 0H0.0414477ZM2.22747 1.03225H4.55143L14.8136 13.9676H12.4897L2.22747 1.03225Z" fill="#505D65" />
                        </g>
                        <defs>
                          <clipPath id="clip0_74_2003">
                            <rect width="17" height="15" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </Link>
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-[#505D65] hover:text-[#505D65] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-transparent">
                      <img
                        className="h-8 w-8"
                        src="/assets/mobile-logo-menu.svg"
                        alt="Your Company"
                      />
                    </Disclosure.Button>
                  </div>

                )}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden h-screen w-screen relative flex flex-col gap-[40px]">
            <div className="flex flex-col space-y-1 px-2 pb-3 pt-12 items-end justify-end bg-[white]  ">
              {navigation.map((item) => (
                <>
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    onClick={() => smoothScroll(item.href)}
                    className={classNames(
                      item.current ? 'text-[#505D65]' : 'text-[#505D65] hover:text-[#439ca9]',
                      'flex items-center gap-5 px-3 py-4 text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                </>
              ))}

            </div>
            <button className='button-gradient-1  py-3 px-8 rounded-[6px] w-[230px] text-[#505D65] text-[19px] mx-auto leading-7 uppercase mt-7'>JOIN COMMUNITY</button>
          </Disclosure.Panel>
        </>
      )
      }
    </Disclosure >
  )
}
