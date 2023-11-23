
import React, { useState } from 'react';
import { Container, Title, PasswordInput, VerifyPasswordInput, ResetButton } from './reset_password.styles';
import { customAxios } from '../../utils/customAxios';
import { useNavigate, useParams } from 'react-router-dom';

const ResetPassword: React.FC = () => {
    const navigate = useNavigate();
    const { token } = useParams()
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handlePin = async () => {

        const response = await customAxios.post(`/reset_password/${token}`, { password, confirmPassword })
        if (response.status === 200) {
            navigate('/')
        }

    };


    return (
        <Container>
            <Title>Reset Password</Title>
            <PasswordInput
                type="password"
                placeholder="Enter new password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <VerifyPasswordInput
                type="password"
                placeholder="Verify new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <ResetButton onClick={handlePin}>Reset Password</ResetButton>
        </Container>
    );
};

export default ResetPassword;

