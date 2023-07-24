import React from 'react';
import Map from './Map';

function MapSection() {
  return <Map onLoad={() => console.log('load!!')} />;
}

export default MapSection;
