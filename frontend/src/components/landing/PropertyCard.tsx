import { WifiIcon } from '@heroicons/vue/24/solid'
import ParkingIcon from '../../icons/ParkingIcon'
import ForkIcon from '../../icons/ForkIcon'
import BatchroomIcon from '../../icons/BathroomIcon';
import BedIcon from '../../icons/BedIcon';

interface PropertyCard {
    id: number;
    name: string;
    price?: string;
    city: string;
    rate: number;
    image: string;
    rooms: {
        number: number;
        ameneties: string[];
    }
    ameneties?: string[];
    bathroms?: number;
}

interface Props {
    property: PropertyCard
}

const PropertyCard = (props: Props) => {
    const { property } = props

    return(
        <a href="#" className="w-[325px] rounded-lg p-4 shadow-sm shadow-indigo-100 hover:shadow-xl transition-all ml-5 mt-3">
            <img
                alt="Home"
                src={property.image}
                className="h-56 w-full rounded-md object-cover"
            />
            <div className="mt-2">
                <dl>
                <div>
                    <dt className="sr-only">Price</dt>

                    <dd className="text-sm text-orange-700">${property.price}</dd>
                </div>

                <div>
                    <dt className="sr-only">Address</dt>

                    <dd className="font-medium">{property.name}, {property.city}</dd>
                </div>
                </dl>
                <p className="text-xs text-gray-400">4.6 califications </p>

                <div className="mt-6 flex items-center justify-between text-xs">
                    <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                        <ParkingIcon />
                        <div className="mt-1.5 sm:mt-0">
                        <p className="text-orange-500">Parking</p>

                        <p className="font-medium"> { property.ameneties?.find( el => el === 'Free parking') || property.rooms?.ameneties.find( el => el === 'Free parking') ? 'Free parking' : 'No parking' } </p>
                    </div>
                </div>

                <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                    <BatchroomIcon />

                    <div className="mt-1.5 sm:mt-0">
                    <p className="text-orange-500">Bathroom</p>

                    <p className="font-medium">{property.rooms.number} rooms</p>
                    </div>
                </div>

                <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                    <BedIcon />

                    <div className="mt-1.5 sm:mt-0">
                    <p className="text-orange-500">Bedroom</p>

                    <p className="font-medium">4 rooms</p>
                    </div>
                </div>
                </div>
            </div>
        </a>
    )
}

export default PropertyCard