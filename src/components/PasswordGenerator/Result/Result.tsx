import classNames from 'classnames';
import style from './Result.module.scss';
import { CopyIcon } from './../../Icon/CopyIcon/CopyIcon';

type ResultProps = {

};

export const Result = ({}: ResultProps): JSX.Element => {
    return (
        <div className={style.result}>
            <div className={classNames(
                style.resultTitle,
                'field-title',
            )}>
                生成的密码
            </div>
            <div className={classNames(
                style.resultInfo,
                style.right
            )}>
                点击复制
            </div>
            <div className={classNames(
                style.resultInfo,
                style.result
            )}>
                复制
            </div>
            <div className={classNames(
                style.resultViewBox
            )}>
                点击生成
            </div>
            <button className={style.copyBtn}>
                <CopyIcon />
            </button>
        </div>
    );
};