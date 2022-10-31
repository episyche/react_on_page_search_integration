import './App.css';
import { Data } from './components/Data';
import { useState} from 'react';

function App() {
  const [map_data, setmap_data] = useState(Data)

  function searchdata(e) {
    var i, td, filter, txtValue;
    filter = e.target.value.toUpperCase();
    var show_datas = []
    for (i = 0; i < Data.length; i++) {
      td = Data[i];
      if (td) {
        txtValue = td.Name;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          show_datas.push(Data[i])
        }
      }
    }
    var arr = show_datas.filter(function (item, index, inputArray) {
      return inputArray.indexOf(item) === index;
    });
    if (show_datas) {
      setmap_data(arr)
    }
  }

  return (
    <div className="App">
      <div className='heading'>
        <p>Search bar</p>
      </div>
      <div className='search-bar'>
        <input type="search" onChange={searchdata}></input>
      </div>
      <div className='whole-map'>
        {map_data.map((e) => (
          <div key={e.id} className="map-data">
            <div className='map-id'>
              <p className=' '>{e.id}</p>
            </div>
            <div className='map-name' >
              <p className=''>{e.Name}</p>
            </div>
          </div>
        )
        )}
      </div>
    </div>
  );
}

export default App;
