import React, { useState, useEffect } from 'react';
import api from '../../../api/api';
import TypesOfServiceRow from '../../../Sections/User/selectButtons/TypesOfServiceRow';


interface business {
    id: number;
    name: string;
    about: string;
    price: number;
    dogCapacity: number;
    acceptableDogSizes: string[];
    phoneNumber: string;
}

const BusinessListComponent = () => {
    const [selectedService, setSelectedService] = useState('day-care');
    const [availableBusinesses, setAvailableBusinesses] = useState<business[]>([]);


    const fetchAvailableBusinesses = async (service: string) => {
        console.log(`Fetching available businesses for service: ${service}`);
        try {
            // Determine the API endpoint based on the service
            let apiEndpoint = '/business/business-type';
            console.log(`service: ${service}`);
            switch (service) {
                case 'Dog Walker':
                    apiEndpoint += '/dog-walker/all';
                    break;
                case 'Boarding':
                    apiEndpoint += '/boarding/all';
                    break;
                case 'Dog Sitter':
                    apiEndpoint += '/dog-sitter/all';
                    break;
                case 'Day Care':
                    apiEndpoint += '/day-care/all';
                    break;
                default:
                    throw new Error('Invalid service');
            }
            console.log(`API endpoint: ${apiEndpoint}`);

            const res = await api.get(apiEndpoint);
            setAvailableBusinesses(res.data);
        } catch (error) {
            console.error(`Failed to fetch available businesses: ${error}`);
        }
    };

    const handleServiceChange = (service: string) => {
        setSelectedService(service); // Update selected service
        fetchAvailableBusinesses(service); // Trigger fetchAvailableBusinesses with the selected service
    };



    return (
        <div>
            <TypesOfServiceRow
                typesOfServiceLabel="Choose a service to book"
                boarding="Boarding"
                boardingRadioButtonName="radioGroup-1"
                dayCare="Day Care"
                dayCareRadioButtonName="radioGroup-1"
                sitting="Dog Sitter"
                sittingRadioButtonName="radioGroup-1"
                walking="Dog Walker"
                walkingRadioButtonName="radioGroup-1"
                propFlexDirection="row"
                propMinWidth1="41px"
                propMinWidth2="61px"
                propMinWidth3="43px"
                propMinWidth4="41px"
                showEditButton={false}
                onServiceChange={handleServiceChange}
            />
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>About</th>
                        <th>Price</th>
                        <th>Dog Capacity</th>
                        <th>Acceptable Dog Sizes</th>
                        <th>Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                    {availableBusinesses.map((business) => (
                        <tr key={business.id}>
                            <td>{business.name}</td>
                            <td>{business.about}</td>
                            <td>{business.price}</td>
                            <td>{business.dogCapacity}</td>
                            <td>{business.acceptableDogSizes.join(', ')}</td>
                            <td>{business.phoneNumber}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BusinessListComponent;