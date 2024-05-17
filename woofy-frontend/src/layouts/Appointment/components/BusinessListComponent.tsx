import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Changed from custom api import to axios for simplicity
import TypesOfServiceRow from '../../../Sections/User/selectButtons/TypesOfServiceRow';

interface Business {
    id: number;
    businessName: string;
    about: string | null;
    price: number;
    dogCapacity: number;
    acceptableDogSizes: Array<'SMALL' | 'MEDIUM' | 'LARGE' | 'GIANT'>;
    phoneNumber: string;
    businessType: string;
}

const BusinessListComponent: React.FC = () => {
    const [selectedService, setSelectedService] = useState('Day Care');
    const [availableBusinesses, setAvailableBusinesses] = useState<Business[]>([]);

    useEffect(() => {
        const fetchAvailableBusinesses = async () => {
            console.log(`Fetching available businesses for service: ${selectedService}`);
            try {
                const response = await axios.get('http://localhost:8080/api/v1/business/all');
                const data = response.data;
                const filteredBusinesses = data.filter((business: Business) => business.businessType === selectedService);
                setAvailableBusinesses(filteredBusinesses);
            } catch (error) {
                console.error(`Failed to fetch available businesses: ${error}`);
            }
        };

        fetchAvailableBusinesses();
    }, [selectedService]);

    const handleServiceChange = (service: string) => {
        setSelectedService(service);
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
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>ID</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Name</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>About</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Price</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Dog Capacity</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Acceptable Dog Sizes</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                    {availableBusinesses.map((business) => (
                        <tr key={business.id}>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{business.id}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{business.businessName}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{business.about || 'N/A'}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{business.price}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{business.dogCapacity}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{business.acceptableDogSizes.join(', ')}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{business.phoneNumber}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BusinessListComponent;
