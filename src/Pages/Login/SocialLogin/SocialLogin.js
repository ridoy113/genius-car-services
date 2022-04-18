import React from 'react';
import google from '../../../images/social/google.png'
import facebook from '../../../images/social/facebook.png'
import github from '../../../images/social/github.png'
import auth from '../../../firebase.init';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();

    let errorElement;

    if (loading || loading1) {
        return <Loading></Loading>
    }

    if (error || error1) {
        errorElement = <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
    }

    if (user || user1) {
        navigate('/home');
    }

    return (
        <div>
            <div
                className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
            </div>
            {errorElement}
            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-dark w-50 d-block mx-auto my-2'>
                    <img src={google} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>

                <button

                    className='btn btn-danger w-50 d-block mx-auto my-2'>
                    <img src={facebook} alt="" />
                    <span className='px-2'>FaceBook Sign In</span>
                </button>

                <button
                    onClick={() => signInWithGithub()}
                    className='btn btn-warning w-50 d-block mx-auto my-2'>
                    <img src={github} alt="" />
                    <span className='px-2'>GitHub Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;