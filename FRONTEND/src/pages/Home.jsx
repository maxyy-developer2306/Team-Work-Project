import React from 'react'
import { Truck, RotateCcw, HandCoins, SportShoe, ShoppingCart } from 'lucide-react';


export const Home = () => {
    return (
        <div>
            <section
                class="relative mx-auto mt-5 h-[365px] w-full overflow-hidden rounded-2xl
           border border-slate-100
           bg-gradient-to-r from-blue-50 via-white to-blue-50"
            >


                <div class="absolute left-[5.3%] top-[45px] z-30">


                    <div
                        class="inline-flex items-center rounded-md
               bg-blue-100 px-3 py-1
               text-[14px] font-bold tracking-wide
               text-blue-600"
                    >
                        SUMMER SALE
                    </div>



                    <h1
                        class="mt-3 w-90 text-[43px] font-extrabold
               leading-[1.05] tracking-tight
               text-black"
                    >
                        Big Savings on

                        Top Brands
                    </h1>



                    <p
                        class=" w-100 mt-4 text-[17px]
               font-medium leading-7
               text-slate-600"
                    >
                        Shop the latest products with unbeatable deals

                        and fast delivery.
                    </p>



                    <button
                        class="mt-6 flex items-center gap-7
               rounded-lg
               bg-blue-600
               px-7 py-3
               text-[16px] font-bold
               text-white
               shadow-lg shadow-blue-200
               transition-all duration-300
               hover:-translate-y-1
               hover:bg-blue-700"
                    >

                        Shop Now

                        <span class="text-2xl leading-none">
                            →
                        </span>

                    </button>

                </div>



                <div
                    class="absolute right-0 top-0
             h-full w-[63%]"
                >



                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWeWjmWxDJGCEvojcFCy5Sl0aAFNZAao7aS7Xv_3djUg&s=10"
                        alt="Smart Watch"
                        class="absolute
               left-[7%]
               top-27
               z-20
               h-[165px]
               w-[210px]
               object-contain"
                    />



                    <img
                        src="https://png.pngtree.com/png-clipart/20241230/original/pngtree-gaming-headphone-png-image_18355670.png"
                        alt="Headphones"
                        class="absolute
               left-55
               z-20
               h-[225px]
               w-[270px]
               object-contain"
                    />



                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN_-xFy4ieGsvSiuCU0m2r7MWbBDUS2GEq1Cp4bxf44Q&s=10"
                        alt="iPhone"
                        class="absolute
               right-[20%]
               z-30
               h-[260px]
               w-[180px]
               object-contain"
                    />



                    <div
                        class="absolute right-8 top-[55px]
               z-40
               flex h-[140px] w-[140px]
               items-center justify-center
               rounded-full
               bg-blue-600
               text-center
               text-white
               shadow-xl"
                    >

                        <div>

                            <p class="text-[15px] font-semibold">
                                UP TO
                            </p>

                            <p
                                class="text-[39px]
                   font-extrabold
                   leading-none"
                            >
                                70%
                            </p>

                            <p
                                class="mt-1
                   text-[14px]
                   font-semibold"
                            >
                                OFF
                            </p>

                        </div>

                    </div>



                    <div
                        class="absolute
               bottom-[-20px]
               left-[2%]
               h-[105px]
               w-[88%]
               rounded-[50%]
               bg-gradient-to-b
               from-white
               to-blue-100
               shadow-[0_-5px_25px_rgba(59,130,246,0.12)]"
                    >
                    </div>



                    <div
                        class="absolute
               bottom-[58px]
               left-[13%]
               h-[65px]
               w-[65%]
               rounded-[50%]
               bg-gradient-to-b
               from-white
               to-slate-100
               shadow-xl"
                    >
                    </div>

                </div>



                <div
                    class="absolute
             bottom-[-35px]
             left-[-35px]
             z-10
             text-[100px]
             opacity-20"
                >
                    🌴
                </div>



                <div
                    class="absolute
             bottom-[-35px]
             right-[-35px]
             z-10
             rotate-[-10deg]
             text-[100px]
             opacity-20"
                >
                    🌴
                </div>



                <div
                    class="absolute
             bottom-[12px]
             left-[44%]
             z-50
             flex items-center gap-3"
                >

                    <span
                        class="h-2 w-5
               rounded-full
               bg-blue-600"
                    ></span>

                    <span
                        class="h-2 w-2
               rounded-full
               bg-slate-300"
                    ></span>

                    <span
                        class="h-2 w-2
               rounded-full
               bg-slate-300"
                    ></span>

                </div>

            </section>


            <div class="w-full px-3 md:px-6 py-2">

                <div class="w-full border border-slate-100 rounded-xl shadow-sm bg-white">
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 px-5 py-2">

                        <div class="flex items-center gap-3">
                            <Truck size={40} />

                            <div>
                                <h3 class="text-[11px] font-bold">Free Delivery</h3>
                                <p class="text-[10px] text-slate-500">On all orders over $50</p>
                            </div>
                        </div>

                        <div class="flex items-center gap-3">
                            <RotateCcw size={40} />
                            <div>
                                <h3 class="text-[11px] font-bold">Easy Returns</h3>
                                <p class="text-[10px] text-slate-500">30 days return policy</p>
                            </div>
                        </div>

                        <div class="flex items-center gap-3">
                            <HandCoins size={40} />
                            <div>
                                <h3 class="text-[11px] font-bold">Secure Payment</h3>
                                <p class="text-[10px] text-slate-500">100% secure payment</p>
                            </div>
                        </div>

                        <div class="flex items-center gap-3">
                            <SportShoe size={40} />
                            <div>
                                <h3 class="text-[11px] font-bold">24/7 Support</h3>
                                <p class="text-[10px] text-slate-500">Dedicated support</p>
                            </div>
                        </div>

                    </div>
                </div>


                <div class="mt-2 border border-slate-100 rounded-xl shadow-sm overflow-hidden">

                    <div class="grid grid-cols-5 md:grid-cols-10 gap-2 px-4 py-2">

                        <div class="flex flex-col items-center justify-center">
                            <div class="w-12 h-12 rounded-full bg-slate-50 overflow-hidden flex items-center justify-center">
                                <img
                                    src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=150&q=80"
                                    class="w-full h-full object-cover"
                                />
                            </div>
                            <p class="text-[9px] font-semibold mt-1">Electronics</p>
                        </div>

                        <div class="flex flex-col items-center justify-center">
                            <div class="w-12 h-12 rounded-full bg-slate-50 overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=150&q=80"
                                    class="w-full h-full object-cover"
                                />
                            </div>
                            <p class="text-[9px] font-semibold mt-1">Fashion</p>
                        </div>

                        <div class="flex flex-col items-center justify-center">
                            <div class="w-12 h-12 rounded-full bg-slate-50 overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=150&q=80"
                                    class="w-full h-full object-cover"
                                />
                            </div>
                            <p class="text-[9px] font-semibold mt-1 text-center">Home & Kitchen</p>
                        </div>

                        <div class="flex flex-col items-center justify-center">
                            <div class="w-12 h-12 rounded-full bg-slate-50 overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=150&q=80"
                                    class="w-full h-full object-cover"
                                />
                            </div>
                            <p class="text-[9px] font-semibold mt-1">Beauty</p>
                        </div>

                        <div class="flex flex-col items-center justify-center">
                            <div class="w-12 h-12 rounded-full bg-slate-50 overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=150&q=80"
                                    class="w-full h-full object-cover"
                                />
                            </div>
                            <p class="text-[9px] font-semibold mt-1">Sports</p>
                        </div>

                        <div class="flex flex-col items-center justify-center">
                            <div class="w-12 h-12 rounded-full bg-slate-50 overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=150&q=80"
                                    class="w-full h-full object-cover"
                                />
                            </div>
                            <p class="text-[9px] font-semibold mt-1">Books</p>
                        </div>

                        <div class="flex flex-col items-center justify-center">
                            <div class="w-12 h-12 rounded-full bg-slate-50 overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1594787318286-3d835c1d207f?auto=format&fit=crop&w=150&q=80"
                                    class="w-full h-full object-cover"
                                />
                            </div>
                            <p class="text-[9px] font-semibold mt-1">Toys</p>
                        </div>

                        <div class="flex flex-col items-center justify-center">
                            <div class="w-12 h-12 rounded-full bg-slate-50 overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=150&q=80"
                                    class="w-full h-full object-cover"
                                />
                            </div>
                            <p class="text-[9px] font-semibold mt-1">Automotive</p>
                        </div>

                        <div class="flex flex-col items-center justify-center">
                            <div class="w-12 h-12 rounded-full bg-slate-50 overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=150&q=80"
                                    class="w-full h-full object-cover"
                                />
                            </div>
                            <p class="text-[9px] font-semibold mt-1">Health</p>
                        </div>

                        <div class="flex flex-col items-center justify-center">
                            <div class="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center">
                                <i data-lucide="grid-2x2" class="w-6 h-6 text-blue-600"></i>
                            </div>
                            <p class="text-[9px] font-semibold mt-1">More</p>
                        </div>

                    </div>
                </div>


                <div class="flex items-center justify-between mt-4 mb-2 px-4">

                    <h2 class="text-sm md:text-base font-bold">
                        Best Deals of the Day 🔥
                    </h2>

                    <a href="#" class="text-[10px] md:text-xs text-blue-600 font-semibold">
                        View All Deals →
                    </a>

                </div>


                <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">

                    <div class="border border-slate-200 rounded-lg p-2 bg-white hover:shadow-md transition">

                        <div class="relative h-32 bg-slate-50 rounded-md flex items-center justify-center">

                            <span class="absolute top-1 left-1 bg-red-500 text-white text-[8px] px-2 py-1 rounded">
                                -25%
                            </span>

                            <img
                                src="https://images.unsplash.com/photo-1544117519-31a4b719223d?auto=format&fit=crop&w=300&q=80"
                                class="h-32  object-contain"
                            />
                        </div>

                        <h3 class="text-[10px] font-semibold mt-2">
                            boAt Wave Call Smartwatch
                        </h3>

                        <div class="flex items-center gap-1 mt-1">
                            <span class="font-bold text-xs">$39.99</span>
                            <span class="text-[9px] text-slate-400 line-through">$59.99</span>
                        </div>

                        <div class="flex items-center mt-1">
                            <span class="text-yellow-500 text-xs">★★★★★</span>
                            <span class="text-[8px] text-slate-400 ml-1">(250)</span>
                        </div>

                    </div>


                    <div class="border border-slate-200 rounded-lg p-2 bg-white hover:shadow-md transition">

                        <div class="relative h-32 bg-slate-50 rounded-md">
                            <span class="absolute top-1 left-1 z-10 bg-red-500 text-white text-[8px] px-2 py-1 rounded">
                                -30%
                            </span>

                            <img
                                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=300&q=80"
                                class="w-full h-full object-contain"
                            />
                        </div>

                        <h3 class="text-[10px] font-semibold mt-2">
                            Nike Air Max 270
                        </h3>

                        <div class="flex items-center gap-1 mt-1">
                            <span class="font-bold text-xs">$89.99</span>
                            <span class="text-[9px] text-slate-400 line-through">$129.99</span>
                        </div>

                        <div class="flex items-center mt-1">
                            <span class="text-yellow-500 text-xs">★★★★★</span>
                            <span class="text-[8px] text-slate-400 ml-1">(412)</span>
                        </div>

                    </div>


                    <div class="border border-slate-200 rounded-lg p-2 bg-white hover:shadow-md transition">

                        <div class="relative h-32 bg-slate-50 rounded-md">
                            <span class="absolute top-1 left-1 z-10 bg-red-500 text-white text-[8px] px-2 py-1 rounded">
                                -25%
                            </span>

                            <img
                                src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=300&q=80"
                                class="w-full h-full object-contain"
                            />
                        </div>

                        <h3 class="text-[10px] font-semibold mt-2">
                            American Tourister Backpack
                        </h3>

                        <div class="flex items-center gap-1 mt-1">
                            <span class="font-bold text-xs">$29.99</span>
                            <span class="text-[9px] text-slate-400 line-through">$39.99</span>
                        </div>

                        <div class="flex items-center mt-1">
                            <span class="text-yellow-500 text-xs">★★★★★</span>
                            <span class="text-[8px] text-slate-400 ml-1">(198)</span>
                        </div>

                    </div>


                    <div class="border border-slate-200 rounded-lg p-2 bg-white hover:shadow-md transition">

                        <div class="relative h-32 bg-slate-50 rounded-md">
                            <span class="absolute top-1 left-1 z-10 bg-red-500 text-white text-[8px] px-2 py-1 rounded">
                                -30%
                            </span>

                            <img
                                src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=300&q=80"
                                class="w-full h-full object-contain"
                            />
                        </div>

                        <h3 class="text-[10px] font-semibold mt-2">
                            Canon EOS 200D II Camera
                        </h3>

                        <div class="flex items-center gap-1 mt-1">
                            <span class="font-bold text-xs">$499.99</span>
                            <span class="text-[9px] text-slate-400 line-through">$649.99</span>
                        </div>

                        <div class="flex items-center mt-1">
                            <span class="text-yellow-500 text-xs">★★★★★</span>
                            <span class="text-[8px] text-slate-400 ml-1">(233)</span>
                        </div>

                    </div>


                    <div class="border border-slate-200 rounded-lg p-2 bg-white hover:shadow-md transition">

                        <div class="relative h-32 bg-slate-50 rounded-md">
                            <span class="absolute top-1 left-1 z-10 bg-red-500 text-white text-[8px] px-2 py-1 rounded">
                                -40%
                            </span>

                            <img
                                src="https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=300&q=80"
                                class="w-full h-full object-contain"
                            />
                        </div>

                        <h3 class="text-[10px] font-semibold mt-2">
                            Perfume for Men 100ml
                        </h3>

                        <div class="flex items-center gap-1 mt-1">
                            <span class="font-bold text-xs">$24.99</span>
                            <span class="text-[9px] text-slate-400 line-through">$41.99</span>
                        </div>

                        <div class="flex items-center mt-1">
                            <span class="text-yellow-500 text-xs">★★★★★</span>
                            <span class="text-[8px] text-slate-400 ml-1">(145)</span>
                        </div>

                    </div>


                    <div class="border border-slate-200 rounded-lg p-2 bg-white hover:shadow-md transition">

                        <div class="relative h-32 bg-slate-50 rounded-md">
                            <span class="absolute top-1 left-1 z-10 bg-red-500 text-white text-[8px] px-2 py-1 rounded">
                                -30%
                            </span>

                            <img
                                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=300&q=80"
                                class="w-full h-full object-contain"
                            />
                        </div>

                        <h3 class="text-[10px] font-semibold mt-2">
                            Sony WH-1000XM4 Headphones
                        </h3>

                        <div class="flex items-center gap-1 mt-1">
                            <span class="font-bold text-xs">$279.99</span>
                            <span class="text-[9px] text-slate-400 line-through">$399.99</span>
                        </div>

                        <div class="flex items-center mt-1">
                            <span class="text-yellow-500 text-xs">★★★★★</span>
                            <span class="text-[8px] text-slate-400 ml-1">(367)</span>
                        </div>

                    </div>

                </div>


                <div class="grid grid-cols-1 md:grid-cols-4 gap-3 mt-4">

                    <div class="h-24 rounded-xl bg-gradient-to-r from-orange-50 to-orange-100 relative overflow-hidden p-4">

                        <h3 class="text-[9px] font-bold">Fashion Sale</h3>

                        <h2 class="text-sm font-bold">
                            50% OFF
                        </h2>

                        <p class="text-[8px]">
                            On Latest Collection
                        </p>

                        <button class="mt-2 bg-orange-500 text-white text-[8px] px-3 py-1 rounded">
                            Shop Now
                        </button>

                        <img
                            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=300&q=80"
                            class="absolute right-0 bottom-0 h-full w-1/2 object-cover"
                        />

                    </div>


                    <div class="h-24 rounded-xl bg-gradient-to-r from-blue-50 to-blue-100 relative overflow-hidden p-4">

                        <h3 class="text-[9px] font-bold">Smartphones</h3>

                        <h2 class="text-sm font-bold">
                            Up to <span class="text-blue-600">40%</span> OFF
                        </h2>

                        <p class="text-[8px]">
                            On Top Brands
                        </p>

                        <button class="mt-2 bg-blue-600 text-white text-[8px] px-3 py-1 rounded">
                            Shop Now
                        </button>

                        <img
                            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=300&q=80"
                            class="absolute right-0 bottom-0 h-full w-1/2 object-cover"
                        />

                    </div>


                    <div class="h-24 rounded-xl bg-gradient-to-r from-slate-50 to-blue-100 relative overflow-hidden p-4">

                        <h3 class="text-[9px] font-bold">Home Essentials</h3>

                        <h2 class="text-sm font-bold">
                            Up to <span class="text-blue-600">60%</span> OFF
                        </h2>

                        <p class="text-[8px]">
                            Best Quality Products
                        </p>

                        <button class="mt-2 bg-blue-600 text-white text-[8px] px-3 py-1 rounded">
                            Shop Now
                        </button>

                        <img
                            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=300&q=80"
                            class="absolute right-0 bottom-0 h-full w-1/2 object-cover"
                        />

                    </div>


                    <div class="h-24 rounded-xl bg-gradient-to-r from-indigo-50 to-indigo-100 relative overflow-hidden p-4">

                        <h3 class="text-[9px] font-bold">Smart Gadgets</h3>

                        <h2 class="text-sm font-bold">
                            Up to <span class="text-blue-600">45%</span> OFF
                        </h2>

                        <p class="text-[8px]">
                            Upgrade Your Life
                        </p>

                        <button class="mt-2 bg-blue-600 text-white text-[8px] px-3 py-1 rounded">
                            Shop Now
                        </button>

                        <img
                            src="https://images.unsplash.com/photo-1589003077984-894e133dabab?auto=format&fit=crop&w=300&q=80"
                            class="absolute right-0 bottom-0 h-full w-1/2 object-cover"
                        />

                    </div>

                </div>


                <div class="flex items-center justify-between mt-6 px-4">

                    <h2 class="font-bold text-sm">
                        Top Brands
                    </h2>

                    <div class="hidden md:flex items-center gap-12">

                        <span class="text-lg font-bold"></span>

                        <span class="text-[11px] font-bold text-blue-600">
                            SAMSUNG
                        </span>

                        <span class="text-sm font-bold">
                            SONY
                        </span>

                        <span class="text-xl italic font-black">
                            NIKE
                        </span>

                        <span class="text-sm font-bold">
                            adidas
                        </span>

                        <span class="text-sm">
                            boAt
                        </span>

                        <span class="text-[11px] font-bold text-blue-600">
                            PHILIPS
                        </span>

                    </div>

                    <a href="#" class="text-[10px] text-blue-600 font-semibold">
                        View All Brands →
                    </a>

                </div>


                <div class="mt-3 rounded-xl bg-slate-50 border border-slate-100">

                    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 px-5 py-3">

                        <div class="flex items-center gap-3">
                            <i data-lucide="badge-check" class="w-5 h-5 text-blue-600"></i>
                            <div>
                                <h3 class="text-[9px] font-bold">
                                    100% Original Products
                                </h3>
                                <p class="text-[8px] text-slate-500">
                                    Genuine & Trusted Products
                                </p>
                            </div>
                        </div>

                        <div class="flex items-center gap-3">
                            <i data-lucide="truck" class="w-5 h-5 text-blue-600"></i>
                            <div>
                                <h3 class="text-[9px] font-bold">
                                    Free Shipping
                                </h3>
                                <p class="text-[8px] text-slate-500">
                                    On all orders over $50
                                </p>
                            </div>
                        </div>

                        <div class="flex items-center gap-3">
                            <i data-lucide="shield-check" class="w-5 h-5 text-blue-600"></i>
                            <div>
                                <h3 class="text-[9px] font-bold">
                                    Money Back Guarantee
                                </h3>
                                <p class="text-[8px] text-slate-500">
                                    30 days money back
                                </p>
                            </div>
                        </div>

                        <div class="flex items-center gap-3">
                            <i data-lucide="wallet-cards" class="w-5 h-5 text-blue-600"></i>
                            <div>
                                <h3 class="text-[9px] font-bold">
                                    Safe & Secure Payments
                                </h3>
                                <p class="text-[8px] text-slate-500">
                                    100% secure payments
                                </p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>


            <footer class="w-full bg-white border-t border-slate-100">
                <div class="px-6 py-6">

                    <div class="grid grid-cols-4 gap-12">

                        <div>
                            <div class="flex items-center gap-2">
                                <ShoppingCart size={40} className='text-blue-800' />

                                <h2 class="text-xl font-bold text-blue-600">
                                    EcomRus
                                </h2>
                            </div>

                            <p class="mt-3 max-w-xs text-sm leading-5 text-slate-600">
                                Your one-stop destination for the best products
                                at the best prices. Shop more, save more.
                            </p>
                        </div>


                        <div>
                            <h3 class="text-sm font-bold text-slate-800">
                                Quick Links
                            </h3>

                            <div class="mt-4 space-y-2 text-sm text-slate-600">
                                <p class="cursor-pointer hover:text-blue-600">About Us</p>
                                <p class="cursor-pointer hover:text-blue-600">Contact Us</p>
                                <p class="cursor-pointer hover:text-blue-600">FAQs</p>
                                <p class="cursor-pointer hover:text-blue-600">Shipping & Delivery</p>
                                <p class="cursor-pointer hover:text-blue-600">Return Policy</p>
                            </div>
                        </div>


                        <div>
                            <h3 class="text-sm font-bold text-slate-800">
                                Customer Service
                            </h3>

                            <div class="mt-4 space-y-2 text-sm text-slate-600">
                                <p class="cursor-pointer hover:text-blue-600">Track Order</p>
                                <p class="cursor-pointer hover:text-blue-600">My Account</p>
                                <p class="cursor-pointer hover:text-blue-600">Wishlist</p>
                                <p class="cursor-pointer hover:text-blue-600">Help Center</p>
                                <p class="cursor-pointer hover:text-blue-600">
                                    Terms & Conditions
                                </p>
                            </div>
                        </div>


                        <div>
                            <h3 class="text-sm font-bold text-slate-800">
                                Stay Updated
                            </h3>

                            <p class="mt-3 max-w-sm text-sm leading-5 text-slate-600">
                                Subscribe to get special offers, free giveaways,
                                and once-in-a-lifetime deals.
                            </p>

                            <div class="mt-4 flex w-full max-w-md">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    class="h-10 w-full rounded-l-lg border border-slate-200 px-3 text-sm outline-none focus:border-blue-500"
                                />

                                <button
                                    class="h-10 rounded-r-lg bg-blue-600 px-5 text-sm font-semibold text-white transition hover:bg-blue-700"
                                >
                                    Subscribe
                                </button>
                            </div>

                            <div class="mt-5 flex items-center gap-5">

                                <div class="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-blue-600 hover:bg-blue-50 cursor-pointer">
                                    f
                                </div>

                                <div class="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-pink-500 hover:bg-pink-50 cursor-pointer">
                                    ◎
                                </div>

                                <div class="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-sky-500 hover:bg-sky-50 cursor-pointer">
                                    ♥
                                </div>

                                <div class="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-red-500 hover:bg-red-50 cursor-pointer">
                                    ▶
                                </div>

                            </div>
                        </div>

                    </div>


                    <div class="mt-5 pt-1">
                        <p class="text-xs font-medium text-slate-500">
                            © 2024 EcomRus. All Rights Reserved.
                        </p>
                    </div>

                </div>
            </footer>
        </div>
    )
}
