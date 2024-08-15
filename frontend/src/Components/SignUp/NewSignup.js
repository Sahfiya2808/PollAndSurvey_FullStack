import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NewSignup.css'; // Import the CSS file
import addServices from '../../Service/AddServices';

const NewSignup = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        businessType: '',
        targetGroup: ''
    });
    const [errors, setErrors] = useState({});
    const [showMessage, setShowMessage] = useState(false);
    const navigate = useNavigate(); // Hook to navigate programmatically

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.username) newErrors.username = 'Username is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.password) newErrors.password = 'Password is required';
        if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
        if (!formData.email.includes('@business.com')) newErrors.email = 'Only business emails are allowed';
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        try {
            const response = await addServices.createUser(formData);
            setShowMessage(true);
            setTimeout(() => {
                setShowMessage(false);
                navigate('/login'); // Redirect to login page after a short delay
            }, 2000); // Delay for 2 seconds to display the message
        } catch (error) {
            setErrors({ apiError: 'An error occurred. Please try again later.' });
        }
    };

    const handleClick = () => {
        navigate('/NewSignin');
    }

    return (
        <div className="signupmain-container">
            <div className="signupform-wrapper">
                <div className="signup-container">
                    <h2>Sign Up</h2>
                    <form onSubmit={handleSubmit} className="signup-form">
                        <div className="signupform-group">
                            <label>Username:</label>
                            <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                className={errors.username ? 'input-error' : ''}
                            />
                            {errors.username && <p className="signuperror-text">{errors.username}</p>}
                        </div>
                        <div className="signupform-group">
                            <label>Email:</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={errors.email ? 'input-error' : ''}
                            />
                            {errors.email && <p className="signuperror-text">{errors.email}</p>}
                        </div>
                        <div className="signupform-group">
                            <label>Password:</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className={errors.password ? 'input-error' : ''}
                            />
                            {errors.password && <p className="signuperror-text">{errors.password}</p>}
                        </div>
                        {/*<div className="signupform-group">
                            <label>Confirm Password:</label>
                            <input
                                type="password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className={errors.confirmPassword ? 'input-error' : ''}
                            />
                            {errors.confirmPassword && <p className="signuperror-text">{errors.confirmPassword}</p>}
                        </div>*/}
                        <div className="signupform-groupbus">
                            <label>Business Type:</label>
                            <textarea
                                name="businessType"
                                value={formData.businessType}
                                onChange={handleChange}
                                className={errors.businessType ? 'input-error' : ''}
                            />
                            {errors.businessType && <p className="signuperror-text">{errors.businessType}</p>}
                        </div>
                        <div className="signupform-group">
                            <label className="targetgap">Target Group:</label>
                            <select 
                                name="targetGroup" 
                                value={formData.targetGroup}
                                onChange={handleChange}
                                className={errors.targetGroup ? 'input-error' : ''}>
                                <option value="">Select target group</option>
                                <option value="12-17">12-17</option>
                                <option value="18-24">18-24</option>
                                <option value="25-34">25-34</option>
                                <option value="35-44">35-44</option>
                                <option value="45-54">45-54</option>
                                <option value="55+">55+</option>
                            </select>
                            {errors.targetGroup && <p className="signuperror-text">{errors.targetGroup}</p>}
                        </div>
                        <button type="submit" className="signipsubmit-button">Sign Up</button>
                        {errors.apiError && <p className="signuperror-text">{errors.apiError}</p>}
                        {showMessage && <div className="pop-up-message active">Registered successfully!</div>}
                    </form>
                    <div className="login-link">
                        <p>Already have an account?</p>
                        <button onClick={handleClick}>Log In</button>
                    </div>
                </div>
            </div>
            <div className="signupimage-container">
                {/* Add your image here */}
                <img src="https://img.freepik.com/free-vector/woman-reading-business-agreement-special-offer-contract-clipboard-deal-arrangement-terms-use-document-studying-paper-form-vector-isolated-concept-metaphor-illustration_335657-4333.jpg" alt="Signup" />
            </div>
        </div>
    );
};

export default NewSignup;
