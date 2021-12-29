import React, { useState, useCallback } from 'react'
import Button from './Button';
import Header from './Header'
import Text from './Text';
const Parent = () => {
    const [age, setAge] = useState(0);
    const [salary, setSalary] = useState(50000);
    const incrementAge = useCallback(
        () => {
            setAge(age + 1)
        },
        [age],
    )

    const incrementSalary = useCallback(
        () => {
            setSalary(salary + 1000)
        },
        [salary],
    )

    return (
        <div>
            <Header />
            <Text value={age} />
            <Button Onclick={incrementAge}>Increment age</Button>
            <Text value={salary} />
            <Button Onclick={incrementSalary}>Increment salary</Button>
        </div>
    )
}

export default Parent
