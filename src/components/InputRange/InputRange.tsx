import classNames from 'classnames';
import style from './InputRange.module.scss';

type InputRange = {
    description: string,
    min?: number,
    max?: number,
    value?: number,
};

export const InputRange = ({
    description,
    min = 0,
    max = 100,
    value = 50,
}: InputRange): JSX.Element => {
    return (
        <div 
            className={classNames(
                style.rangeSlider,
            )}
            data-min={min}
            data-max={max}
        >
            <div
                className={classNames(
                    'field-title',
                )}
                data-length='0'
            >{description}</div>
            <input type="range" min={min} max={max} value={value} />
        </div>
    );
};