import React from 'react';
import '../styles/RegisterStyles.css';
import { Form, Input } from 'antd';
import { Link } from 'react-router-dom';

const Register = () => {



    // form handler
    const onfinishHandler = (values) => {
      console.log(values);
    };

  return (
   <>
      <div className="form-container">
        <Form layout='vertical' onFinish={onfinishHandler} className='register-form'>
          <h3 className='text-center'>Register Form</h3>
          <Form.Item label="Name" name="name">
              <Input type="text" required />
          </Form.Item>
          <Form.Item label="Email" name="email">
              <Input type="email" required />
          </Form.Item>
          <Form.Item label="Password" name="password">
              <Input type="password" required />
          </Form.Item>
          <Link to="/login" className='ms-2'>Already a user? Login here.</Link>
          <button className='btn btn-primary' type='submit'>Register</button>

        </Form>

      </div>
   </>

  )
}

export default Register
