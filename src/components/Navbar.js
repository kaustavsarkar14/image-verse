import React, { useContext, useState } from 'react'
import "./Navbar.css"
import SearchIcon from '@mui/icons-material/Search';
import imageContext from '../context/imageContext';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const { searchImages } = useContext(imageContext)
  const handleClick = () => {
    searchImages(searchTerm)
    setSearchTerm('')
  }
  return (
    <div className='navbar' >
      <h2>IMAGE VERSE</h2>
      <div className='searchbar' >
        <input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} placeholder='Search here...' />
        <SearchIcon onClick={handleClick} />
      </div>
    </div>
  )
}

export default Navbar