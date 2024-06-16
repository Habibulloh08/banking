'use client'
import CountUp from "react-countup";

interface AnimatedCounterProps {
    amount: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ amount }) => {
    return (
        <div className="w-full">
            <CountUp
                decimals={2}
                decimal=","
                prefix="$"
                end={amount} />
        </div>
    );
};

export default AnimatedCounter;
