
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { useState } from "react";
import Gestiune from "./components/CalendarGestiune";
import Soferi from "./components/CalendarSoferi";
import Coletare from './components/CalendarColetare';
import Strans from './components/CalendarStrans';
import Details from "./components/Details";
import Tiparire from './components/CalendarTiparire';
import 'react-tabs/style/react-tabs.css';



function App() {
const [showDetails, setShowDetails] = useState(false);
const [data, setData] = useState(null);

const showDetailsHandle = (dayStr) => {
  setData(dayStr);
  setShowDetails(true);
};


  

  return (<div>
    <div className="App">

    <Tabs>
    <TabList>
      <Tab>Gestiune</Tab>
      <Tab>Coletare</Tab>
      <Tab>Strâns</Tab>
      <Tab>Tipărire</Tab>
      <Tab>Șoferi</Tab>
      <Tab>Toate echipele</Tab>
    </TabList>

    <TabPanel>
    <div className='calendar-wrapper'>
      <h1>Gestiune</h1>
      <Gestiune showDetailsHandle={showDetailsHandle} />
      <br />
      {showDetails && <Details data={data} />}
      </div>
    </TabPanel>
    <TabPanel>
    <div className='calendar-wrapper'>
      <h1>Coletare</h1>
      <Coletare showDetailsHandle={showDetailsHandle} />
      <br />
      {showDetails && <Details data={data} />}
      </div>
    </TabPanel>
    <TabPanel>
    <div className='calendar-wrapper'>
      <h1>Strâns</h1>
      <Strans showDetailsHandle={showDetailsHandle} />
      <br />
      {showDetails && <Details data={data} />}
      </div>
      
    </TabPanel>
    <TabPanel>
    <div className='calendar-wrapper'>
      <h1>Tipărire</h1>
      <Tiparire showDetailsHandle={showDetailsHandle} />
      <br />
      {showDetails && <Details data={data} />}
      </div>
    </TabPanel>
    <TabPanel>
    <div className='calendar-wrapper'>
      <h1>Șoferi</h1>
      <Soferi showDetailsHandle={showDetailsHandle} />
      <br />
      {showDetails && <Details data={data} />}
      </div>
    </TabPanel>




    <TabPanel>
    <div className='calendar-wrapper'>
      <h1>Gestiune</h1>
      <Gestiune showDetailsHandle={showDetailsHandle} />
      <br />
      {showDetails && <Details data={data} />}
      </div>
      <div className='calendar-wrapper'>
      <h1>Soferi</h1>
      <Soferi showDetailsHandle={showDetailsHandle} />
      <br />
      {showDetails && <Details data={data} />}
      </div>
      <div className='calendar-wrapper'>
      <h1>Coletare</h1>
      <Coletare showDetailsHandle={showDetailsHandle} />
      <br />
      {showDetails && <Details data={data} />}
      </div>
      <div className='calendar-wrapper'>
      <h1>Strans</h1>
      <Strans showDetailsHandle={showDetailsHandle} />
      <br />
      {showDetails && <Details data={data} />}
      </div>
      <div className='calendar-wrapper'>
      <h1>Tiparire</h1>
      <Tiparire showDetailsHandle={showDetailsHandle} />
      <br />
      {showDetails && <Details data={data} />}
      </div>
      <div className='calendar-wrapper'>
      <h1>Tiparire</h1>
      <Tiparire showDetailsHandle={showDetailsHandle} />
      <br />
      {showDetails && <Details data={data} />}
      </div>
    </TabPanel>
  </Tabs>

      
      
      
      
      
    </div>

    
  </div>
  
  )
}

export default App
