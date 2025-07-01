import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { createReservation } from '../services/api';

gsap.registerPlugin(ScrollTrigger);

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || import.meta.env.VITE_API_URL;;

const TimeSlotAvailability = ({ selectedDate, onSelectTime }) => {
    const [slots, setSlots] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!selectedDate) return;
        setLoading(true);
        setError(null);

        fetch(`${API_BASE_URL}/api/availability?date=${encodeURIComponent(selectedDate)}`)
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setSlots(data.timeSlots);
                } else {
                    setError('Failed to load availability.');
                }
            })
            .catch(() => setError('Failed to load availability.'))
            .finally(() => setLoading(false));
    }, [selectedDate]);

    if (!selectedDate) return null;

    return (
        <div className="mt-10 bg-gray-900 text-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Time Slot Availability</h3>
            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}

            <div className="grid grid-cols-3 gap-4">
                {slots.map(({ time, status }) => {
                    const isAvailable = status === 'available';
                    return (
                        <button
                            key={time}
                            disabled={!isAvailable}
                            onClick={() => onSelectTime(time)}
                            className={`py-2 rounded font-semibold transition-all ${
                                isAvailable
                                    ? 'bg-green-600 hover:bg-green-700 cursor-pointer'
                                    : 'bg-orange-500 cursor-not-allowed'
                            }`}
                        >
                            {time}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

const ReservationForm = () => {
    const formRef = useRef(null);
    const inputRef = useRef(null);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        manualTime: '',
        partySize: 1,
        specialRequests: ''
    });

    const [loading, setLoading] = useState(false);
    const [responseMessage, setResponseMessage] = useState(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (formRef.current) {
                gsap.from(formRef.current, {
                    opacity: 0,
                    y: 100,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: formRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none none',
                        onEnter: () => inputRef.current?.focus()
                    }
                });
            }
        }, formRef);
        return () => ctx.revert();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: name === 'partySize' ? parseInt(value) : value
        }));
    };

    const handleDateChange = (e) => {
        handleChange(e);
        setFormData(prev => ({ ...prev, time: '', manualTime: '' }));
    };

    const handleTimeSelect = (time) => {
        setFormData(prev => ({ ...prev, time, manualTime: '' }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setResponseMessage(null);

        const finalTime = formData.time || formData.manualTime;
        if (!finalTime) {
            setResponseMessage('Please select or enter a time.');
            setLoading(false);
            return;
        }

        const submissionData = { ...formData, time: finalTime };

        try {
            const response = await createReservation(submissionData);
            navigate('/reservation-success', { state: { reservation: response.data } });
        } catch (error) {
            console.error('Reservation submission error:', error);
            setResponseMessage(`❌ Failed to submit reservation: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="relative min-h-screen overflow-hidden" id="reservation">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            >
                <source src="/videos/reservation.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay for dimming video */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/70 z-10" />

            {/* Translucent Form Container */}
            <div className="relative z-20 container mx-auto px-4 max-w-2xl py-16">
                <h2 className="text-4xl font-bold text-center text-white mb-10">Book Your Table</h2>

                {responseMessage && (
                    <p className="text-center text-white mb-4">{responseMessage}</p>
                )}

                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="bg-black/1 backdrop-blur-md border border-white/1 p-8 rounded-lg shadow-xl space-y-6"
                >
                    <input
                        ref={inputRef}
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full p-3 rounded bg-gray-800 bg-opacity-70 text-white placeholder-gray-400"
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full p-3 rounded bg-gray-800 bg-opacity-70 text-white placeholder-gray-400"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-3 rounded bg-gray-800 bg-opacity-70 text-white placeholder-gray-400"
                    />
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full p-3 rounded bg-gray-800 bg-opacity-70 text-white placeholder-gray-400"
                    />
                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleDateChange}
                        required
                        className="w-full p-3 rounded bg-gray-800 bg-opacity-70 text-white placeholder-gray-400"
                    />

                    {formData.time && (
                        <div className="text-white">
                            Selected Time Slot:{' '}
                            <span className="text-yellow-400 font-semibold">{formData.time}</span>
                        </div>
                    )}

                    <input
                        type="time"
                        name="manualTime"
                        value={formData.manualTime}
                        onChange={handleChange}
                        placeholder="Enter Time Manually"
                        className="w-full p-3 rounded bg-gray-800 bg-opacity-70 text-white placeholder-gray-400"
                    />

                    <input
                        type="number"
                        name="partySize"
                        min="1"
                        max="20"
                        value={formData.partySize}
                        onChange={handleChange}
                        required
                        className="w-full p-3 rounded bg-gray-800 bg-opacity-70 text-white placeholder-gray-400"
                    />
                    <textarea
                        name="specialRequests"
                        placeholder="Special Requests (optional)"
                        value={formData.specialRequests}
                        onChange={handleChange}
                        rows="3"
                        className="w-full p-3 rounded bg-gray-800 bg-opacity-70 text-white placeholder-gray-400"
                    ></textarea>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 rounded transition duration-300"
                    >
                        {loading ? 'Booking...' : 'Book Now'}
                    </button>
                </form>

                <TimeSlotAvailability
                    selectedDate={formData.date}
                    onSelectTime={handleTimeSelect}
                />
            </div>
        </section>
    );
};

export default ReservationForm;
