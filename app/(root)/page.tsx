import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
    const banks = [
        {
            currentBalance: 125.50
        },
        {
            currentBalance: 500.10
        }
    ]
    const loggedIn = { firstName: 'Habibulloh', lastName: 'Karimov', email: "k.habibulloh@gmail.com" }
    return (
        <section className='home'>
            <div className='home-content'>
                <header className='home-header'>
                    <HeaderBox
                        type="greeting"
                        title='Welcome'
                        user={loggedIn?.firstName || 'Guest'}
                        subtext='Access and mange your account and transactions efficiently'
                    />
                    <TotalBalanceBox
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={1250.25}
                    />
                </header>
            </div>
            <RightSidebar
                user={loggedIn}
                transactions={[]}
                banks={banks}
            />
        </section>
    )
}

export default Home