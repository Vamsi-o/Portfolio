'use client'
import React, { useEffect, useRef, useState } from 'react'
import { Flag, Target, CheckCircle, ArrowDownCircle, Zap } from 'lucide-react';
import Image from 'next/image';

const Projects = () => {
    // Declare the missing refs
    const mainContentRef = useRef<HTMLDivElement | null>(null);
    const lineProgressRef = useRef<HTMLDivElement | null>(null);
    const isTicking = useRef<boolean>(false);
    const latestProgress = useRef<number>(0);

    const useInView = (options: any): [React.RefObject<HTMLDivElement | null>, boolean] => {
        const ref = useRef<HTMLDivElement | null>(null);
        const [isInView, setIsInView] = useState(false);

        useEffect(() => {
            const observer = new IntersectionObserver(([entry]) => {
                setIsInView(entry.isIntersecting);
            }, options);

            if (ref.current) {
                observer.observe(ref.current);
            }

            return () => {
                if (ref.current)
                    observer.unobserve(ref.current);
            };
        }, [options]);

        return [ref, isInView];
    };

    const AnimateElement: React.FC<{ children: React.ReactNode }> = ({children}) => {
        const [ref, isInView] = useInView({
            threshold:0.4,
        })

        return(
            <div
            ref={ref}
            className={`transition-all duration-700 z-20 ease-in-out ${isInView ? 'opacity-100 translate-y-0 scale-90' : 'opacity-0 translate-y-10 scale-80'}`} >
                {children}
            </div>
        )
    }

    useEffect(() => {
        const mainEl = mainContentRef.current;
        const lineEl = lineProgressRef.current;

        if (!mainEl || !lineEl) return;
        console.log("window height: ",window.innerHeight);
        console.log("div position: ",mainEl.offsetTop);
        console.log("div height: ",mainEl.offsetHeight);
        // Set initial height to 0
        lineEl.style.height = '10%';

        const updateLine = () => {
            // Update line height directly based on progress (0% to 90%)
            lineEl.style.height = `${latestProgress.current * 90}%`;
            isTicking.current = false;
        };

        const onScroll = () => {
            // Get scroll boundaries
            const scrollStart = mainEl.offsetTop / 2;
            const scrollEnd = mainEl.offsetTop + mainEl.offsetHeight - window.innerHeight;
            console.log(scrollEnd);
            
            const currentScroll = window.scrollY;
            console.log("scroll: ",currentScroll);
            
            // Calculate progress
            let progress = (currentScroll - scrollStart) / (scrollEnd - scrollStart);
            latestProgress.current = Math.max(0, Math.min(1, progress));

            if (!isTicking.current) {
                window.requestAnimationFrame(updateLine);
                isTicking.current = true;
            }
        };

        // Add scroll listener
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll(); // Run once on load to set initial state

        // Cleanup
        return () => window.removeEventListener('scroll', onScroll);

    }, []);
    
  return (
  <>
        <style>{`
        @keyframes glow {
            0%, 100% { box-shadow: 0 0 20px 10px #159f91; } 
            50% { box-shadow: 0 0 35px 10px #159f91; }
            }

            .animate-glow {
            animation: glow 5s ease-in-out infinite; 
            }`
        }</style>
        <div className='w-full h-screen'>
            <div ref={mainContentRef} className='min-h-full p-6 relative'>
                <span ref={lineProgressRef} className='absolute w-[1px] left-[50%] bg-[#159f91] transition-height duration-0 ease-linear shadow-[0_0_1px_0.2px_#159f90]'></span>          
                <div className='z-100 flex flex-col gap-24 bg-transparent'>
                    <AnimateElement>
                    <div  className='flex flex-col bg-transparent gap-6 lg:flex-row justify-center p-8 items-center'>
                        <div className='flex-1 rounded-lg p-6 rounded'>
                            <img src={'/H_Home.png'} alt='Hirehawk Home' className='w-full rounded'/>
                        </div>
                        <div className='flex-1 bg-[#090a15] flex justify-center  py-8'>
                            <Image src={'/HireHawk.jpg'} alt='hirehawk logo' width={50} height={50} className='rounded-full shadow-[0_0_25px_15px_#159f91] animate-glow'/>
                            
                        </div>
                        <div className='flex-1 border rounded-lg bg-white p-6'>
                            <h1>Project1</h1>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia ullam voluptas rerum iste qui, non a animi suscipit necessitatibus ut numquam saepe pariatur debitis magni excepturi alias, enim officiis doloribus?</p>
                        </div>

                    </div>
                    </AnimateElement>
                    
                    <AnimateElement>
                        <div className='flex flex-col gap-6 lg:flex-row justify-center p-8 items-center'>
                            <div className='flex-1 border rounded-lg bg-white p-6'>
                                <img src={'A_Home.png'} alt='Ainfinity home' className='w-full rounded'/>
                            </div>
                            <div className='flex-1 bg-[#090a15] flex justify-center  py-8'>
                                <Image src={'/Ainfinity.png'} alt='ainfinity logo' width={50} height={50} className='animate-glow rounded-full shadow shadow-[0_0_25px_15px_#159f91]'/>
                            </div>
                            <div className='flex-1 border bg-white rounded-lg p-6'>
                                <h1>Project1</h1>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia ullam voluptas rerum iste qui, non a animi suscipit necessitatibus ut numquam saepe pariatur debitis magni excepturi alias, enim officiis doloribus?</p>
                            </div>

                        </div>
                    </AnimateElement>

                </div>
            </div>
            
        </div>
    </>
  )
}

export default Projects



// import React, { useEffect, useRef } from 'react';
// import { Zap, Gem, Box, ArrowDownCircle } from 'lucide-react';

// export default function Projects() {
//   const lineProgressRef = useRef<HTMLDivElement | null>(null);
//   const mainContentRef = useRef<HTMLDivElement | null>(null);
//   const projectsContainerRef = useRef<HTMLDivElement | null>(null);
  
//   const node1Ref = useRef<HTMLDivElement | null>(null);
//   const node2Ref = useRef<HTMLDivElement | null>(null);
//   const node3Ref = useRef<HTMLDivElement | null>(null);

//   const isTicking = useRef<any>(false);
//   const latestProgress = useRef<any>(0);
  
//   const nodes = [
//     { ref: node1Ref, position: 0.25 },
//     { ref: node2Ref, position: 0.50 },
//     { ref: node3Ref, position: 0.75 }
//   ];

//   useEffect(() => {
//     // --- This is the core animation logic, adapted for React ---

//     const updateLine = () => {
//       if (lineProgressRef.current) {
//         // Read the latest progress and update the CSS transform
//         lineProgressRef.current.style.transform = `scaleY(${latestProgress.current})`;
//       }

//       // Check node proximity
//       const threshold = 0.05; // How "close" the line needs to be to activate
      
//       nodes.forEach(node => {
//         if (node.ref.current) {
//           const isPassed = latestProgress.current >= node.position;
//           const isClose = Math.abs(latestProgress.current - node.position) < threshold;

//           if (isPassed || isClose) {
//             node.ref.current.classList.add('active-node');
//           } else {
//             node.ref.current.classList.remove('active-node');
//           }
//         }
//       });
      
//       // Reset the flag
//       isTicking.current = false;
//     };

//     const onScroll = () => {
//       const mainContentEl = mainContentRef.current;
//       const projectsContainerEl = projectsContainerRef.current;

//       if (!mainContentEl || !projectsContainerEl) return;

//       // --- This is the core calculation ---
//       const scrollStart = mainContentEl.offsetTop;
//       const scrollEnd = projectsContainerEl.offsetTop + projectsContainerEl.clientHeight - window.innerHeight;
//       const currentScroll = window.scrollY;

//       let progress = (currentScroll - scrollStart) / (scrollEnd - scrollStart);
//       latestProgress.current = Math.max(0, Math.min(1, progress));

//       if (!isTicking.current) {
//         window.requestAnimationFrame(updateLine);
//         isTicking.current = true;
//       }
//     };

//     // Attach the scroll listener
//     window.addEventListener('scroll', onScroll, { passive: true });
    
//     // Run it once on load to set initial state
//     onScroll();

//     // Cleanup function: remove the listener when the component unmounts
//     return () => {
//       window.removeEventListener('scroll', onScroll);
//     };
//   }, [nodes]); // Add nodes to dependency array (it's stable, but good practice)

//   return (
//     <>
//       {/* This <style> block contains the global styles and animations
//         needed for this component. Next.js supports this.
//       */}
//       <style jsx global>{`
//         body {
//             font-family: 'Inter', sans-serif;
//             background-color: #0A0A0A;
//             color: #f3f4f6;
//         }
//         main {
//             position: relative;
//         }
//         .sticky-line-container {
//             position: sticky;
//             top: 15vh;
//             height: 100%;
//         }
//         #line-progress {
//             box-shadow: 0 0 8px #06b6d4, 0 0 12px #06b6d4;
//             transition: transform 0.05s linear;
//         }
//         .node-icon-wrapper {
//             transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
//             border-color: #4b5563;
//         }
//         @keyframes pulse {
//             0%, 100% {
//                 transform: scale(1);
//                 box-shadow: 0 0 10px #06b6d4, 0 0 15px #06b6d4;
//             }
//             50% {
//                 transform: scale(1.15);
//                 box-shadow: 0 0 15px #06b6d4, 0 0 25px #06b6d4;
//             }
//         }
//         .node-container.active-node .node-icon-wrapper {
//             animation: pulse 1.5s infinite;
//             border-color: #06b6d4;
//         }
//         .project-card {
//             border: 1px solid #374151;
//             transition: border-color 0.3s ease, transform 0.3s ease;
//         }
//         .project-card:hover {
//             transform: translateY(-5px);
//             border-color: #06b6d4;
//         }
//       `}</style>

//       {/* Hero Section */}
//       <section className="h-screen w-full flex flex-col justify-center items-center text-center p-8 bg-[#0A0A0A]">
//         <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 mb-4">
//           Your Name
//         </h1>
//         <p className="text-xl md:text-2xl text-gray-400 max-w-2xl">
//           This is your professional summary. A brief, powerful statement about who you are, what you do, and the value you bring to the table.
//         </p>
//         <div className="mt-12 text-cyan-400 animate-bounce">
//           {/* <ArrowDownCircle size={24} /> */}
//         </div>
//       </section>

//       {/* Main Content: Projects Section */}
//       <main id="main-content" ref={mainContentRef} className="w-full max-w-6xl mx-auto p-8">
//         <div className="flex flex-col md:flex-row gap-16">
          
//           {/* Left Column: The Sticky Animated Line */} 
//           <div className="w-full md:w-1/3">
//             <div className="sticky-line-container">
//               {/* The "track" for the line */}
//               <div id="line-track" className="w-1 h-full bg-gray-800 rounded-full relative mx-auto">
                
//                 {/* The animated "progress" line */}
//                 <div 
//                   id="line-progress"
//                   ref={lineProgressRef}
//                   className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full"
//                   style={{ transform: 'scaleY(0)', transformOrigin: 'top' }}
//                 >
//                 </div>

//                 {/* Nodes on the line */}
//                 <div id="node-1" ref={node1Ref} className="node-container absolute w-full flex justify-center" style={{ top: '25%' }}>
//                   <div className="node-icon-wrapper p-2 bg-gray-800 rounded-full shadow-lg border-2">
//                     {/* <Zap size={20} className="text-cyan-300" /> */}
//                   </div>
//                 </div>
//                 <div id="node-2" ref={node2Ref} className="node-container absolute w-full flex justify-center" style={{ top: '50%' }}>
//                   <div className="node-icon-wrapper p-2 bg-gray-800 rounded-full shadow-lg border-2">
//                     {/* <Gem size={20} className="text-blue-400" /> */}
//                   </div>
//                 </div>
//                 <div id="node-3" ref={node3Ref} className="node-container absolute w-full flex justify-center" style={{ top: '75%' }}>
//                   <div className="node-icon-wrapper p-2 bg-gray-800 rounded-full shadow-lg border-2">
//                     {/* <Box size={20} className="text-cyan-300" /> */}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Column: The Scrolling Project Cards */}
//           <div id="projects-container" ref={projectsContainerRef} className="w-full md:w-2/3 flex flex-col gap-16" style={{ minHeight: '250vh' }}>
            
//             {/* Project Card 1 */}
//             <div ref={node1Ref} className="project-card h-auto bg-[#111111] p-6 rounded-2xl shadow-lg" style={{ marginTop: '15vh' }}>
//               <h2 className="text-3xl font-bold mb-3 text-cyan-300">Project One Title</h2>
//               <p className="text-gray-400">
//                 This is the description for your first project. Explain the problem, your solution, and the technologies you used.
//               </p>
//               <div className="mt-4 flex gap-2">
//                 <span className="bg-gray-800 text-gray-300 text-xs font-medium px-2.5 py-0.5 rounded-full">React</span>
//                 <span className="bg-gray-800 text-gray-300 text-xs font-medium px-2.5 py-0.5 rounded-full">Node.js</span>
//                 <span className="bg-gray-800 text-gray-300 text-xs font-medium px-2.5 py-0.5 rounded-full">Tailwind</span>
//               </div>
//             </div>
            
//             {/* Project Card 2 */}
//             <div ref={node2Ref} className="project-card h-auto bg-[#111111] p-6 rounded-2xl shadow-lg" style={{ marginTop: '30vh' }}>
//               <h2 className="text-3xl font-bold mb-3 text-blue-400">Project Two Title</h2>
//               <p className="text-gray-400">
//                 This is the description for your second project. This card is spaced further down, aligning with the second node.
//               </p>
//               <div className="mt-4 flex gap-2">
//                 <span className="bg-gray-800 text-gray-300 text-xs font-medium px-2.5 py-0.5 rounded-full">Python</span>
//                 <span className="bg-gray-800 text-gray-300 text-xs font-medium px-2.5 py-0.5 rounded-full">Flask</span>
//                 <span className="bg-gray-800 text-gray-300 text-xs font-medium px-2.5 py-0.5 rounded-full">PostgreSQL</span>
//               </div>
//             </div>

//             {/* Project Card 3 */}
//             <div ref={node3Ref} className="project-card h-auto bg-[#111111] p-6 rounded-2xl shadow-lg" style={{ marginTop: '30vh' }}>
//               <h2 className="text-3xl font-bold mb-3 text-cyan-300">Project Three Title</h2>
//               <p className="text-gray-400">
//                 And here is the final project. The long scroll height gives the animation room to play.
//               </p>
//               <div className="mt-4 flex gap-2">
//                 <span className="bg-gray-800 text-gray-300 text-xs font-medium px-2.5 py-0.5 rounded-full">Next.js</span>
//                 <span className="bg-gray-800 text-gray-300 text-xs font-medium px-2.5 py-0.5 rounded-full">Firebase</span>
//                 <span className="bg-gray-800 text-gray-300 text-xs font-medium px-2.5 py-0.5 rounded-full">Vercel</span>
//               </div>
//             </div>

//           </div>
//         </div>
//       </main>

//       {/* Footer */}
//       <footer className="h-96 w-full flex flex-col justify-center items-center text-center p-8 bg-[#0A0A0A] mt-32">
//         <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
//         <p className="text-lg text-gray-400 mb-8">I'm currently available for freelance work and new opportunities.</p>
//         <a 
//           href="mailto:your.email@example.com"
//           className="px-6 py-3 bg-gradient-to-r from-blue-400 to-cyan-400 text-black font-semibold rounded-lg shadow-lg hover:scale-105 transform transition-transform"
//         >
//            Email Me
//         </a>
//       </footer>
//     </>
//   );
// }
