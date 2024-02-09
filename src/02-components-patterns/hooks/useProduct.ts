import { InitialValues } from './../interfaces/interfaces';
import { useEffect, useRef, useState } from "react"
import { OnChangeArgs, Product } from "../interfaces/interfaces"

interface UseProductProps {
    product: Product;
    onChange?: (args: OnChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues;
}

export const useProduct = ({ onChange, product, value = 0, initialValues } : UseProductProps) => {

    const [counter, setCounter] =  useState(initialValues?.count || value)
    const isMounted = useRef(false)

    const increaseBy = (value: number) => {
        let newValue = Math.max(counter + value, 0)

        if(initialValues?.maxCount) {
            newValue = Math.min(newValue, initialValues.maxCount)
        }

        setCounter(newValue)
        onChange && onChange({ count: newValue, product})
    }

    const reset = () => {
        setCounter(initialValues?.count || value)
    }

    useEffect(() => {
        if(!isMounted.current) return;
        setCounter(value)
    }, [value])

    // useEffect(() => {
    //     isMounted.current = true;
    // }, [])

    return {
        counter,
        increaseBy,
        isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
        maxCount: initialValues?.maxCount || value,
        reset,
    }
}