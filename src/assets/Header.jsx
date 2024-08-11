import React from "react";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';


const Header = () => {
    return (
        <header className="py-4 px-6 text-2xl md:text-4l lg:text-6xl w-full text-center font-medium">
            
            <h1>اقتباسات من الأدب العربي</h1>
            <FormatQuoteIcon color="primary" fontSize="large" />
        </header>
    )
}

export default Header;