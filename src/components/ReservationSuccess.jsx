import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const ReservationSuccess = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const reservation = location.state?.reservation;

    useEffect(() => {
        if (!reservation) {
            navigate('/');
        }
    }, [reservation, navigate]);

    if (!reservation) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                <p>No reservation data available.</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-8">
            <div className="max-w-lg w-full bg-gray-900 rounded-xl shadow-xl p-8 text-center">
                <h2 className="text-3xl font-bold mb-4 text-yellow-400">Reservation Confirmed ✅</h2>
                <p className="text-gray-200 mb-4">Thank you for booking with us. Here are your reservation details:</p>

                <div className="space-y-2 text-cyan-400 text-left">
                    <p><strong>Name:</strong> {reservation.firstName} {reservation.lastName}</p>
                    <p><strong>Email:</strong> {reservation.email}</p>
                    <p><strong>Phone:</strong> {reservation.phone}</p>
                    <p><strong>Date:</strong> {new Date(reservation.date).toLocaleDateString()}</p>
                    <p><strong>Time:</strong> {reservation.time}</p>
                    <p><strong>Party Size:</strong> {reservation.partySize}</p>
                    <p><strong>Status:</strong> {reservation.status}</p>
                    <p>
                        <strong>Confirmation Code:</strong>{' '}
                        <span className="font-mono text-orange-400">{reservation.confirmationCode}</span>
                    </p>
                </div>

                {reservation.discountCode && (
                    <div className="mt-6 p-4 bg-green-700 text-white rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold">🎉 You've earned a discount!</h3>
                        <p>Use code <span className="font-mono text-yellow-300">{reservation.discountCode}</span> for 10% off your next visit!</p>
                    </div>
                )}

                <button
                    onClick={() => navigate('/')}
                    className="mt-8 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded transition"
                >
                    Back to Home
                </button>
            </div>
        </div>
    );
};

export default ReservationSuccess;
