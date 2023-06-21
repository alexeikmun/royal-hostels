import type PropertyModel from '../../../types/property';
import RoomTable from '../../Table/RoomTable';
import ArrowLongLeftIcon from '../../../icons/ArrowLongLeftIcon';
import { useEffect, useState } from 'react';

interface Props {
  headers: string[];
  body: Array<string[]>;

  property: PropertyModel;
}

const PropertyView = ({ headers, body, property }: Props) => {
  const [propertyId, setPropertyId] = useState<string>('');

  console.log('HERE!');

  useEffect(() => {
    console.log('HERE2');
  }, []);

  useEffect(() => {
    console.log('we are doing the useffect stuff');
    /*
    const path = window.location.pathname;
    const param = path.split('/').pop();

    const urlParams = new URLSearchParams(document.location.search);
    const param2 = urlParams.get('propertyId');
    console.log(param2);
    setPropertyId(param);
    console.log(propertyId);

     */
  }, []);

  const tableHeaders: Array<string> = ['Room type', 'Sleeps', 'Price/night'];

  const tableBody: Array<string[]> = [
    ['Standard', '2', '240.000'],
    ['Double', '2', '270.000'],
    ['King', '2', '300.000'],
    ['Double, Bath', '2', '450.000'],
  ];

  return (
    <div className='relative'>
      <div className='grid grid-cols-1 items-start gap-8 md:grid-cols-1 overflow-hidden pt-10 pr-10'>
        <div className='flex justify-center items-center w-[50%]'>
          <img
            alt={property.name}
            src={property.image}
            className='aspect-square rounded-xl object-cover w-[70%]'
          />
        </div>

        <div className='top-0 overflow-y-auto absolute h-auto right-0 w-[50%] pt-5 pr-28'>
          <div className='mt-8 flex justify-between'>
            <div className='max-w-[35ch] space-y-2'>
              <div className='flex justify-between pb-3'>
                <a
                  href='/host/crud#'
                  className='flex text-gray-500 justify-center items-center'
                >
                  <ArrowLongLeftIcon />
                  <p className='ml-3 text-gray-400 group-hover:text-gray-600'>
                    Back
                  </p>
                </a>
              </div>
              <h1 className='text-xl font-bold sm:text-2xl'>{property.name}</h1>

              <p className='text-sm'>Highest Rated Product</p>
              <p> property: {propertyId}</p>

              <div className='-ml-0.5 flex items-center'>
                <p className='ml-3 text-sm text-gray-500'>{property.rate}</p>
              </div>
            </div>

            <p className='text-lg font-bold mt-14 text-[#C1410B]'>
              ${property.price}
            </p>
          </div>

          <div className='mt-4'>
            <div className='prose max-w-none'>
              <p className='text-gray-500'>{property.description}</p>
            </div>
          </div>

          <form className='mt-8 w-full'>
            <fieldset className='w-full'>
              <legend className='mt-5 mb-1 text-lg font-medium'>
                Room Management
              </legend>
              <button
                type='button'
                className='inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
              >
                <svg
                  className='w-5 h-5 mr-2 -ml-1'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z'
                    clipRule='evenodd'
                  ></path>
                </svg>
                Add Room
              </button>
              <RoomTable headers={tableHeaders} body={tableBody} />
            </fieldset>

            <fieldset className='mt-8'>
              <legend className='mb-1 text-lg font-medium'>
                What this place offers
              </legend>
              <div></div>
              {property?.amenities?.map((amenity: any) => (
                <div>{amenity.name}</div>
              ))}
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PropertyView;
