import { useSelector } from "react-redux";

import {DeviceItem} from './DeviceItem';

export const DeviceList = () => {
  const {devices} = useSelector(state => state.device)

  return (
    <div className='d-flex mt-4'>
      {
        devices.map(device => (
          <DeviceItem 
            key={device.id} 
            device={device}/>
        ))
      }
    </div>
  );
};