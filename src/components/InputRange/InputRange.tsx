import { useState } from 'react';
import classNames from 'classnames';
import style from './InputRange.module.scss';

type InputRange = {
    description: string,
    min?: number,
    max?: number,
    [value: number, setValue: React.Dispatch<React.SetStateAction<number>>],
};

export const InputRange = ({
    description,
    min = 0,
    max = 100,
}: InputRange): JSX.Element => {

    const [percentage, setPercentage] = useState<number>(46.4286);

    const handleChange = () => {
    };

    return (
        <div></div>
    );
};