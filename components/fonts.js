import { Global } from "@emotion/react"

// for a reason the font could not be implemented with the Global styling from the emotion library, so i usd the @next/font/google library
// which worked perfectly, just needed to create a constant and wrap the pages in a <main> tag and set the subset and weight, and giving a className.



const Fonts = () => (
    <Global
    styles={`
    @import url('https://fonts.googleapis.com/css2?family=Golos+Text&display=swap');
    @font-face {
        font-family:

    }
    `}
    />
)

export default Fonts