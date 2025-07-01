import { useState, useEffect } from 'react';

const TimeSlotAvailability = ({ selectedDate, onSelectTime }) => {
    const [slots, setSlots] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!selectedDate) {
            setSlots([]);
            return;
        }

        setLoading(true);
        fetch(`/api/availability?date=${encodeURIComponent(selectedDate)}`)
            .then(res => res.json())
            .then(data => {
                if (data.success) setSlots(data.timeSlots);
                else setError('Failed to load availability.');
            })
            .catch(() => setError('Failed to load availability.'))
            .finally(() => setLoading(false));
    }, [selectedDate]);

    return (
        <div className="bg-gray-900 text-white mt-6 p-6 rounded-lg max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Time Slot Availability</h3>
            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}
            <div className="grid grid-cols-3 gap-4">
                {slots.map(({ time, status }) => {
                    const isAvailable = status === 'available';
                    const bg = isAvailable ? 'bg-green-600' : 'bg-orange-500';
                    const cursor = isAvailable ? 'cursor-pointer' : 'cursor-not-allowed';
                    return (
                        <div
                            key={time}
                            onClick={() => isAvailable && onSelectTime(time)}
                            className={`text-center py-2 rounded ${bg} ${cursor}`}
                        >
                            {time}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TimeSlotAvailability;
