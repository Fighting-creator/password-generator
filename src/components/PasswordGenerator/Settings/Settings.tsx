import classNames from 'classnames';
import style from './Settings.module.scss';

type Settings = {
};

export const Settings = ({}: Settings): JSX.Element => {    

    return ( 
        <div className={style.settings}>
            <span className={classNames(style.settingsTitle, 'field-title')}>设置</span>
            <div className={style.setting}>
                <input type="checkbox" defaultChecked={true} />
                <label htmlFor='uppercase'>包括大写字母</label>
            </div>
            <div className={style.setting}>
                <input type="checkbox" defaultChecked={true} />
                <label htmlFor="lowercase">包括小写字母</label>
            </div>
            <div className={style.setting}>
                <input type="checkbox" defaultChecked={true} />
                <label htmlFor="number">包括数字</label>
            </div>
            <div className={style.setting}>
                <input type="checkbox" defaultChecked={true} />
                <label htmlFor="symbol">包括符号</label>
            </div>
        </div>
    );
};