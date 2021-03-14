import Navigation from '../components/Navigation';
import Image from 'next/image';

// export default function Home() {
//   return (
//     <>
//       <header
//         className="relative flex justify-center"
//         style={{ height: '500px' }}
//       >
//         <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 origin-top-left transform -skew-y-12"></div>
//         <div
//           className="relative pt-5 text-center"
//           style={{ width: '1000px' }}
//         >
//           <Navigation />
//           <div className="pt-40">
//             <Image
//               src="/images/matt.png"
//               alt="Picture of the author"
//               width={300}
//               height={300}
//               className="rounded-full"
//             />
//             <h1>Matt Haffner</h1>
//             <h2>Software Engineer</h2>
//             <h2>Full Stack Web Developer</h2>
//             <button>Hire Me</button>
//           </div>
//         </div>
//       </header>

//       <section>
//         <h2>Selected Works</h2>
//       </section>
//     </>
//   );
// }

export default function Home() {
  return (
    <>
      <header
        className="bg-gradient-to-t from-blue-600 via-blue-500 to-blue-700 relative flex justify-center mb-10"
        style={{ height: '500px' }}
      >
        <div className="relative pt-5" style={{ width: '1000px' }}>
          <Navigation />
          <div className="pt-40 xb-40 flex items-center flex-col">
            <div
              className="mb-10 rounded-full bg-white bg-opacity-25 flex justify-center items-center"
              style={{ height: 312, width: 312 }}
            >
              <Image
                src="/images/matt.png"
                alt="Picture of the author"
                width={300}
                height={300}
                className="rounded-full z-10 shadow"
              />
            </div>
            <div>
              <h1 className="pb-4 text-4xl font-bold text-gray-800">
                Matt Haffner
              </h1>
              <h2 className="text-xl font-medium text-gray-600">
                Full Stack Web Developer
              </h2>
              <h2 className="pb-10 text-xl font-medium text-gray-600">
                Software Engineer
              </h2>
              <div className="text-center">
                <button className="text-white text-xl tracking-wide font-bold bg-green-500 rounded-3xl px-5 py-4 shadow-xl">
                  Hire Me
                </button>
              </div>
            </div>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full z-0"
          style={{ height: '300px' }}
        >
          <polygon fill="white" points="0,100 100,00 100,100" />
        </svg>
      </header>
      <section>
        <h2>Selected Works</h2>
      </section>
    </>
  );
}

// export default function Home() {
//   return (
//     <body className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
//       <Navigation />
//       <main
//         className="bg-white bg-opacity-25"
//         style={{ backdropFilter: 'blur(20px)' }}
//       >
//         <Image
//           src="/images/matt.png"
//           alt="Picture of the author"
//           width={500}
//           height={500}
//           className="rounded-full"
//         />
//         <h1>Matt Haffner</h1>
//         <h2>Software Engineer</h2>
//         <h2>Full Stack Web Developer</h2>
//       </main>
//       <section>
//         <h2>Selected Works</h2>
//       </section>
//     </body>
//   );
// }
