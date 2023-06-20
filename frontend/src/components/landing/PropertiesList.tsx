import { useStore } from '@nanostores/react';
import { propertyApi } from '../../api/ApiBuilder';
import type PropertyModel from '../../types/property';
import PropertyCard from './PropertyCard';
import { useEffect, useState } from 'react';

interface Props {
  properties: PropertyModel[];
}

const PropertiesList = (props: Props) => {
  const { properties } = props;
  const [propertiesList, setPropertiesList] = useState(properties);
  const [once, setOnce] = useState(true);
  const store2 = useStore(propertyApi.dataStore);

  useEffect(() => {
    setOnce(false);
  }, []);

  useEffect(() => {
    if (!once) {
      setPropertiesList(store2);
    }
    console.log('search:list2', store2);
    setOnce(false);
  }, [store2]);

  return (
    <div className='flex flex-wrap -mx-4'>
      {propertiesList?.map((property: PropertyModel) => (
        <div
          key={property.id}
          className='lg:w-1/4 md:w-1/2 sm:w-1/1 px-4 flex mb-4'
        >
          <PropertyCard property={property} />
        </div>
      ))}
    </div>
  );
};

export default PropertiesList;
