import { useState } from 'react'
import { poetry } from './assets/poetry'
import { FaSyncAlt, FaCopy } from 'react-icons/fa';
import logo from './images/logo.png'

function App() {

  const [currentPoetry, setPoatry] = useState(
    {
      key: poetry[22].key,
      text1: poetry[22].text1,
      text2: poetry[22].text2,
      author: poetry[22].author
    })

  function GetPoetry() {
    let index;
    do {
      index = Math.floor(Math.random() * poetry.length);
    } while (index === currentPoetry.key);

    setPoatry(
      {
        key: poetry[index].key,
        text1: poetry[index].text1,
        text2: poetry[index].text2,
        author: poetry[index].author
      }
    )
  }

  const [copied, setCopied] = useState(false);
  const copyToclipboard = () => {
    const textToCopy = `${currentPoetry.text1} \n ${currentPoetry.text2}`;
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() =>
        setCopied(false), 2000);
    }).catch(err => {
      console.error("Failed to copy text", err);
    });
  };


  return (
    <div className="flex flex-col min-h-screen bg-[url('./images/wall-background.jpg')] bg-cover bg-no-repeate">
      {/* Header */}
      <header className="flex items-center justify-center py-4 px-6 bg-gray-900">
        <img className="w-16 md:w-24 lg:w-32 invert mr-4" src={logo} alt="logo" />
        <h1 className="font-Kufi text-2xl md:text-4xl lg:text-5xl text-white">
          اقتباسات من الأدب العربي
        </h1>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center">
        <div className="relative flex flex-col items-center justify-center  w-11/12 md:w-2/3 lg:w-1/2 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-white rounded-lg p-8 shadow-lg">
          <div className="text-2xl md:text-4xl lg:text-5xl mb-4 text-center leading-relaxed">
            <h1 className='leading-loose quote-text'>{currentPoetry.text1}</h1>
            <h1 className='quote-text transition-opacity duration-300'>{currentPoetry.text2}</h1>
          </div>
          <h2 className="text-xl md:text-2xl lg:text-3xl mt-4">{currentPoetry.author}</h2>

          {/* Refresh Icon */}
          <button
            onClick={GetPoetry}
            className="absolute top-4 right-4 text-white hover:text-orange-500 transition-colors"
            aria-label="Refresh Quote"
          >
            <FaSyncAlt size={24} />
          </button>

          {/* Copy Icon */}
          <button
            onClick={copyToclipboard}
            className="absolute bottom-4 right-4 text-white hover:text-orange-500 transition-colors"
            aria-label="Copy to Clipboard"
          >
            <FaCopy size={24} />
          </button>

          {/* Copied Message */}
          {copied && (
            <span className="absolute bottom-4 left-4 text-sm text-green-500">
              Copied!
            </span>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="text-center">
          <p>
            Copyright &copy; {new Date().getFullYear()} Developed by <strong>Saed</strong>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;


//   return (
//     <div className="flex flex-col min-h-screen bg-black">
//       {/* Header */}
//       <header className="flex items-center justify-center py-4 px-6 bg-gray-700">
//         <img className="w-16 md:w-24 lg:w-32 invert mr-4" src={logo} alt="logo" />
//         <h1 className="font-Kufi text-2xl md:text-4xl lg:text-5xl text-orange-500">
//           اقتباسات من الأدب العربي
//         </h1>
//       </header>

//       {/* Main Content */}
//       <main className="flex-grow flex items-center justify-center">
//         <div className="relative flex flex-col items-center justify-center h-[350px] w-11/12 md:w-2/3 lg:w-1/2 bg-gray-600 text-white rounded-lg p-8 shadow-lg">
//           <div className="text-2xl md:text-4xl lg:text-5xl mb-4 text-center leading-relaxed">
//             <h1>{currentPoetry.text1}</h1>
//             <h1>{currentPoetry.text2}</h1>
//           </div>
//           <h2 className="text-xl md:text-2xl lg:text-3xl mb-6">{currentPoetry.author}</h2>
//           <button
//             onClick={GetPoetry}
//             className="absolute top-4 right-4 text-white hover:text-orange-500 transition-colors"
//             aria-label="Refresh Quote"
//           >
//             <FaSyncAlt size={24} />
//           </button>
//         </div>
//       </main>

//       {/* Footer */}
//       <footer className="bg-gray-800 text-white py-4">
//         <div className="text-center">
//           <p>
//             &copy; {new Date().getFullYear()} Developed by <strong>Saed</strong>
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default App;


















// function App() {
// let isClicked = true;
// const [currentPoetry, setPoatry] = useState(
//   {
//     key: poetry[0].key,
//     text1: poetry[0].text1,
//     text2: poetry[0].text2,
//     author: poetry[0].author
//   })

// function GetPoetry() {
//   let index;
//   do {
//     index = Math.floor(Math.random() * poetry.length);
//   } while (index === currentPoetry.key);

//   setPoatry(
//     {
//       key: poetry[index].key,
//       text1: poetry[index].text1,
//       text2: poetry[index].text2,
//       author: poetry[index].author
//     }
//   )
// }
//   return (
//     <div>
//       <Header />
//       <Post />
//       {/* <Post 
//       key = {currentPoetry.key}
//       text1= {currentPoetry.text1}
//       text2= {currentPoetry.text2}
//       author= {currentPoetry.author}
//       onNext = {GetPoetry}
//       /> */}
//       {/* <Footer
//       /> */}
//     </div>
//   )
// }

// export default App

/*
key = {isClicked ? poetry[getPoetry].key: poetry[0].key}
        text1= {isClicked ? poetry[getPoetry].text1:poetry[0].text1}
        text2= {isClicked ? poetry[getPoetry].text2:poetry[0].text2}
        author= {isClicked ? poetry[getPoetry].author:poetry[0].author}
        onClicked = {getPoetry}
*/