function HeroSection() {
    return (
        <>
            <section class="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                    <a href="/Quiz" class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-200 bg-white/10 rounded-full hover:bg-white/20" role="alert">
                        <span class="text-xs bg-cyan-500 rounded-full text-white px-4 py-1.5 mr-3">New</span> <span class="text-sm font-medium">Try our interactive JavaScript Quiz now!</span>
                        <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                    </a>
                    <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Master Your Knowledge with Interactive Quizzes</h1>
                    <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 xl:px-48">Challenge yourself with our comprehensive quiz platform. Test your skills in JavaScript, web development, and programming concepts. Track your progress and compete with others!</p>
                    <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                        <a href="/Quiz" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 focus:ring-4 focus:ring-cyan-300">
                            Start Quiz Now
                            <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                        
                    </div>
                    <div class="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
                        <span class="font-semibold text-gray-400 uppercase">FEATURED CATEGORIES</span>
                        <div class="flex flex-wrap justify-center items-center mt-8 text-gray-300 sm:justify-between">
                            <div class="mr-5 mb-5 lg:mb-0 hover:text-cyan-400">
                                <div class="flex items-center">
                                    <svg class="h-8 w-8 mr-2" stroke="currentColor" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                                    </svg>
                                    <span class="font-semibold">JavaScript</span>
                                </div>
                            </div>
                            <div class="mr-5 mb-5 lg:mb-0 hover:text-cyan-400">
                                <div class="flex items-center">
                                    <svg class="h-8 w-8 mr-2" stroke="currentColor" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                                    </svg>
                                    <span class="font-semibold">Web Development</span>
                                </div>
                            </div>
                            <div class="mr-5 mb-5 lg:mb-0 hover:text-cyan-400">
                                <div class="flex items-center">
                                    <svg class="h-8 w-8 mr-2" stroke="currentColor" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                                    </svg>
                                    <span class="font-semibold">Programming</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default HeroSection;