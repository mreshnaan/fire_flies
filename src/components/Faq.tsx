import { DynamicAccordion } from './DynamicAccordion'
import HorizontalTitle from './HorizontalTitle'

function Faq() {
    return (
        <div id='faq' className='flex items-center w-full flex-col pt-[50px] video-bg2 pb-[50px] xl:pt-[150px] xl:pb-[100px]'>
            <div className="flex flex-col w-[300px] xl:w-[1280px] 2xl:w-[1538px] gap-[70px] xl:gap-[140px] px-6 ">
                <div className='flex flex-col items-center xl:flex-row xL:items-start gap-[60px] '>
                    <HorizontalTitle title='FAQ' mainContainerClassName='gap-[10px] hidden xl:flex' />
                    <div className={`xl:hidden flex items-center justify-center gap-10`}>
                        <div className={"border-b-2 w-[319px] h-[1px] border-[#505D65]"}></div>
                        <p className={"font-bold text-[10px] xl:text-[12px] text-[#505D65] uppercase min-w-[100px] w-fit"}>FAQ</p>
                    </div>
                    <div className="flex flex-col gap-[30px]">
                        <h1 className='text-[40px] leading-[44px] text-center xl:w-[799.416px] xl:text-left text-[#13AFB6] xl:text-[80px] font-bold xl:leading-[88px] uppercase'>frequently asked questions</h1>
                    </div>
                </div>

                <div>
                    <DynamicAccordion titleClassName='text-[12px] max-w-[268px] text-left xl:max-w-[917.478px] leading-[18px] xl:text-[24px] xl:leading-[36px]' contentClassName='text-[12px] leading-[18px] xl:text-[20px] xl:leading-[30px]' items={[
                        {
                            title: "Q1 - What is Fireflies?",
                            content:
                                `A: Fireflies is a comprehensive online travel platform that offers access to over 5.1 million accommodations, flights, car rentals, and unique travel experiences worldwide. Our mission is to make travel more accessible, enjoyable, and affordable through innovative technology and the $FFT Token.
                                `,
                        },
                        {
                            title: "Q2 - What is the Fireflies $FFT Token?",
                            content:
                                `A: The Fireflies $FFT Token is our native digital currency, specifically designed for our travel platform. It enables users to access exclusive discounts, participate in unique reward programs, and engage in various other travel-related transactions on the Fireflies platform.                                `,
                        },
                        {
                            title: "Q3 - How can I use the $FFT Token?",
                            content:
                                `A: $FFT Tokens can be used for a variety of purposes, including booking hotels, flights, car rentals, and experiences at discounted rates, participating in our Fireflies Raffles, and accessing special features like our Environmental and Social Responsibility NFT program.
                                `,
                        },
                        {
                            title: "Q4 - Where can I purchase $FFT Tokens?",
                            content:
                                `A: Initially available during our token sale, $FFT Tokens can later be acquired on various cryptocurrency exchanges where they are listed.
                                `,
                        },
                        {
                            title: "Q5 - What are the benefits of using $FFT Tokens over traditional payment methods?",
                            content:
                                `A: Using $FFT Tokens offers several advantages, such as access to significantly reduced prices on travel bookings, exclusive participation in raffles and reward programs, and the potential for token value appreciation.
                                `,
                        },
                        {
                            title: "Q6 - What is the Buy and Burn mechanism for $FFT Tokens?",
                            content:
                                `A: Our Buy and Burn mechanism involves using a portion of the token fees to buy back $FFT Tokens from the market and then 'burn' them, effectively reducing the total supply and potentially increasing the value of the remaining tokens.
                                `,
                        },
                        {
                            title: "Q7 - Is it safe to use cryptocurrency for travel bookings on Fireflies?",
                            content:
                                `A: Absolutely. Fireflies prioritizes the security of all transactions on our platform. Using $FFT Tokens for bookings not only provides exceptional value but is also secure, leveraging the latest in blockchain technology for safe and transparent transactions.
                                `,
                        },
                        {
                            title: "Q8 - How can I stay updated on the latest news and developments for $FFT Tokens?",
                            content:
                                `A: Stay informed by subscribing to our newsletter, following us on social media, and regularly visiting our website for the latest updates, news, and developments related to $FFT Tokens and the Fireflies platform.
                                `,
                        },
                    ]} />
                </div>
            </div>

        </div>
    )
}

export default Faq