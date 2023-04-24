import { Formik, Field, Form } from 'formik';
import { addUser } from '../../service/Api';
import { useState } from 'react';

const initialValues = {
  user: '',
  tweets: Number(''),
  followers: Number(''),
  avatar: '',
};

const AddUser = () => {
  const [user, setUser] = useState(initialValues);
  const hendleSubmit = (values, { resetForm }) => {
    async function postUser() {
      try {
        const postUserInf = await addUser({ ...values });
        setUser(postUserInf);
        console.log(postUserInf);
      } catch (error) {
        console.log(error);
      }
    }
    postUser();
    resetForm();
  };
  return (
    <Formik initialValues={initialValues} onSubmit={hendleSubmit}>
      <Form>
        <label>
          <p>User</p>
          <Field type="text" name="user" required />
        </label>
        <label>
          <p> Tweets</p>
          <Field type="number" name="tweets" required />
        </label>
        <label>
          <p> Followers</p>
          <Field type="number" name="followers" required />
        </label>
        <label>
          <p> Avatar</p>
          <Field type="url" name="avatar" required />
        </label>
        <button type="submit">Add user</button>
      </Form>
    </Formik>
  );
};

export default AddUser;
