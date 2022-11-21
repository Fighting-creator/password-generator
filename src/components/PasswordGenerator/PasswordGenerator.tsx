import './PasswordGenerator.scss';
import { Result } from './Result/Result';
import { Title } from './Title/Title';

type PasswordGeneratorProps = {

};

const PasswordGenerator = ({}: PasswordGeneratorProps): JSX.Element => {    
    return (
        <div className="password-generator-container">
            <Title />
            <Result />
        </div>
    );
};

export default PasswordGenerator;