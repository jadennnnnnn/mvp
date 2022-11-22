import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Search ({searchOn, setCurrentSetting, setCurrentPreset, presetList, setPresetList}) {

  const [name, setName] = useState('')
  const [author, setAuthor] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const searchPreset = () => {
    axios.get('/presets', {params: { author: author, name: name }})
      .then((result) => {setSearchResults(result.data)})
      .catch((err) => {console.log(err)})
  }

  const likePreset = (id) => {
    axios.put(`./presets/${id}`)
      .then(() => {searchPreset()})
      .catch((err) => {console.log(err)})
  }

  const deletePreset = (id) => {
    axios.delete(`./presets/${id}`)
      .then(() => {searchPreset()})
      .catch((err) => {console.log(err)})
  }

  useEffect(() => {
    searchPreset()
  }, [author, name])

  useEffect(() => {
    document.querySelector('.search').addEventListener('input', (e) => {
      window.preventDefault();
    })
  }, [])

  const display = searchOn ? {} : { display: 'none'}


  return (
    <div className='col-1-3' style={display}>
      <div className='search'>
        <form>
          <span style={{textAlign: 'center'}}>author: </span>
          <input type='text' placeholder='author name here' onChange={(e)=>{setAuthor(e.target.value)}}/><br/>
          <span style={{textAlign: 'center'}}>preset: </span>
          <input type='text' placeholder='preset name here' onChange={(e)=>{setName(e.target.value)}}/>
        </form>

        {searchResults ?
          <div className='search-box'>
            <table>
              <thead>
                <tr>
                  <th style={{width: '55%'}}>preset name</th>
                  <th style={{width: '10%'}}></th>
                  <th>author</th>
                  <th>likes</th>
                </tr>
              </thead>
              <tbody>
                {searchResults.map((result, index) => (
                  <tr key={index}>
                    <td style={{cursor: 'pointer'}} onClick={()=>{setCurrentPreset(result.preset); setCurrentSetting(result.preset)}}>{result.name}</td>
                    <td style={{cursor: 'pointer'}} onClick={() => {deletePreset(result._id)}}>x</td>
                    <td>{result.author}</td>
                    <td style={{cursor: 'pointer'}} onClick={()=>{likePreset(result._id)}}>{result.likes} 👍</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        : null}
      </div>
    </div>





  )
}