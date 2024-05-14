import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { icons } from './icons';

interface Business {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    address: string;
    city: string;
    role: string;
    about: string | null;
    businessName: string;
    businessType: string;
    socialMedia: string | null;
    website: string | null;
    acceptableDogSizes: Array<'SMALL' | 'MEDIUM' | 'LARGE' | 'GIANT'>;
    dogCapacity: number;
    startDate: string;
    endDate: string;
    startTime: string;
    endTime: string;
    price: number;
    workingDays: Array<'SUNDAY' | 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY'>;
    lat: number;
    lon: number;
}

const bookAppointment = (businessName: string) => {
    console.log(`Setting appointment for ${businessName}`);
    // You can add further implementation here, like opening a modal for appointment booking
};

const MapComponent: React.FC = () => {
    const mapRef = useRef<HTMLDivElement | null>(null);
    const mapInstance = useRef<L.Map | null>(null);
    const [businesses, setBusinesses] = useState<Business[]>([]);

    useEffect(() => {
        // Fetch data from API
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/v1/business/all');
                const data = await response.json();
                setBusinesses(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);


    useEffect(() => {
        if (mapRef.current && !mapInstance.current && businesses.length > 0) {
            const map = L.map(mapRef.current);
            mapInstance.current = map;

            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;
                map.setView([latitude, longitude], 16);

                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                }).addTo(map);

                L.marker([latitude, longitude], { icon: icons['Home'] }).addTo(map).bindTooltip('Your location');

                businesses.forEach((business) => {
                    const popupContent = `
                    <div>
                        <h2 style="text-align: center; font-size: 1.2rem; font-weight: bold; margin-bottom: 10px;">${business.businessName}</h2>
                        <b>Owner:</b> ${business.firstName} ${business.lastName}<br />
                        <b>Phone number:</b> ${business.phoneNumber}<br />
                        <b>Address:</b> ${business.address}, ${business.city}<br />
                        <b>About:</b> ${business.about ? business.about : 'N/A'}<br />
                        <b>Service:</b> ${business.businessType}<br />
                        <b>Price:</b> ${business.price}<br />
                        <b>Working Days:</b> ${business.workingDays.join(', ')}<br />
                        <div style="text-align: center;">
                        <button style="background-color: #007bff; color: #fff; padding: 8px 16px; border: none; border-radius: 4px; cursor: pointer; margin-top: 8px;" 
                        onclick="handleAppointment('${business.businessName}')">Book an Appointment</button>
                    </div>
                    `;
                    L.marker([business.lat, business.lon], { icon: icons[business.businessType] })
                        .addTo(map)
                        .bindTooltip(business.businessName)
                        .bindPopup(popupContent);
                });
            });
        }
    }, [businesses]);

    // Wrapper function to handle appointment booking
    const handleAppointment = (businessName: string) => {
        bookAppointment(businessName);
    };
    // Add handleAppointment to the global scope
    (window as any).handleAppointment = handleAppointment;

    return <div ref={mapRef} style={{ height: 700 }} />;
};

export default MapComponent;