import './Heading.scss';

type HeadingProps = {
    title: string;
    description: string;
};

export const Heading = ({
    title,
    description
}: HeadingProps): JSX.Element => {
    return (
        <div className="heading">
            <h1>{title}</h1>
            <h4>{description}</h4>
        </div>
    );
};