import { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import axios from 'axios';

gsap.registerPlugin(ScrollTrigger);

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || import.meta.env.VITE_API_URL;;

const DrinkBuilder = () => {
    const [ingredients, setIngredients] = useState([]);
    const [baseId, setBaseId] = useState('');
    const [mixerId, setMixerId] = useState('');
    const [garnishId, setGarnishId] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);
    const [loadingIngredients, setLoadingIngredients] = useState(false);
    const [buildingDrink, setBuildingDrink] = useState(false);

    useEffect(() => {
        setLoadingIngredients(true);
        axios.get(`${API_BASE_URL}/api/drinks/ingredients`)
            .then(res => {
                if (res.data.success) {
                    setIngredients(res.data.data);
                } else {
                    setError('Failed to load ingredients');
                }
            })
            .catch(() => setError('Failed to fetch ingredients'))
            .finally(() => setLoadingIngredients(false));
    }, []);

    useEffect(() => {
        if (ingredients.length > 0) {
            gsap.from(".builder-container", {
                opacity: 1,
                y: 50,
                duration: 1,
                scrollTrigger: {
                    trigger: ".builder-container",
                    start: "top 80%",
                },
            });
        }
    }, [ingredients]);

    const handleBuildDrink = async () => {
        if (!baseId || !mixerId || !garnishId) {
            setError("Please select all ingredients.");
            setResult(null);
            return;
        }

        setError(null);
        setResult(null);
        setBuildingDrink(true);

        try {
            const res = await axios.post(`${API_BASE_URL}/api/drinks/build`, {
                baseId,
                mixerId,
                garnishId,
            });

            if (res.data.success) {
                setResult(res.data.drink);
            } else {
                setError(res.data.message || 'Failed to build drink.');
            }
        } catch {
            setError('Server error while building drink.');
        } finally {
            setBuildingDrink(false);
        }
    };

    const renderOptions = (type) =>
        ingredients
            .filter(ing => ing.type === type)
            .map(ing => (
                <option key={ing._id} value={ing._id}>
                    {ing.name}
                </option>
            ));

    return (
        <section className="relative min-h-screen py-20 text-white overflow-hidden">

            {/* 🔥 Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-contain z-0"
            >
                <source src="/videos/drink.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* 🔲 Overlay for contrast */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10" />

            {/* 🍸 Content */}
            <div className="relative z-20 max-w-3xl mx-auto px-6 builder-container">
                <h1 className="text-4xl font-bold mb-10 text-center text-amber-400">🍹 Build Your Own Drink</h1>

                {loadingIngredients && (
                    <p className="text-center text-amber-300 mb-4">Loading ingredients...</p>
                )}

                {error && (
                    <p className="text-center text-red-400 mb-4">{error}</p>
                )}

                <div className="space-y-6">
                    {/* Base */}
                    <div>
                        <label className="block mb-2 text-purple-300 font-medium">Select Base</label>
                        <select
                            value={baseId}
                            onChange={(e) => setBaseId(e.target.value)}
                            className="w-full p-3 rounded bg-gray-800 text-white border border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                        >
                            <option value="">-- Choose Base --</option>
                            {renderOptions('base')}
                        </select>
                    </div>

                    {/* Mixer */}
                    <div>
                        <label className="block mb-2 text-purple-300 font-medium">Select Mixer</label>
                        <select
                            value={mixerId}
                            onChange={(e) => setMixerId(e.target.value)}
                            className="w-full p-3 rounded bg-gray-800 text-white border border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                        >
                            <option value="">-- Choose Mixer --</option>
                            {renderOptions('mixer')}
                        </select>
                    </div>

                    {/* Garnish */}
                    <div>
                        <label className="block mb-2 text-purple-300 font-medium">Select Garnish</label>
                        <select
                            value={garnishId}
                            onChange={(e) => setGarnishId(e.target.value)}
                            className="w-full p-3 rounded bg-gray-800 text-white border border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                        >
                            <option value="">-- Choose Garnish --</option>
                            {renderOptions('garnish')}
                        </select>
                    </div>

                    {/* Build Button */}
                    <button
                        onClick={handleBuildDrink}
                        disabled={buildingDrink || loadingIngredients}
                        className={`w-full bg-amber-400 hover:bg-amber-500 text-black font-bold py-3 rounded transition-all ${
                            buildingDrink || loadingIngredients ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                    >
                        {buildingDrink ? 'Mixing your drink...' : 'Build My Drink 🍸'}
                    </button>

                    {/* Result */}
                    {result && (
                        <div className="mt-10 p-6 rounded-lg bg-gray-900 border border-amber-500 shadow-xl text-center text-amber-300">
                            <h2 className="text-3xl font-bold mb-2">{result.name}</h2>
                            <p className="mb-1 font-medium">Ingredients: {result.ingredients.join(', ')}</p>
                            <p className="text-xl font-bold">
                                Estimated Alcohol By Volume: <span className="text-amber-400">{result.estimatedABV}</span>
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default DrinkBuilder;
