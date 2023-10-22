import React from 'react';
import { Link } from 'react-router-dom';
import './PerformTransactions.css';

const PerformTransactions = () => {
    const entities = [
        { name: "Manufacturer", actions: ["Sell", "Give", "Dispose"] },
        { name: "Distributor", actions: ["Sell"] },
        { name: "Retailer", actions: ["Sell"] },
        { name: "Consumer", actions: ["Return", "Give", "Dispose"] },
        { name: "Refurbisher", actions: ["Sell", "Give", "Dispose"] },
        { name: "Recycler", actions: ["Dispose"] },
        { name: "Govt.", actions: ["View All Transactions"] },
        { name: "Environmental Agency", actions: ["View Transactions"] }
    ];

    return (
        <div className="transactions-container">
            <h1>Perform Transactions Page</h1>
            <div className="entities-container">
                {entities.map(entity => (
                    <div className="entity-card" key={entity.name}>
                        <h2>{entity.name}</h2>
                        <ul>
                            {entity.actions.map(action => (
                                <li key={action}>{action}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <Link to="/" className="btn-link">
                <button className="transactions-btn">Back to Home</button>
            </Link>
        </div>
    );
}

export default PerformTransactions;
