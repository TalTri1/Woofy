import React, { useState } from 'react';
import BusinessListComponent from './components/BusinessListComponent';

const BusinessListPage = () => {
    return (
        <div className="w-full relative bg-text-alternate overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
            {/* Form for selecting a service */}
            <BusinessListComponent />
            {/* Form for selecting a business and a date */}
        </div>
    );
};

export default BusinessListPage;