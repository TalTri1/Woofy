import React, { useState } from 'react';
import BusinessListComponent from './components/BusinessListComponent';

const BusinessListPage = () => {
    const [selectedBusiness, setSelectedBusiness] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);

    const containerStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // Align items horizontally to the center
        justifyContent: 'center', // Align items vertically to the center
        minHeight: '100vh', // Ensure the container takes up at least the full height of the viewport
    };

    return (
        <div className="w-full relative bg-text-alternate overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
            {/* Form for selecting a service */}
            <BusinessListComponent />
            {/* Form for selecting a business and a date */}
        </div>
    );
};

export default BusinessListPage;