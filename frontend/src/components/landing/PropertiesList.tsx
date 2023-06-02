import { useStore } from '@nanostores/react';
import { $search } from '../../store/searchStore';
import type PropertyModel from '../../types/property';
import PropertyCard from './PropertyCard';

interface Props {
  properties: PropertyModel[];
}

const PropertiesList = (props: Props) => {
  const { properties } = props;
  const store = useStore($search);

  console.log('search:list', store);

  return (
    <div className='flex flex-wrap -mx-4'>
      {properties.map((property: PropertyModel) => (
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
