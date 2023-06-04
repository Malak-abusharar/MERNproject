import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Statistics = () => {
    const [averageProgress, setAverageProgress] = useState(0);
    const [showStatistics, setShowStatistics] = useState(false);

    useEffect(() => {
        axios.get('/back_end/database/db.js')
            .then(response => {
                const data = response.data;
                const totalProgress = data.reduce((sum, item) => sum + item.progress, 0);
                const average = totalProgress / data.length;
                setAverageProgress(average);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const toggleStatistics = () => {
        setShowStatistics(prevState => !prevState);
    };

    return (
        <div>
            <button onClick={toggleStatistics}> Statistics</button>
            {showStatistics && (
                <div>
                    <p>Average Progress in Day: {averageProgress}%</p>
                </div>
            )}
        </div>
    );
};

export default Statistics;

