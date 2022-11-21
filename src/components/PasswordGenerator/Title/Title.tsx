import style from './Title.module.scss';

type TitleProps = {
    title?: string,
};

export const Title = ({ title='密码生成器' }: TitleProps): JSX.Element => {
    return (
        <h2 className={style.title}>
            {title}
        </h2>
    );
};