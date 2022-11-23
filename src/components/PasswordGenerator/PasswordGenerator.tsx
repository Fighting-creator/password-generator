import { useRef, useState } from 'react';
import { generatePassword } from '../../util';
import { CopyIcon } from '../Icon/CopyIcon/CopyIcon';
import './PasswordGenerator.scss';
import { Title } from './Title/Title';

type PasswordGeneratorProps = {
};

// 范围滑块条属性
// fill: 拖动滑块时看到的拖尾颜色。
// background: 默认范围滑块背景
const sliderProps = {
	fill: "#0B1EDF",
	background: "rgba(255, 255, 255, 0.214)",
};

const PasswordGenerator = ({}: PasswordGeneratorProps): JSX.Element => {   
    // result
    const [generatedPassword, setGeneratedPassword] = useState<boolean>(true); // 是否是第一次生成密码
    const resultContainerRef = useRef<HTMLDivElement>(null);
    const resultRef = useRef<HTMLDivElement>(null);
    const copyBtnRef = useRef<HTMLButtonElement>(null);
    const [copyBtnTop, setCopyBtnTop] = useState<string>('0');
    const [copyBtnLeft, setCopyBtnLeft] = useState<string>('0');
    interface ContainerBound {
        top: number,
        left: number,
    }
    const [resultContainerBound, setResultContainerBound] = useState<ContainerBound>({
        top: 0,
        left: 0,
    });
    const handleResultMouseMove = (event: any) => {
        const ContainerBoundType = {
            left: resultContainerRef.current!.getBoundingClientRect().left,
            top: resultContainerRef.current!.getBoundingClientRect().top,
        };
        setResultContainerBound(ContainerBoundType);
        if (generatedPassword) {
            copyBtnRef.current!.style.opacity = '1';
            copyBtnRef.current!.style.pointerEvents = 'all';
            setCopyBtnTop(`${event.clientY - resultContainerBound!.top}px`);
            setCopyBtnLeft(`${event.clientX - resultContainerBound!.left}px`);
        } else {
            copyBtnRef.current!.style.opacity = '0';
            copyBtnRef.current!.style.pointerEvents = 'none';
        }
    };
    const copyInfoRef = useRef<HTMLDivElement>(null);
    const copiedInfoRef = useRef<HTMLDivElement>(null);
    const handleCopyClick = () => {
        const textarea = document.createElement("textarea");
        const password = resultRef.current!.innerText;
        if (!password || password == "点击生成") {
            return;
        }
        textarea.value = password;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        textarea.remove();

        copyInfoRef.current!.style.transform = "translateY(200%)";
        copyInfoRef.current!.style.opacity = "0";
        copiedInfoRef.current!.style.transform = "translateY(0%)";
        copiedInfoRef.current!.style.opacity = "0.75";
    };

    // length-input-range
    const lengthInputRef = useRef<HTMLInputElement>(null);
    const [passwordLength, setPasswordLength] = useState<number>(16);
    const [percentage, setPercentage] = useState<number>(46.4286);
    const handleLengthValueChange = (event: {target: {value: any}}) => {
        let target = event.target as HTMLInputElement;
        setPercentage((100 * (Number(target.value) - Number(target.min))) / (Number(target.max) - Number(target.min)));
        setPasswordLength(Number(target.value));
    };

    // settings
    const uppercaseRef = useRef<HTMLInputElement>(null);
    const lowercaseRef = useRef<HTMLInputElement>(null);
    const numberRef = useRef<HTMLInputElement>(null);
    const symbolRef = useRef<HTMLInputElement>(null);

    // 该函数用于处理复选框的状态，以便至少选中一个复选框。最后一个复选框将被禁用。
    const disableOnlyCheckbox = () => {
        let totalChecked = [uppercaseRef, lowercaseRef, numberRef, symbolRef].filter(ref => ref.current!.checked)
        totalChecked.forEach(ref => {
            console.log(totalChecked.length);
            if (totalChecked.length === 1) {
                ref.current!.disabled = true;
            } else {
                ref.current!.disabled = false;
            }
        });
    };

    const handleLabelClick = (event: any) => {
        if (event.target.getAttribute("for") === "uppercase" && !uppercaseRef.current!.disabled) {
            uppercaseRef.current!.checked = !uppercaseRef.current!.checked;
        } else if (event.target.getAttribute("for") === "lowercase" && !lowercaseRef.current!.disabled) {
            lowercaseRef.current!.checked = !lowercaseRef.current!.checked;
        } else if (event.target.getAttribute("for") === "number" && !numberRef.current!.disabled) {
            numberRef.current!.checked = !numberRef.current!.checked;
        } else if (event.target.getAttribute("for") === "symbol" && !symbolRef.current!.disabled) {
            symbolRef.current!.checked = !symbolRef.current!.checked;
        }

        disableOnlyCheckbox();
    }

    // 当单击“生成”时，生成密码id。
    const handleGeneratedPasswordClick = () => {
        const length = +lengthInputRef.current!.value;
        const hasLower = lowercaseRef.current!.checked;
        const hasUpper = uppercaseRef.current!.checked;
        const hasNumber = numberRef.current!.checked;
        const hasSymbol = symbolRef.current!.checked;
        setGeneratedPassword(true);
        resultRef.current!.innerText = generatePassword(length, hasLower, hasUpper, hasNumber, hasSymbol);
        copyInfoRef.current!.style.transform = "translateY(0%)";
        copyInfoRef.current!.style.opacity = "0.75";
        copiedInfoRef.current!.style.transform = "translateY(200%)";
        copiedInfoRef.current!.style.opacity = "0";
    };

    return (
        <div className="password-generator-container">
            <Title />
            <div className='result' ref={resultContainerRef}  onMouseMove={(e) => handleResultMouseMove(e)}>
                <div className='result__title field-title'>生成的密码</div>
                <div className='result__info right' ref={copyInfoRef}>点击复制</div>
                <div className='result__info left' ref={copiedInfoRef}>复制</div>
                <div className='result__viewbox' ref={resultRef}>点击生成</div>
                <button 
                    className='copy-btn'
                    ref={copyBtnRef}
                    style={{
                        top: copyBtnTop,
                        left: copyBtnLeft,
                    }}
                    onClick={() => handleCopyClick()}
                >
                    <CopyIcon />
                </button>
            </div>
            <div className='length range__slider' data-min={4} data-max={32}>
                <div className='length__title field-title' data-length={passwordLength}>
                    <span className='bgm-button'>长度:</span>
                </div>
                <input
                    className='slider' type="range" min={4} max={32} value={passwordLength}
                    ref={lengthInputRef}
                    onChange={(e) => handleLengthValueChange(e)}
                    style={{background: `linear-gradient(90deg, ${sliderProps.fill} ${percentage}%, ${sliderProps.background} ${percentage + 0.1}%)`,}}
                />
            </div>
            <div className='settings'>
                <span className='settings__title field-title'>设置</span>
                <div className='setting'>
                    <input type="checkbox" ref={uppercaseRef} checked={true} />
                    <label htmlFor='uppercase' onClick={(e) => handleLabelClick(e)}>包括大写字母</label>
                </div>
                <div className='setting'>
                    <input type="checkbox" ref={lowercaseRef} checked={true} />
                    <label htmlFor="lowercase" onClick={(e) => handleLabelClick(e)}>包括小写字母</label>
                </div>
                <div className='setting'>
                    <input type="checkbox" ref={numberRef} checked={true} />
                    <label htmlFor="number" onClick={(e) => handleLabelClick(e)}>包括数字</label>
                </div>
                <div className='setting'>
                    <input type="checkbox" ref={symbolRef} checked={true} />
                    <label htmlFor="symbol" onClick={(e) => handleLabelClick(e)}>包括符号</label>
                </div>
            </div>
            <button className='btn generate' onClick={() => handleGeneratedPasswordClick()}>生成密码</button>
        </div>
    );
};

export default PasswordGenerator;