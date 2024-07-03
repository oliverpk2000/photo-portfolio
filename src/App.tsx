

import './App.css'
import TextComponent from './components/TextComponent'

function App() {

  return (
    <>
      <TextComponent contentFilePath={'./src/assets/introduction.txt'} pictureFilePath={'./src/assets/react.svg'}></TextComponent>
      <TextComponent contentFilePath={'./src/assets/about.txt'} pictureFilePath={'./src/assets/react.svg'}></TextComponent>
      <TextComponent contentFilePath={'./src/assets/contact.txt'} pictureFilePath={'./src/assets/react.svg'}></TextComponent>
    </>
  )
}

export default App
