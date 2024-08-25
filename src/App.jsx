import { useState } from 'react';
import { poetry } from './assets/poetry';
import { FaSyncAlt, FaCopy } from 'react-icons/fa';
import ShareIcon from '@mui/icons-material/Share';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon
} from 'react-share';
import logo from './images/logo.png';

function App() {

  const [currentPoetry, setPoatry] = useState({
    key: poetry[22].key,
    text1: poetry[22].text1,
    text2: poetry[22].text2,
    author: poetry[22].author,
  });

  function GetPoetry() {
    let index;
    do {
      index = Math.floor(Math.random() * poetry.length);
    } while (index === currentPoetry.key);

    setPoatry({
      key: poetry[index].key,
      text1: poetry[index].text1,
      text2: poetry[index].text2,
      author: poetry[index].author,
    });
  }

  const [copied, setCopied] = useState(false);
  const copyToclipboard = () => {
    const textToCopy = `${currentPoetry.text1}\n${currentPoetry.text2}`;
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }).catch(err => {
      console.error("Failed to copy text", err);
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-[url('./images/wall-background.jpg')] bg-cover bg-no-repeat">
      {/* Header */}
      <header className="flex items-center justify-center text-center py-4 px-6 bg-gray-900">
        <img className="w-16 md:w-24 lg:w-32 invert mr-4" src={logo} alt="logo" />
        <h1 className="font-Kufi text-2xl md:text-4xl lg:text-5xl text-white">
          اقتباسات من الأدب العربي
        </h1>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-start mt-48 lg:64">
        <div className="relative flex flex-col items-center justify-center w-11/12 md:w-2/3 lg:w-1/2 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-white rounded-lg p-8 shadow-lg">
          <div className="text-2xl md:text-4xl lg:text-5xl mb-4 text-center leading-relaxed">
            <h1 className="leading-loose quote-text">{currentPoetry.text1}</h1>
            <h1 className="quote-text transition-opacity duration-300">{currentPoetry.text2}</h1>
          </div>
          <h2 className="text-xl md:text-2xl lg:text-3xl mt-4 text-orange-500 font-semibold">{currentPoetry.author}</h2>
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
        {/* Share Section */}
        <div className="mt-32 lg:mt-16 flex justify-center">
          <div className="flex space-x-8 p-4 bg-gray-900 text-white rounded-lg border border-gray-700 shadow-lg">
            <ShareIcon className="text-white" />
            <FacebookShareButton
              aria-label="Share on Facebook"
              url={window.location.href}
              quote={`${currentPoetry.text1} ${currentPoetry.text2}`}
              className="focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
            >
              <FacebookIcon size={32} round />
            </FacebookShareButton>
            <TwitterShareButton
              aria-label="Share on Twitter"
              url={window.location.href}
              title={`${currentPoetry.text1} \n ${currentPoetry.text2}`}
              className="focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
            >
              <TwitterIcon size={32} round />
            </TwitterShareButton>
            <WhatsappShareButton
              aria-label="Share on WhatsApp"
              url={window.location.href}
              title={`${currentPoetry.text1} ${currentPoetry.text2}`}
              className="focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
            >
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>
          </div>
        </div>

      </main>



      {/* Footer */}
      <footer className="absolute bottom-0 right-0 left-0 bg-gray-800 text-white py-4">
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
