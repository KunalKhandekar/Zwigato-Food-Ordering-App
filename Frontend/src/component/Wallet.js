import React, { useEffect, useState } from 'react';
import { FaWallet, FaStore } from 'react-icons/fa';

const Wallet = () => {
    const initialBalance = 1500;
    const orderHistory = JSON.parse(localStorage.getItem('orderHistory')) || [];
    
    const [walletBalance, setWalletBalance] = useState(initialBalance);
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const storedBalance = localStorage.getItem('walletBalance');
        if (storedBalance) {
            setWalletBalance(Number(storedBalance));
        }

        const prevTransactions = orderHistory.map((order) => ({
            id: order.date,
            amount: -order.totalPrice,
            date: order.date,
            restaurant: order.restaurant.ResName,
        }));

        setTransactions(prevTransactions);
        const totalSpent = prevTransactions.reduce((acc, transaction) => acc + transaction.amount, 0);
        const newBalance = initialBalance + totalSpent;
        setWalletBalance(newBalance);
        localStorage.setItem('walletBalance', newBalance);
    }, [orderHistory, initialBalance]);

    return (
        <div className="max-w-[900px] mx-auto p-6 my-3 bg-white shadow-lg rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-6 text-orange-600">My Wallet</h2>
            <div className="bg-gray-100 p-4 rounded-lg mb-6 flex items-center justify-between">
                <div className="flex items-center">
                    <FaWallet className="text-3xl text-orange-500 mr-2" />
                    <h3 className="text-xl font-semibold">Balance:</h3>
                </div>
                <h3 className="text-xl font-bold text-green-600">&#8377;{walletBalance}</h3>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Transaction History:</h3>
            {transactions.length > 0 ? (
                <ul className="bg-gray-100 rounded-lg shadow-sm">
                    {transactions.sort((a, b) => new Date(b.date) - new Date(a.date)).map((transaction, index) => (
                        <li key={index} className="flex justify-between items-center py-3 px-4 border-b hover:bg-gray-200 transition duration-150">
                            <div className="flex items-center">
                                <FaStore className="text-lg text-gray-600 mr-2" />
                                <div>
                                    <span className="font-medium">{transaction.restaurant}</span>
                                    <span className="text-gray-500"> - {new Date(transaction.date).toLocaleString()}</span>
                                </div>
                            </div>
                            <span className={`font-medium ${transaction.amount < 0 ? 'text-red-600' : 'text-green-600'}`}>
                                &#8377;{Math.abs(transaction.amount)}
                            </span>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-center mt-2">No transactions found.</p>
            )}
        </div>
    );
};

export default Wallet;
